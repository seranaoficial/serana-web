import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, MessageCircle, Music2, X, Send, ShoppingBag, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useOrderStore } from '../store/useOrderStore';
import { captureLead } from '../lib/api/leads';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    text: '¡Hola! Soy tu asistente virtual de Serana. 🌿 ¿En qué puedo ayudarte hoy?',
    sender: 'bot',
    options: ['Ver Menú', 'Hacer Pedido Rápido', 'Estado de mi pedido']
  }
];

const MENU_ITEMS = [
  { id: '1', name: 'Bowl Mediterráneo', price: 25000 },
  { id: '2', name: 'Wrap de Pollo Pesto', price: 18000 },
  { id: '3', name: 'Jugo Verde Detox', price: 8000 },
];

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/serana.ac?igsh=bXhwYnprcnR2M25r',
    Icon: Instagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/search?q=serana',
    Icon: Music2,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/573000000000',
    Icon: MessageCircle,
  },
];

export default function ChatBot() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>('');
  const leadCapturedRef = useRef(false);
  const { addOrder } = useOrderStore();
  const isCompactFlow = pathname === '/menu' || pathname === '/shop' || pathname === '/login' || pathname === '/cuenta';

  if (!sessionIdRef.current) {
    sessionIdRef.current = `chat-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Lead capture: la primera vez que un visitante escribe en el bot creamos
    // un registro en crm.leads con el primer mensaje. Las réplicas siguientes
    // no generan más leads para no spamear.
    if (!leadCapturedRef.current) {
      leadCapturedRef.current = true;
      void captureLead({
        channel: 'chatbot',
        message: text.trim(),
        metadata: { session_id: sessionIdRef.current },
      });
    }

    // Simulate bot response
    setTimeout(() => {
      let botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, no entendí eso. ¿Podrías intentar con las opciones?',
        sender: 'bot',
        options: ['Ver Menú', 'Hacer Pedido Rápido']
      };

      const lowerText = text.toLowerCase();

      if (lowerText.includes('menú') || lowerText.includes('menu')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: 'Aquí tienes nuestros platos más populares:',
          sender: 'bot',
          options: MENU_ITEMS.map(item => `${item.name} - $${item.price}`)
        };
      } else if (lowerText.includes('pedido') || lowerText.includes('pedir')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: '¡Genial! ¿Qué te gustaría ordenar? (Escribe el nombre del plato)',
          sender: 'bot',
          options: MENU_ITEMS.map(item => item.name)
        };
      } else if (MENU_ITEMS.some(item => lowerText.includes(item.name.toLowerCase()))) {
        const item = MENU_ITEMS.find(i => lowerText.includes(i.name.toLowerCase()));
        if (item) {
          // Create order automatically
          addOrder({
            customerName: 'Cliente Chat',
            items: [{ ...item, quantity: 1 }],
            total: item.price
          });
          
          botResponse = {
            id: (Date.now() + 1).toString(),
            text: `¡Excelente elección! He añadido 1 ${item.name} a tu pedido. Tu orden ha sido enviada a nuestro dashboard y se está procesando. 🚀`,
            sender: 'bot',
            options: ['Pedir algo más', 'Finalizar']
          };
        }
      } else if (lowerText.includes('finalizar') || lowerText.includes('gracias')) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          text: '¡Gracias a ti! Tu pedido está en camino. ¡Que lo disfrutes! 💚',
          sender: 'bot'
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Toggle Button Container */}
      <div
        className={`fixed bottom-4 right-4 z-50 flex-col items-end pointer-events-none sm:bottom-6 sm:right-6 ${
          isCompactFlow ? 'hidden sm:flex' : 'flex'
        }`}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mb-3 hidden flex-col gap-2 pointer-events-auto sm:flex"
            >
              {SOCIAL_LINKS.map(({ label, href, Icon }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="w-11 h-11 rounded-full bg-white text-serana-forest border border-serana-forest/10 shadow-lg flex items-center justify-center hover:bg-serana-ochre hover:text-serana-forest transition-colors"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.7} />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* Notification Bubble */}
        <AnimatePresence>
          {!isOpen && hasUnread && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="hidden bg-white text-gray-800 px-3 py-2 rounded-2xl rounded-br-none shadow-lg border border-gray-100 text-xs font-medium mb-2 mr-1 pointer-events-auto relative sm:block"
            >
              <p>👋 ¡Hola! ¿Tienes hambre?</p>
              <div className="absolute -bottom-1.5 right-0 w-2.5 h-2.5 bg-white border-r border-b border-gray-100 transform rotate-45"></div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="relative w-14 h-14 bg-serana-forest text-white rounded-full shadow-xl flex items-center justify-center hover:bg-serana-forest/90 transition-all pointer-events-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleChat}
        >
          {/* Pulse effect ring */}
          {!isOpen && hasUnread && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-serana-forest opacity-30 animate-ping"></span>
          )}
          
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          
          {/* Red dot badge */}
          {!isOpen && hasUnread && (
            <span className="absolute top-0 right-0 block h-3.5 w-3.5 rounded-full ring-2 ring-white bg-red-500 transform translate-x-0 translate-y-0" />
          )}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, x: 20 }}
            className="fixed bottom-28 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[600px] h-[500px]"
          >
            {/* Header */}
            <div className="bg-serana-forest p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <ShoppingBag className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-medium">Serana Bot</h3>
                <p className="text-white/70 text-xs">En línea ahora</p>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === 'user'
                        ? 'bg-serana-forest text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Options Chips */}
              {messages[messages.length - 1].sender === 'bot' && messages[messages.length - 1].options && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {messages[messages.length - 1].options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSendMessage(option)}
                      className="text-xs bg-serana-ochre/10 text-serana-ochre border border-serana-ochre/20 px-3 py-1.5 rounded-full hover:bg-serana-ochre/20 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-100">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-serana-forest/50 focus:ring-1 focus:ring-serana-forest/50 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-10 h-10 bg-serana-forest text-white rounded-full flex items-center justify-center hover:bg-serana-forest/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
