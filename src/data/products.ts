import { Product } from '../store/useCartStore';

const baseProducts: Product[] = [
  // Ensaladas Gourmet
  {
    id: 'ensalada-almendras',
    name: 'Ensalada de Almendras Caramelizadas',
    price: 34900,
    description: 'Contiene grasas saludables y proteínas, ideal para días activos o personas que necesitan energía.',
    image: 'https://picsum.photos/seed/ensalada-almendras/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Grasas saludables', 'Proteínas'],
    healthBenefit: 'Contiene grasas saludables y proteínas, ideal para días activos o personas que necesitan energía.',
    observation: 'Contiene alérgenos, viene acompañada de vinagreta de miel y balsámico y su topping es queso ricotta.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 34900 },
      { label: '250 gr', price: 23900 },
    ],
    ingredients: ['cogollo europeo', 'rúcula', 'queso ricota', 'orégano', 'pimienta negra recién molida', 'cebolla chalota remojada', 'almendras peladas caramelizadas', 'miel de abejas', 'mix tomate cherry', 'uva importada', 'vinagreta de miel y balsámico']
  },
  {
    id: 'ensalada-quinoa',
    name: 'Ensalada de Quinoa',
    price: 37900,
    description: 'Contiene la proteína vegetal más completa: quinoa. Además aporta fibra y probióticos por su vinagreta.',
    image: 'https://picsum.photos/seed/ensalada-quinoa/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Proteína vegetal', 'Fibra'],
    healthBenefit: 'Contiene la proteína vegetal más completa: quinoa. Además aporta fibra y probióticos por su vinagreta.',
    observation: 'Contiene proteína vegetal, acompañada de una mayo griega de ajo y su topping es queso feta.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 37900 },
      { label: '250 gr', price: 25900 },
    ],
    ingredients: ['mezclum', 'rúcula', 'frutos secos mix', 'quinoa cocida', 'cebolla puerro tostada', 'tomate uvalina', 'mayonesa griega de ajo', 'queso feta', 'zanahoria']
  },
  {
    id: 'ensalada-italiana',
    name: 'Ensalada Italiana',
    price: 36900,
    description: 'Es una ensalada alta en proteína, te da energía sostenida y sacia tu apetito por horas, como una cena normal.',
    image: 'https://picsum.photos/seed/ensalada-italiana/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Proteína animal', 'Energía'],
    healthBenefit: 'Es una ensalada alta en proteína, te da energía sostenida y sacia tu apetito por horas, como una cena normal.',
    observation: 'Contiene proteína animal de alta calidad, acompañada de pesto y su topping es queso mozzarella di bufala ciliegine.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 36900 },
      { label: '250 gr', price: 23900 },
    ],
    ingredients: ['rúcula', 'mix tomate uvalina', 'pasta corta cocida', 'aceituna', 'burrata', 'pepino mediterráneo', 'cebolla chalota', 'pesto', 'mortadela italiana']
  },
  {
    id: 'ensalada-sandia-feta',
    name: 'Ensalada de Sandía y Feta',
    price: 31900,
    description: 'Contiene electrolitos que hidratan tu cuerpo profundamente. Además es digestiva.',
    image: 'https://picsum.photos/seed/ensalada-sandia-feta/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Hidratante', 'Digestiva'],
    healthBenefit: 'Contiene electrolitos que hidratan tu cuerpo profundamente. Además es digestiva.',
    observation: 'Acompañada de una vinagreta fresca de naranja y cilantro y su topping es el queso feta.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 31900 },
      { label: '250 gr', price: 21900 },
    ],
    ingredients: ['sandía baby', 'queso feta', 'pepino mediterráneo', 'menta', 'vinagreta de naranja y cilantro', 'garbanzo crocante']
  },
  {
    id: 'ensalada-baby',
    name: 'Ensalada Baby',
    price: 31900,
    description: 'Es alta en fibra y micronutrientes, una ensalada ultra limpia y funcional. Contiene antioxidantes diversos.',
    image: 'https://picsum.photos/seed/ensalada-baby/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Fibra', 'Micronutrientes'],
    healthBenefit: 'Es alta en fibra y micronutrientes, una ensalada ultra limpia y funcional. Contiene antioxidantes diversos.',
    observation: 'Acompañada de un hummus cremoso y balanceado.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 31900 },
      { label: '250 gr', price: 24900 },
    ],
    ingredients: ['zanahoria baby', 'mazorquita baby', 'palmitos', 'mix tomate cherry', 'cebolla chalota remojada', 'pepino mediterráneo', 'espinaca bogotana', 'brotes', 'hummus']
  },
  {
    id: 'ensalada-serana',
    name: 'Ensalada Serana',
    price: 29900,
    description: 'Alto en antioxidantes, buena fuente de fibra y balance entre lo dulce y lo salado.',
    image: 'https://picsum.photos/seed/ensalada-serana/400/300',
    category: 'ensaladas-gourmet',
    benefits: ['Antioxidantes', 'Fibra'],
    healthBenefit: 'Alto en antioxidantes, buena fuente de fibra y balance entre lo dulce y lo salado.',
    observation: 'Acompañada de una vinagreta de fresa y menta y sus toppings son el queso parmesano y los croutones.',
    portions: 3,
    variants: [
      { label: '450 gr', price: 29900 },
      { label: '250 gr', price: 19000 },
    ],
    ingredients: ['rúcula', 'queso parmesano', 'croutones', 'mix tomate cherry', 'uva importada', 'fresa', 'cebolla puerro tostada', 'pepino europeo', 'vinagreta de fresa y menta', 'zanahoria']
  },

  // Ensaladas Tradicionales
  {
    id: 'ensalada-cesar',
    name: 'Ensalada César',
    price: 26900,
    description: 'Es una ensalada que te da alta saciedad, es el equilibrio entre frescura y densidad nutricional.',
    image: 'https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/ensalada%20cesar.jpeg',
    category: 'ensaladas-tradicionales',
    benefits: ['Alta saciedad', 'Frescura'],
    healthBenefit: 'Es una ensalada que te da alta saciedad, es el equilibrio entre frescura y densidad nutricional.',
    observation: 'Acompañada de una salsa césar especiada y sus toppings son el queso parmesano y los croutones.',
    portions: 3,
    variants: [
      { label: '300 gr', price: 26900 },
      { label: '125 gr', price: 16500 },
    ],
    ingredients: ['cogollo europeo', 'queso parmesano', 'croutones', 'crujiente de garbanzos', 'brotes microgreen', 'salsa césar', 'maicitos', 'tomate perla']
  },
  {
    id: 'ensalada-primavera',
    name: 'Ensalada Primavera',
    price: 19900,
    description: 'Es una ensalada hidratante, digestiva y ligera, con aporte de vitaminas y antioxidantes.',
    image: 'https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/Ensalada_primavera_en_bol_54288481e0.jpeg',
    category: 'ensaladas-tradicionales',
    benefits: ['Hidratante', 'Digestiva'],
    healthBenefit: 'Es una ensalada hidratante, digestiva y ligera, con aporte de vitaminas y antioxidantes.',
    observation: 'Vinagreta de mostaza y miel y su topping es el puerro caramelizado.',
    portions: 4,
    variants: [
      { label: '500 gr', price: 19900 },
      { label: '250 gr', price: 15500 },
    ],
    ingredients: ['pepino sin semilla', 'tomate san marzano sin semilla', 'mango tommy', 'cebolla puerro tostada', 'cilantro', 'hierbabuena', 'vinagreta de mostaza y miel']
  },
  {
    id: 'verduras-saltear',
    name: 'Verduras para Saltear',
    price: 13900,
    description: 'Es alta en fibra, limpia tu sistema digestivo y mejora tu función intestinal. Es un detox natural.',
    image: 'https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/verduras%20para%20saltear.jpeg',
    category: 'ensaladas-tradicionales',
    benefits: ['Fibra', 'Detox natural'],
    healthBenefit: 'Es alta en fibra, limpia tu sistema digestivo y mejora tu función intestinal. Es un detox natural.',
    observation: 'No tiene toppings ni contiene alérgenos.',
    portions: 4,
    variants: [
      { label: '500 gr', price: 13900 },
      { label: '250 gr', price: 9000 },
    ],
    ingredients: ['zucchini', 'zanahoria', 'apio', 'brócoli', 'cebolla roja', 'cebolla puerro', 'pimentón']
  },
  {
    id: 'pico-de-gallo',
    name: 'Pico de Gallo',
    price: 14900,
    description: 'Es digestiva y antiinflamatoria.',
    image: 'https://qlgjqvgjuscquhspjqdp.supabase.co/storage/v1/object/public/AETHERA-DOCS/pico%20de%20gallo.jpeg',
    category: 'ensaladas-tradicionales',
    benefits: ['Digestiva', 'Antiinflamatoria'],
    healthBenefit: 'Es digestiva y antiinflamatoria.',
    observation: 'No tiene toppings ni contiene alérgenos.',
    portions: 4,
    variants: [
      { label: '500 gr', price: 14900 },
      { label: '250 gr', price: 9900 },
    ],
    ingredients: ['tomate de aliño', 'cebolla blanca', 'cilantro']
  },
  {
    id: 'ceviche-mango',
    name: 'Ceviche de Mango',
    price: 14900,
    description: 'Es una ensalada que por su alto contenido de vitamina C es detox y beneficiosa para el sistema inmune.',
    image: 'https://tjjrnpwwfvmsukfrfchr.supabase.co/storage/v1/object/public/productos/ceviche_de_mango_producto.jpeg',
    category: 'ensaladas-tradicionales',
    benefits: ['Vitamina C', 'Sistema inmune'],
    healthBenefit: 'Es una ensalada que por su alto contenido de vitamina C es detox y beneficiosa para el sistema inmune.',
    observation: 'Su topping es limón entero y salpimienta.',
    portions: 4,
    variants: [
      { label: '500 gr', price: 14900 },
      { label: '250 gr', price: 9900 },
    ],
    ingredients: ['mango tommy', 'cebolla morada', 'ají dulce', 'pimentón', 'cilantro', 'ajo', 'limón tahiti', 'pimienta', 'sal']
  },

  // Salsas y Vinagretas
  {
    id: 'salsa-cesar',
    name: 'Salsa César (200ml)',
    price: 26900,
    description: 'Excelente fuente de grasas buenas y proteína, útil para saciar y complementar tus comidas.',
    image: 'https://picsum.photos/seed/salsa-cesar/400/300',
    category: 'salsas',
    benefits: ['Grasas buenas', 'Proteína'],
    healthBenefit: 'Excelente fuente de grasas buenas y proteína, útil para saciar y complementar tus comidas.',
    observation: 'Contiene trazos de huevo, posible alérgeno. Es una salsa balanceada y especiada ideal para ensaladas frescas.',
    portions: 10,
  },
  {
    id: 'vinagreta-mostaza-miel',
    name: 'Vinagreta Mostaza y Miel (200ml)',
    price: 26900,
    description: 'Perfecta combinación para tu activación metabólica y energía rápida. Un preentreno ligero.',
    image: 'https://picsum.photos/seed/vinagreta-mostaza-miel/400/300',
    category: 'salsas',
    benefits: ['Energía rápida', 'Metabolismo'],
    healthBenefit: 'Perfecta combinación para tu activación metabólica y energía rápida. Un preentreno ligero.',
    observation: 'Contiene semillas de chía.',
    portions: 10,
  },
  {
    id: 'pesto',
    name: 'Pesto (200ml)',
    price: 33900,
    description: 'Una de las salsas más completas nutricionalmente, aporta grasas saludables, proteína y calcio.',
    image: 'https://picsum.photos/seed/pesto/400/300',
    category: 'salsas',
    benefits: ['Grasas saludables', 'Calcio'],
    healthBenefit: 'Una de las salsas más completas nutricionalmente, aporta grasas saludables, proteína y calcio.',
    observation: 'Contiene trazos de nueces, posible alérgeno.',
    portions: 10,
  },
  {
    id: 'mayonesa-griega',
    name: 'Mayonesa Griega de Ajo (200ml)',
    price: 27900,
    description: 'La salsa más proteica de la lista, con proteínas, probióticos y cualidad digestiva.',
    image: 'https://picsum.photos/seed/mayonesa-griega/400/300',
    category: 'salsas',
    benefits: ['Proteica', 'Probióticos'],
    healthBenefit: 'La salsa más proteica de la lista, con proteínas, probióticos y cualidad digestiva.',
    observation: 'Contiene lácteos, posible alérgeno.',
    portions: 10,
  },
  {
    id: 'vinagreta-fresa-menta',
    name: 'Vinagreta Fresa y Menta (200ml)',
    price: 22900,
    description: 'Una salsa con alta carga antioxidante y muy fresca.',
    image: 'https://picsum.photos/seed/vinagreta-fresa-menta/400/300',
    category: 'salsas',
    benefits: ['Antioxidante', 'Fresca'],
    healthBenefit: 'Una salsa con alta carga antioxidante y muy fresca.',
    observation: 'Es una vinagreta balanceada y dulce, contiene azúcar.',
    portions: 10,
  },
  {
    id: 'vinagreta-miel-balsamico',
    name: 'Vinagreta Miel y Balsámico (200ml)',
    price: 29900,
    description: 'Te brinda protección cardiovascular y regula tu glucosa con energía natural.',
    image: 'https://picsum.photos/seed/vinagreta-miel-balsamico/400/300',
    category: 'salsas',
    benefits: ['Cardiovascular', 'Energía natural'],
    healthBenefit: 'Te brinda protección cardiovascular y regula tu glucosa con energía natural.',
    observation: 'Es una vinagreta balanceada, entre dulce y ácida.',
    portions: 10,
  },
  {
    id: 'vinagreta-naranja-cilantro',
    name: 'Vinagreta Naranja y Cilantro (200ml)',
    price: 21900,
    description: 'Una vinagreta altísima en vitamina C, tiene efecto detox natural y refuerza tu sistema inmune.',
    image: 'https://picsum.photos/seed/vinagreta-naranja-cilantro/400/300',
    category: 'salsas',
    benefits: ['Vitamina C', 'Detox'],
    healthBenefit: 'Una vinagreta altísima en vitamina C, tiene efecto detox natural y refuerza tu sistema inmune.',
    observation: 'Es una vinagreta fresca y frutal.',
    portions: 10,
  },
  {
    id: 'hummus',
    name: 'Hummus (200ml)',
    price: 21900,
    description: 'Una salsa con proteína vegetal de alta calidad, aporta fibra y regula el azúcar en sangre.',
    image: 'https://picsum.photos/seed/hummus/400/300',
    category: 'salsas',
    benefits: ['Proteína vegetal', 'Fibra'],
    healthBenefit: 'Una salsa con proteína vegetal de alta calidad, aporta fibra y regula el azúcar en sangre.',
    observation: 'Es una salsa clásica cremosa, ideal para acompañar carbohidratos como pan o pasta.',
    portions: 10,
  },
  {
    id: 'chimichurri',
    name: 'Chimichurri (200ml)',
    price: 26900,
    description: 'Tiene poder antiinflamatorio y mejora la digestión de proteínas, ideal para acompañar carnes.',
    image: 'https://picsum.photos/seed/chimichurri/400/300',
    category: 'salsas',
    benefits: ['Antiinflamatorio', 'Digestivo'],
    healthBenefit: 'Tiene poder antiinflamatorio y mejora la digestión de proteínas, ideal para acompañar carnes.',
    observation: 'Contiene pimienta, posible alérgeno.',
    portions: 10,
  },

  // Sopas prelistas
  {
    id: 'crema-tomate',
    name: 'Crema de Tomate (Libra)',
    price: 18900,
    description: 'Poderoso antioxidante, protege el corazón y la piel. Baja en calorías y rica en nutrientes.',
    image: 'https://picsum.photos/seed/crema-tomate/400/300',
    category: 'sopas',
    benefits: ['Antioxidante', 'Baja en calorías'],
    healthBenefit: 'Poderoso antioxidante, protege el corazón y la piel. Baja en calorías y rica en nutrientes.',
    portions: 4,
    ingredients: ['tomate san marzano', 'cebolla blanca', 'albahaca', 'ajo', 'pimienta negra en grano']
  },
  {
    id: 'crema-auyama',
    name: 'Crema de Auyama (Libra)',
    price: 12900,
    description: 'Fortalece la visión y el sistema inmune, tiene efecto antiinflamatorio y recupera energía.',
    image: 'https://picsum.photos/seed/crema-auyama/400/300',
    category: 'sopas',
    benefits: ['Sistema inmune', 'Antiinflamatoria'],
    healthBenefit: 'Fortalece la visión y el sistema inmune, tiene efecto antiinflamatorio y recupera energía.',
    portions: 4,
    ingredients: ['ahuyama', 'zanahoria', 'apio', 'cebolla blanca', 'pimentón', 'pimienta blanca entera', 'ajo']
  },
  {
    id: 'crema-hongos',
    name: 'Crema de Hongos (Libra)',
    price: 26900,
    description: 'Rica en nutrientes que ayudan al sistema nervioso y al fortalecimiento cerebral. Aporta enfoque mental.',
    image: 'https://picsum.photos/seed/crema-hongos/400/300',
    category: 'sopas',
    benefits: ['Enfoque mental', 'Sistema nervioso'],
    healthBenefit: 'Rica en nutrientes que ayudan al sistema nervioso y al fortalecimiento cerebral. Aporta enfoque mental.',
    portions: 4,
    ingredients: ['champiñón', 'crimini', 'cebolla larga', 'cebolla blanca', 'cebolla puerro', 'papa criolla', 'ajo', 'pimienta negra', 'pimienta verde']
  },
  {
    id: 'crema-verduras',
    name: 'Crema de Verduras (Libra)',
    price: 13900,
    description: 'Es alta en fibra y ayuda a la limpieza intestinal. Aporta nutrientes completos para la salud en general.',
    image: 'https://picsum.photos/seed/crema-verduras/400/300',
    category: 'sopas',
    benefits: ['Fibra', 'Limpieza intestinal'],
    healthBenefit: 'Es alta en fibra y ayuda a la limpieza intestinal. Aporta nutrientes completos para la salud en general.',
    portions: 4,
    ingredients: ['ahuyama', 'zanahoria', 'apio', 'cebolla morada', 'cebolla puerro', 'espinaca', 'ajo', 'pimienta blanca', 'pimienta verde']
  },
  {
    id: 'sancocho',
    name: 'Sancocho (Libra)',
    price: 13900,
    description: 'Sopa tradicional colombiana de tubérculos sancochados.',
    image: 'https://picsum.photos/seed/sancocho/400/300',
    category: 'sopas',
    benefits: ['Tradicional', 'Completo'],
    healthBenefit: 'Aporta alta densidad energética, alto en carbohidratos complejos y minerales esenciales, ayuda a la recuperación muscular y es hidratante.',
    portions: 4,
    ingredients: [
      'papa capira',
      'papa criolla',
      'yuca',
      'arracacha',
      'plátano verde',
      'mazorca',
      'cilantro',
      'ajo',
      'zanahoria',
      'cebolla blanca',
      'cebolla larga'
    ]
  },
  {
    id: 'frijoles',
    name: 'Frijoles (Libra)',
    price: 18900,
    description: 'Sopa tradicional colombiana, especial para tu día a día.',
    image: 'https://picsum.photos/seed/frijoles/400/300',
    category: 'sopas',
    benefits: ['Proteína', 'Caseros'],
    healthBenefit: 'Es una sopa con proteína vegetal de calidad, con altos niveles de fibra y te aporta energía sostenida.',
    portions: 4,
    ingredients: [
      'frijol verde',
      'ahuyama',
      'cebolla blanca',
      'plátano verde',
      'ajo',
      'zanahoria',
      'cebolla larga',
      'pico de gallo'
    ]
  },

  // Bebidas (Jugos y Shots)
  {
    id: 'jugo-verde',
    name: 'Jugo Verde (x5)',
    price: 18900,
    description: 'Contiene pepino, piña, apio, menta y espinaca: especial para tu sistema digestivo y la desinflamación abdominal.',
    image: 'https://picsum.photos/seed/jugo-verde/400/300',
    category: 'bebidas',
    benefits: ['Detox', 'Energizante'],
    healthBenefit: 'Es un batido detox natural, y alcalinizante (reduce inflamación), contiene fibra y clorofila, ideal para hacer ayunos y bajar de peso.',
    portions: 5,
    ingredients: [
      'pepino',
      'apio',
      'piña',
      'menta',
      'espinaca'
    ]
  },
  {
    id: 'batido-circulacion',
    name: 'Batido Circulación (x5)',
    price: 18900,
    description: 'Contiene remolacha, cúrcuma, zanahoria y mora: para tus músculos y la circulación efectiva de la sangre.',
    image: 'https://picsum.photos/seed/batido-circulacion/400/300',
    category: 'bebidas',
    benefits: ['Saludable', 'Natural'],
    healthBenefit: 'Mejora la circulación sanguínea, es un pre-entreno natural y ayuda a mejorar la resistencia física.',
    portions: 5,
    ingredients: ['remolacha', 'zanahoria', 'cúrcuma raíz', 'mora']
  },
  {
    id: 'batido-detox',
    name: 'Batido Detox Antiestrés (x5)',
    price: 18900,
    description: 'Contiene papaya, piña, pepino y jengibre: calma el estrés y te activa la microbiota.',
    image: 'https://picsum.photos/seed/batido-detox/400/300',
    category: 'bebidas',
    benefits: ['Relajante', 'Depurativo'],
    healthBenefit: 'Tiene un efecto calmante, disminuye la sensación de pesadez y es perfecto para el estrés, ansiedad y mala digestión.',
    portions: 5,
    ingredients: ['papaya', 'piña', 'pepino', 'jengibre']
  },
  {
    id: 'jugo-naranja',
    name: 'Jugo de Naranja (x6)',
    price: 39900,
    description: 'Jugos siempre frescos, dulcecitos y con naranjas seleccionadas.',
    image: 'https://picsum.photos/seed/jugo-naranja/400/300',
    category: 'bebidas',
    benefits: ['Vitamina C', 'Refrescante'],
    healthBenefit: 'Contiene vitamina C y es refrescante.',
    portions: 6,
    observation: 'Dulce y recién exprimido, sin conservantes.',
    ingredients: ['naranja valencia']
  },
  {
    id: 'shot-metabolico',
    name: 'Shot Metabólico (x6)',
    price: 48900,
    description: 'Una combinación de ingredientes que te activan el metabolismo y te ayudan a bajar de peso.',
    image: 'https://picsum.photos/seed/shot-metabolico/400/300',
    category: 'bebidas',
    benefits: ['Metabolismo', 'Energía'],
    healthBenefit: 'Acelera el metabolismo como activador total, activa tu sistema digestivo en ayunas. Es perfecto para perder grasa.',
    portions: 6,
    ingredients: [
      'manzana verde',
      'limón tahiti',
      'jengibre',
      'vinagre de manzana',
      'miel',
      'canela en polvo',
      'agua'
    ]
  },
  {
    id: 'shot-serenidad',
    name: 'Shot Serenidad (x6)',
    price: 49500,
    description: 'Un shot que te calma el estrés y te calma el sistema nervioso central.',
    image: 'https://picsum.photos/seed/shot-serenidad/400/300',
    category: 'bebidas',
    benefits: ['Calma', 'Bienestar'],
    healthBenefit: 'Es un shot antiestrés, regula el sistema nervioso y mejora el estado de ánimo, funciona como "pausa emocional".',
    portions: 6,
    ingredients: [
      'maracuyá',
      'mango tommy maduro',
      'menta',
      'limón tahiti',
      'miel',
      'cúrcuma',
      'agua',
      'pimienta'
    ]
  },
  {
    id: 'shot-concentracion',
    name: 'Shot Concentración (x6)',
    price: 59500,
    description: 'Un shot cargado de antioxidantes que tiene repercusión directa y positiva en tu cerebro.',
    image: 'https://picsum.photos/seed/shot-concentracion/400/300',
    category: 'bebidas',
    benefits: ['Enfoque', 'Mental'],
    healthBenefit: 'Mejora el enfoque mental, aumenta la claridad cognitiva, contiene energía limpia a través del matcha.',
    portions: 6,
    ingredients: [
      'arándanos',
      'uva isabella',
      'espinaca criolla',
      'limón tahiti',
      'té matcha',
      'agua'
    ]
  },
  {
    id: 'shot-antiinflamatorio',
    name: 'Shot Antiinflamatorio (x6)',
    price: 49500,
    description: 'Este shot con ingredientes que te desinflaman y te hace sentir más ligero.',
    image: 'https://picsum.photos/seed/shot-antiinflamatorio/400/300',
    category: 'bebidas',
    benefits: ['Salud', 'Recuperación'],
    healthBenefit: 'Es una defensa total para tu cuerpo, potente antiinflamatorio, refuerza tu sistema inmune y reduce el dolor y la fatiga.',
    portions: 6,
    ingredients: [
      'jengibre',
      'cúrcuma',
      'naranja',
      'limón tahiti',
      'miel pura',
      'pimienta negra',
      'vinagre de manzana',
      'agua'
    ]
  },
  {
    id: 'shot-muscular',
    name: 'Shot Muscular (x6)',
    price: 44500,
    description: 'El shot perfecto para activar tu cuerpo, para deportistas o incluso para un mejor rendimiento sexual.',
    image: 'https://picsum.photos/seed/shot-muscular/400/300',
    category: 'bebidas',
    benefits: ['Recuperación', 'Fuerza'],
    healthBenefit: 'Mejora el flujo sanguíneo, es un energizante natural además de que es un poderoso antiinflamatorio.',
    portions: 6,
    ingredients: [
      'naranja',
      'limón tahiti',
      'jengibre',
      'miel',
      'remolacha',
      'cúrcuma',
      'pimienta negra',
      'canela en polvo',
      'agua'
    ]
  },
  {
    id: 'shot-piel',
    name: 'Shot Piel Perfecta (x6)',
    price: 35900,
    description: 'El shot que tiene todos los ingredientes que tienen beneficios directos a la salud cutánea.',
    image: 'https://picsum.photos/seed/shot-piel/400/300',
    category: 'bebidas',
    benefits: ['Belleza', 'Nutrición'],
    healthBenefit: 'Es un antioxidante para la piel y reduce el envejecimiento prematuro. Hidratación celular profunda.',
    portions: 6,
    ingredients: [
      'zanahoria',
      'papaya',
      'naranja',
      'limón',
      'agua',
      'vinagre de manzana'
    ]
  },

  // Frutas picadas
  {
    id: 'mango-picado',
    name: 'Mango Picado (Libra)',
    price: 13900,
    description: 'Delicioso mango tommy picadito: pídelo maduro, pintón o verde.',
    image: 'https://picsum.photos/seed/mango-picado/400/300',
    category: 'frutas-picadas',
    benefits: ['Listo para comer', 'Dulce'],
    healthBenefit: 'Ayuda al sistema inmune por su alto contenido de vitamina C y apoya la salud digestiva.',
    portions: 4,
    observation: 'Maduración a elección: verde, pintón o maduro. Corte a elección: cubos o bastones.',
    ingredients: ['mango']
  },
  {
    id: 'pina-picada',
    name: 'Piña Picada (Libra)',
    price: 15900,
    description: 'Piña en cubitos sin corazón, cuidadosamente seleccionada.',
    image: 'https://picsum.photos/seed/pina-picada/400/300',
    category: 'frutas-picadas',
    benefits: ['Diurética', 'Dulce'],
    healthBenefit: 'Es diurética, digestiva y tiene poderes antiinflamatorios, es ideal para después de comidas.',
    portions: 4,
    observation: 'Viene en cubos.',
    ingredients: ['piña']
  },
  {
    id: 'fresa-picada',
    name: 'Fresa Picada (Libra)',
    price: 16900,
    description: 'Fresas grandes siempre rojas y de la mejor calidad.',
    image: 'https://picsum.photos/seed/fresa-picada/400/300',
    category: 'frutas-picadas',
    benefits: ['Antioxidantes', 'Fresca'],
    healthBenefit: 'Contiene vitamina C (colágeno) además de ser una fruta con alto contenido de agua y es un antioxidante natural.',
    portions: 4,
    observation: 'Corte a elección: cuartos, tajadas, mitades o enteras.',
    ingredients: ['fresa']
  },
  {
    id: 'sandia-baby-picada',
    name: 'Sandía Baby Picada (Libra)',
    price: 15500,
    description: 'Las sandías más rojitas y maduras.',
    image: 'https://picsum.photos/seed/sandia-baby-picada/400/300',
    category: 'frutas-picadas',
    benefits: ['Hidratante', 'Baja en calorías'],
    healthBenefit: 'Alta hidratación, contiene electrolitos naturales y recupera tus músculos, ideal para el post ejercicio.',
    portions: 4,
    observation: 'Viene en cubos.',
    ingredients: ['sandía baby']
  },
  {
    id: 'coco-picado',
    name: 'Coco Picado (Libra)',
    price: 26000,
    description: 'Sin cáscara, sin dificultades, sólo la carne del coco como te gusta.',
    image: 'https://picsum.photos/seed/coco-picado/400/300',
    category: 'frutas-picadas',
    benefits: ['Energía', 'Grasas saludables'],
    healthBenefit: 'Es una grasa saludable, energía rápida sin picos fuertes y ayuda a la protección cerebral.',
    portions: 4,
    observation: 'Viene en cubos.',
    ingredients: ['coco']
  },
  {
    id: 'melon-picado',
    name: 'Melón Picado (Libra)',
    price: 17900,
    description: 'Melón siempre maduro, rosado y dulcecito.',
    image: 'https://picsum.photos/seed/melon-picado/400/300',
    category: 'frutas-picadas',
    benefits: ['Refrescante', 'Vitaminas'],
    healthBenefit: 'Es hidratante, bajo en calorías y contiene vitaminas A y C, es ideal para seguir dietas bajas en calorías.',
    portions: 4,
    observation: 'Viene en cubos.',
    ingredients: ['melón']
  },
  {
    id: 'guayaba-manzana-picada',
    name: 'Guayaba Manzana Picada (Libra)',
    price: 16900,
    description: 'Seleccionamos siempre cuidadosamente para que su textura sea impecable.',
    image: 'https://picsum.photos/seed/guayaba-manzana-picada/400/300',
    category: 'frutas-picadas',
    benefits: ['Vitamina C', 'Fibra'],
    healthBenefit: 'Muy alta en vitamina C, contiene fibra que protege tu microbiota y regula tu sistema digestivo.',
    portions: 4,
    observation: 'Viene en rodajas.',
    ingredients: ['guayaba manzana']
  },
  {
    id: 'uchuva',
    name: 'Uchuva (Libra)',
    price: 17900,
    description: 'Sin capacho, lavada y desinfectada.',
    image: 'https://picsum.photos/seed/uchuva/400/300',
    category: 'frutas-picadas',
    benefits: ['Exótica', 'Antioxidante'],
    healthBenefit: 'Contiene altos niveles de antioxidantes, protege tus células y aporta a tu sistema inmune.',
    portions: 4,
    observation: 'Viene entera y descapachada.',
    ingredients: ['uchuva']
  },
  {
    id: 'papaya-picada',
    name: 'Papaya Picada (Libra)',
    price: 13500,
    description: 'Seleccionamos las papayas más dulces y deliciosas.',
    image: 'https://picsum.photos/seed/papaya-picada/400/300',
    category: 'frutas-picadas',
    benefits: ['Digestiva', 'Suave'],
    healthBenefit: 'Es digestiva y antiinflamatoria, gracias a la papaína. Mejora el tránsito digestivo y reduce inflamación.',
    portions: 4,
    observation: 'Viene en cubos.',
    ingredients: ['papaya']
  },
  {
    id: 'baby-bowl-berry',
    name: 'Baby Bowl Berry Mix (250g)',
    price: 21000,
    description: 'Una combinación de frutos del bosque: frambuesa, fresa y arándanos, simplemente exquisito.',
    image: 'https://picsum.photos/seed/baby-bowl-berry/400/300',
    category: 'frutas-picadas',
    benefits: ['Antioxidantes', 'Snack perfecto'],
    healthBenefit: 'Alta carga antioxidante, apoyo antienvejecimiento, y bajo índice glucémico.',
    portions: 2,
    observation: 'Las frutas vienen enteras y muy frescas.',
    ingredients: ['frambuesa', 'fresa', 'arándanos']
  },
  {
    id: 'baby-bowl-amarillos',
    name: 'Baby Bowl Frutos Amarillos (250g)',
    price: 9000,
    description: 'Una combinación de mango con piña deliciosa.',
    image: 'https://picsum.photos/seed/baby-bowl-amarillos/400/300',
    category: 'frutas-picadas',
    benefits: ['Vitamina C', 'Tropical'],
    healthBenefit: 'Es alta en vitamina C y apoya el sistema inmune. Es un desayuno perfecto o snack energético.',
    portions: 2,
    observation: 'Viene en cubos.',
    ingredients: ['mango', 'piña']
  },
  // Verduras picadas y mercado fresco
  {
    id: 'zucchini-picado',
    name: 'Zucchini Verde/Amarillo Picado (Libra)',
    price: 12000,
    description: 'Un vegetal infaltable en tus preparaciones.',
    image: 'https://picsum.photos/seed/zucchini-picado/400/300',
    category: 'verduras-picadas',
    benefits: ['Bajo en calorías', 'Versátil'],
    healthBenefit: 'Aporta hidratación celular, bajo en calorías así que es ideal para etapa de definición o bajar de peso.',
    portions: 4,
    observation: 'Corte a elección: julianas, rodajas, cubos o bastones.',
    ingredients: ['zucchini verde o amarillo']
  },
  {
    id: 'pimenton-picado',
    name: 'Pimentón Rojo Picado (Libra)',
    price: 16500,
    description: 'Un ingrediente que le da sabor a tus comidas.',
    image: 'https://picsum.photos/seed/pimenton-picado/400/300',
    category: 'verduras-picadas',
    benefits: ['Vitamina C', 'Sabor'],
    healthBenefit: 'Es el alimento con mayor contenido de vitamina C, poderoso para el sistema inmune y la piel.',
    portions: 4,
    observation: 'Corte a elección: julianas, rodajas, cubos o bastones.',
    ingredients: ['pimentón rojo']
  },
  {
    id: 'cebolla-blanca-picada',
    name: 'Cebolla Blanca Picada (Libra)',
    price: 12900,
    description: 'Qué es de una comida sin la sazón de las cebollas.',
    image: 'https://picsum.photos/seed/cebolla-blanca-picada/400/300',
    category: 'verduras-picadas',
    benefits: ['Básica', 'Sabor'],
    healthBenefit: 'Antibacteriana natural, mejora la salud intestinal y protege el sistema inmune.',
    portions: 4,
    observation: 'Corte a elección: julianas, rodajas o cubos.',
    ingredients: ['cebolla blanca']
  },
  {
    id: 'tomate-cherry',
    name: 'Tomate Cherry (Libra)',
    price: 20500,
    description: 'Un tomate redondo y acidito, delicioso para ensaladas.',
    image: 'https://picsum.photos/seed/tomate-cherry/400/300',
    category: 'mercado-fresco',
    benefits: ['Snack', 'Ensaladas'],
    healthBenefit: 'Contiene mayor concentración de antioxidantes que el tomate de aliño, protege la piel y las células.',
    portions: 4,
    observation: 'Viene entero.',
    ingredients: ['tomate cherry']
  },
  {
    id: 'lechuga-hidroponica',
    name: 'Lechuga Hidropónica (250g)',
    price: 8900,
    description: 'Una lechuga crespa de consistencia firme, lavada y desinfectada.',
    image: 'https://picsum.photos/seed/lechuga-hidroponica/400/300',
    category: 'mercado-fresco',
    benefits: ['Fresca', 'Crujiente'],
    healthBenefit: 'Es rica en agua y fibra además de ser un relajante natural.',
    portions: 2,
    observation: 'Lavada, desinfectada y deshojada.',
    ingredients: ['lechuga hidropónica']
  },
  {
    id: 'mezclum',
    name: 'Mezclum Orgánico Lavado (250g)',
    price: 24500,
    description: 'Una variedad de 11 hojas orgánicas e hidropónicas, lavado y desinfectado.',
    image: 'https://picsum.photos/seed/mezclum/400/300',
    category: 'mercado-fresco',
    benefits: ['Orgánico', 'Premium'],
    healthBenefit: 'Contiene antioxidantes variados, fuente de hierro y clorofila que mejora la salud digestiva.',
    portions: 8,
    observation: 'Lavado, desinfectado y centrifugado.',
    ingredients: ['mezclum orgánico']
  },
  {
    id: 'cebolla-roja',
    name: 'Cebolla Roja Picada (Libra)',
    price: 12900,
    description: 'De sabor más fuerte que la blanca pero te realza las comidas de la mejor manera.',
    image: 'https://picsum.photos/seed/cebolla-roja/400/300',
    category: 'verduras-picadas',
    benefits: ['Sabor intenso', 'Versátil'],
    healthBenefit: 'Contiene más antioxidantes que la cebolla blanca, mejora la salud cardiovascular y es antiinflamatoria.',
    portions: 4,
    observation: 'Corte a elección: julianas, rodajas o cubos.',
    ingredients: ['cebolla roja']
  },
  {
    id: 'cebolla-puerro',
    name: 'Cebolla Puerro (Libra)',
    price: 5900,
    description: 'Para cremas, salteados y sopas.',
    image: 'https://picsum.photos/seed/cebolla-puerro/400/300',
    category: 'mercado-fresco',
    benefits: ['Aromática', 'Versátil'],
    healthBenefit: 'Contiene fibra prebiótica, mejora la microbiota y apoya la digestión.',
    portions: 4,
    ingredients: ['cebolla puerro']
  },
  {
    id: 'cebolla-larga',
    name: 'Cebolla Larga (Atado)',
    price: 4900,
    description: 'Para guisos y sopas.',
    image: 'https://picsum.photos/seed/cebolla-larga/400/300',
    category: 'mercado-fresco',
    benefits: ['Tradicional', 'Sabor'],
    healthBenefit: 'Mejora la digestión, refuerza el sistema inmune y es rica en vitamina K.',
    portions: 4,
    ingredients: ['cebolla larga']
  },
  {
    id: 'habichuela',
    name: 'Habichuela (Libra)',
    price: 8900,
    description: 'Contiene fibra y le hace bien a tu salud digestiva.',
    image: 'https://picsum.photos/seed/habichuela/400/300',
    category: 'mercado-fresco',
    benefits: ['Fibra', 'Digestiva'],
    healthBenefit: 'Contiene fibra, regula el azúcar en sangre y mejora la digestión.',
    portions: 5,
    ingredients: ['habichuela']
  },
  {
    id: 'rabano',
    name: 'Rábano (Libra)',
    price: 7900,
    description: 'Un alimento que favorece la salud cardiovascular y digestiva.',
    image: 'https://picsum.photos/seed/rabano/400/300',
    category: 'mercado-fresco',
    benefits: ['Cardiovascular', 'Digestivo'],
    healthBenefit: 'Es un desintoxicante hepático, mejora la digestión y estimula la bilis.',
    portions: 4,
    ingredients: ['rábano']
  },
  {
    id: 'auyama',
    name: 'Auyama (Libra)',
    price: 6900,
    description: 'Para hacer sopas, puré o hacer láminas en el airfryer.',
    image: 'https://picsum.photos/seed/auyama/400/300',
    category: 'mercado-fresco',
    benefits: ['Versátil', 'Nutritiva'],
    healthBenefit: 'Es energía limpia, antioxidante y mejora la digestión.',
    portions: 1,
    ingredients: ['auyama']
  },
  {
    id: 'remolacha',
    name: 'Remolacha (Libra)',
    price: 7900,
    description: 'El vegetal que mejora tu salud cardiovascular.',
    image: 'https://picsum.photos/seed/remolacha/400/300',
    category: 'mercado-fresco',
    benefits: ['Cardiovascular', 'Antioxidante'],
    healthBenefit: 'Mejora la circulación, aumenta el rendimiento físico y es un detox hepático.',
    portions: 2,
    ingredients: ['remolacha']
  },
  {
    id: 'tomate-aliño',
    name: 'Tomate de Aliño (Libra)',
    price: 6900,
    description: 'No es un vegetal, es una fruta, pero especial para hacer ensaladas y guisos.',
    image: 'https://picsum.photos/seed/tomate-aliño/400/300',
    category: 'mercado-fresco',
    benefits: ['Esencial', 'Versátil'],
    healthBenefit: 'Es antioxidante, antiinflamatorio y protege el corazón.',
    portions: 3,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['tomate de aliño']
  },
  {
    id: 'tomate-uvalina',
    name: 'Tomate Uvalina (Libra)',
    price: 12900,
    description: 'Parecido al cherry pero más dulce y ovalado.',
    image: 'https://picsum.photos/seed/tomate-uvalina/400/300',
    category: 'mercado-fresco',
    benefits: ['Dulce', 'Ensaladas'],
    healthBenefit: 'Es más alto en vitamina C que los dos anteriores, mejora el sistema inmune además es ligero y digestivo.',
    portions: 4,
    observation: 'Viene entero.',
    ingredients: ['tomate uvalina']
  },
  {
    id: 'repollo',
    name: 'Repollo Blanco/Morado (Libra)',
    price: 5900,
    description: 'Un alimento completo que te mejora la digestión.',
    image: 'https://picsum.photos/seed/repollo/400/300',
    category: 'mercado-fresco',
    benefits: ['Digestión', 'Fibra'],
    healthBenefit: 'Es un desintoxicante hepático, contiene fibra así que mejora el intestino y el morado contiene más antioxidantes.',
    portions: 1,
    ingredients: ['repollo blanco o morado']
  },
  {
    id: 'apio',
    name: 'Apio (Atado)',
    price: 5900,
    description: 'Un vegetal potente para tu salud digestiva y metabólica.',
    image: 'https://picsum.photos/seed/apio/400/300',
    category: 'mercado-fresco',
    benefits: ['Digestivo', 'Metabólico'],
    healthBenefit: 'Es un diurético natural, desinflama y regula la presión.',
    portions: 1,
    ingredients: ['apio']
  },
  {
    id: 'brocoli',
    name: 'Brócoli (Libra)',
    price: 8900,
    description: 'Proteína vegetal, un superalimento.',
    image: 'https://picsum.photos/seed/brocoli/400/300',
    category: 'mercado-fresco',
    benefits: ['Superalimento', 'Proteína'],
    healthBenefit: 'Es anticancerígeno, contiene gran cantidad de fibra y refuerza el sistema inmune, es considerado superalimento.',
    portions: 1,
    ingredients: ['brócoli']
  },
  {
    id: 'pepino',
    name: 'Pepino (Libra)',
    price: 5900,
    description: 'Altamente hidratante y bajo en calorías.',
    image: 'https://picsum.photos/seed/pepino/400/300',
    category: 'mercado-fresco',
    benefits: ['Hidratante', 'Ligero'],
    healthBenefit: 'Es altamente hidratante, desinflama y mejora la piel.',
    portions: 2,
    ingredients: ['pepino']
  },
  {
    id: 'penca-sabila',
    name: 'Penca Sábila (Libra)',
    price: 7900,
    description: 'Sirve como tópico (quemaduras, hidratar la piel y cicatrizar heridas) o para hacer licuados y mejorar tu digestión.',
    image: 'https://picsum.photos/seed/penca-sabila/400/300',
    category: 'mercado-fresco',
    benefits: ['Medicinal', 'Digestiva'],
    healthBenefit: 'Regenera el intestino, es antiinflamatorio y mejora la digestión.',
    portions: 1,
    ingredients: ['penca sábila']
  },
  {
    id: 'yuca-pelada',
    name: 'Yuca Pelada Desvenada (Libra)',
    price: 6900,
    description: 'Perfectamente seleccionada, bien lavada y sin vena.',
    image: 'https://picsum.photos/seed/yuca-pelada/400/300',
    category: 'mercado-fresco',
    benefits: ['Lista', 'Tradicional'],
    healthBenefit: 'Es fuente de energía limpia, es libre de gluten y mejora la digestión.',
    portions: 4,
    observation: 'Viene en trozos, en mitades y sin vena.',
    ingredients: ['yuca pelada desvenada']
  },
  {
    id: 'zanahoria',
    name: 'Zanahoria (Libra)',
    price: 4900,
    description: 'Dulce y fresca, especial para tu salud ocular.',
    image: 'https://picsum.photos/seed/zanahoria/400/300',
    category: 'mercado-fresco',
    benefits: ['Vitamina A', 'Salud ocular'],
    healthBenefit: 'Contiene betacarotenas especial para la piel y la visión. Además es antioxidante.',
    portions: 2,
    ingredients: ['zanahoria']
  },
  {
    id: 'lechuga-batavia',
    name: 'Lechuga Batavia (Libra)',
    price: 5900,
    description: 'La inconfundible lechuga batavia para ensaladas, ya lista para consumir.',
    image: 'https://picsum.photos/seed/lechuga-batavia/400/300',
    category: 'mercado-fresco',
    benefits: ['Fresca', 'Lista'],
    healthBenefit: 'Es hidratante, mejora la digestión y es fibra ligera.',
    portions: 1,
    ingredients: ['lechuga batavia']
  },
  {
    id: 'perejil',
    name: 'Perejil (150g)',
    price: 3900,
    description: 'Lavado y desinfectado, pídelo crespo o liso.',
    image: 'https://picsum.photos/seed/perejil/400/300',
    category: 'mercado-fresco',
    benefits: ['Aromático', 'Fresco'],
    healthBenefit: 'Es un desintoxicante natural para los riñones. Es rico en vitamina C y hierro además de ser un antiinflamatorio natural.',
    portions: 10,
    observation: 'Lavado, desinfectado y centrifugado.',
    ingredients: ['perejil']
  },
  {
    id: 'coliflor',
    name: 'Coliflor (Libra)',
    price: 8900,
    description: 'Un vegetal que te ayuda a perder peso, bajo en calorías y cargado de proteína.',
    image: 'https://picsum.photos/seed/coliflor/400/300',
    category: 'mercado-fresco',
    benefits: ['Bajo en calorías', 'Proteína'],
    healthBenefit: 'Es un desintoxicante hepático, contiene fibra y regula las hormonas.',
    portions: 1,
    ingredients: ['coliflor']
  },
  {
    id: 'cilantro',
    name: 'Cilantro Lavado (150g)',
    price: 3900,
    description: 'Cilantro fresco, desinfectado y lavado.',
    image: 'https://picsum.photos/seed/cilantro/400/300',
    category: 'mercado-fresco',
    benefits: ['Aromático', 'Fresco'],
    healthBenefit: 'Elimina metales pesados, es antibacteriano y mejora la digestión. Ideal para un detox profundo.',
    portions: 10,
    observation: 'Lavado, desinfectado y centrifugado.',
    ingredients: ['cilantro']
  },

    {
    id: 'papa-capira', name: 'Papa Capira (Libra)', price: 4900,
    description: 'Lavadas y desinfectadas.', image: 'https://picsum.photos/seed/papa-capira/400/300',
    category: 'mercado-fresco', benefits: ['Tradicional', 'Lista'],
    healthBenefit: 'Contiene carbohidratos complejos y es fuente de energía, aporta potasio y genera saciedad.',
    portions: 3,
    ingredients: ['papa capira']
  },
  {
    id: 'papa-criolla', name: 'Papa Criolla (Libra)', price: 6900,
    description: 'Lavadas y desinfectadas.', image: 'https://picsum.photos/seed/papa-criolla/400/300',
    category: 'mercado-fresco', benefits: ['Colombiana', 'Lista'],
    healthBenefit: 'Es rica en antioxidantes, contiene energía aún más limpia y es más ligera, recomendada para dietas.',
    portions: 6,
    ingredients: ['papa criolla']
  },
  {
    id: 'papa-nevada', name: 'Papa Nevada (Libra)', price: 5900,
    description: 'Lavadas y desinfectadas.', image: 'https://picsum.photos/seed/papa-nevada/400/300',
    category: 'mercado-fresco', benefits: ['Versátil', 'Lista'],
    healthBenefit: 'Contiene carbohidratos complejos y es fuente de energía, aporta potasio y genera saciedad.',
    portions: 3,
    ingredients: ['papa nevada']
  },
  {
    id: 'frijol-rojo', name: 'Frijol Rojo (Libra)', price: 7900,
    description: 'Desinfectado y seleccionado.', image: 'https://picsum.photos/seed/frijol-rojo/400/300',
    category: 'mercado-fresco', benefits: ['Proteína', 'Tradicional'],
    healthBenefit: 'Es proteína vegetal, alta en fibra y regula el azúcar en sangre.',
    portions: 5,
    ingredients: ['frijol rojo']
  },
  {
    id: 'guineo', name: 'Guineo (Libra)', price: 4900,
    description: 'Siempre verde y fresco.', image: 'https://picsum.photos/seed/guineo/400/300',
    category: 'mercado-fresco', benefits: ['Verde', 'Fresco'],
    healthBenefit: 'Es fuente de potasio para el mejoramiento de la función muscular. Es energía rápida y mejora la digestión.',
    portions: 3,
    ingredients: ['guineo']
  },
  {
    id: 'platano', name: 'Plátano (Libra)', price: 4900,
    description: 'Pídelo verde, pintón o maduro.', image: 'https://picsum.photos/seed/platano/400/300',
    category: 'mercado-fresco', benefits: ['Versátil', 'Tradicional'],
    healthBenefit: 'Es energía sostenida, rico en fibra y mejora la digestión.',
    portions: 2,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['plátano']
  },
  {
    id: 'yuca-libra', name: 'Yuca (Libra)', price: 4900,
    description: 'Seleccionada con ojo de halcón.', image: 'https://picsum.photos/seed/yuca-libra/400/300',
    category: 'mercado-fresco', benefits: ['Tradicional', 'Seleccionada'],
    healthBenefit: 'Es libre de gluten, contiene energía limpia y es de fácil digestión.',
    portions: 3,
    ingredients: ['yuca']
  },
  {
    id: 'champinon', name: 'Champiñón (Libra)', price: 14900,
    description: 'Pide media libra, libra o kilo.', image: 'https://picsum.photos/seed/champinon/400/300',
    category: 'mercado-fresco', benefits: ['Gourmet', 'Versátil'],
    healthBenefit: 'Es bajo en calorías, es fuente de proteína vegetal y refuerza el sistema inmune.',
    portions: 4,
    ingredients: ['champiñón']
  },
  {
    id: 'orellana', name: 'Orellana (Libra)', price: 16900,
    description: 'Pide media libra, libra o kilo.', image: 'https://picsum.photos/seed/orellana/400/300',
    category: 'mercado-fresco', benefits: ['Gourmet', 'Premium'],
    healthBenefit: 'Es proteína vegetal, reduce el colesterol y es antiinflamatoria.',
    portions: 4,
    ingredients: ['orellana']
  },
  {
    id: 'tomate-san-marzano', name: 'Tomate San Marzano (Libra)', price: 9900,
    description: 'Perfectamente seleccionados.', image: 'https://picsum.photos/seed/tomate-san-marzano/400/300',
    category: 'mercado-fresco', benefits: ['Premium', 'Salsas'],
    healthBenefit: 'Contiene mayor concentración de antioxidantes, mejora la salud celular y refuerza las defensas.',
    portions: 4,
    observation: 'Se entrega entero y maduro.',
    ingredients: ['tomate san marzano']
  },
  {
    id: 'cebolla-morada', name: 'Cebolla Morada (Libra)', price: 5900,
    description: 'Lavada, pelada y limpia.', image: 'https://picsum.photos/seed/cebolla-morada/400/300',
    category: 'mercado-fresco', benefits: ['Sabor', 'Lista'],
    healthBenefit: 'Es antiinflamatoria, mejora la circulación y contiene mayor concentración de antioxidantes.',
    portions: 3,
    ingredients: ['cebolla morada']
  },
  {
    id: 'cebollin', name: 'Cebollín (Atado)', price: 3900,
    description: 'Lavado y desinfectado.', image: 'https://picsum.photos/seed/cebollin/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Fresco'],
    healthBenefit: 'Es antioxidante, mejora la digestión y refuerza el sistema inmune.',
    portions: 10,
    ingredients: ['cebollín']
  },
  {
    id: 'cebolla-chalota', name: 'Cebolla Chalota (Libra)', price: 12900,
    description: 'Son más dulces y delicadas.', image: 'https://picsum.photos/seed/cebolla-chalota/400/300',
    category: 'mercado-fresco', benefits: ['Gourmet', 'Dulce'],
    healthBenefit: 'Es rica en antioxidantes, mejora la circulación y es antiinflamatoria.',
    portions: 6,
    ingredients: ['cebolla chalota']
  },
  {
    id: 'ajo', name: 'Ajo (Libra)', price: 3900,
    description: 'Seleccionado con cuidado.', image: 'https://picsum.photos/seed/ajo/400/300',
    category: 'mercado-fresco', benefits: ['Esencial', 'Sabor'],
    healthBenefit: 'Es un antibiótico natural, mejora el sistema inmune y reduce la inflamación.',
    portions: 10,
    ingredients: ['ajo']
  },
  {
    id: 'lechuga-romana', name: 'Lechuga Romana (Libra)', price: 5900,
    description: 'Para ensaladas y emparedados.', image: 'https://picsum.photos/seed/lechuga-romana/400/300',
    category: 'mercado-fresco', benefits: ['Fresca', 'Crujiente'],
    healthBenefit: 'Rica en fibra, mejora la digestión y aporta minerales.',
    portions: 1,
    ingredients: ['lechuga romana']
  },
  {
    id: 'cogollo-europeo', name: 'Cogollo Europeo (Libra)', price: 7900,
    description: 'Para ensaladas y emparedados.', image: 'https://picsum.photos/seed/cogollo-europeo/400/300',
    category: 'mercado-fresco', benefits: ['Premium', 'Ensaladas'],
    healthBenefit: 'Rica en fibra, mejora la digestión y es hidratante.',
    portions: 3,
    ingredients: ['cogollo europeo']
  },
  {
    id: 'arracacha', name: 'Arracacha (Libra)', price: 5900,
    description: 'Tubérculo tradicional colombiano.', image: 'https://picsum.photos/seed/arracacha/400/300',
    category: 'mercado-fresco', benefits: ['Tradicional', 'Nutritiva'],
    healthBenefit: 'Energía de fácil digestión, rica en carbohidratos suaves y mejora la digestión.',
    portions: 3,
    ingredients: ['arracacha']
  },
  {
    id: 'jengibre', name: 'Jengibre (100g)', price: 4900,
    description: 'Raíz potente para infusiones y preparaciones.', image: 'https://picsum.photos/seed/jengibre/400/300',
    category: 'mercado-fresco', benefits: ['Medicinal', 'Antiinflamatorio'],
    healthBenefit: 'Es antiinflamatorio, refuerza el sistema inmune y mejora la digestión. Este es otro superalimento.',
    portions: 5,
    ingredients: ['jengibre']
  },
  {
    id: 'aji-dulce', name: 'Ají Dulce (Libra)', price: 7900,
    description: 'Sabor sin picante.', image: 'https://picsum.photos/seed/aji-dulce/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Suave'],
    healthBenefit: 'Es antioxidante, mejora la digestión y es rico en vitamina C.',
    portions: 10,
    ingredients: ['ají dulce']
  },
  {
    id: 'aji-rocoto', name: 'Ají Rocoto Picante (Libra)', price: 12900,
    description: 'Para los amantes del picante.', image: 'https://picsum.photos/seed/aji-rocoto/400/300',
    category: 'mercado-fresco', benefits: ['Picante', 'Intenso'],
    healthBenefit: 'Activa el metabolismo, mejora la circulación y es antiinflamatorio.',
    portions: 6,
    ingredients: ['ají rocoto picante']
  },
  {
    id: 'jalapeno', name: 'Jalapeño (Libra)', price: 9900,
    description: 'El clásico picante mexicano.', image: 'https://picsum.photos/seed/jalapeno/400/300',
    category: 'mercado-fresco', benefits: ['Picante', 'Versátil'],
    healthBenefit: 'Activa el metabolismo, mejora la circulación y es antiinflamatorio.',
    portions: 8,
    ingredients: ['jalapeño']
  },
  {
    id: 'mazorca', name: 'Bandeja Mazorca (Libra)', price: 5900,
    description: 'Lista para asar o cocinar.', image: 'https://picsum.photos/seed/mazorca/400/300',
    category: 'mercado-fresco', benefits: ['Tradicional', 'Versátil'],
    healthBenefit: 'Es energía natural, contiene fibra y genera saciedad.',
    portions: 3,
    ingredients: ['mazorca']
  },
  {
    id: 'berenjena', name: 'Berenjena (Libra)', price: 7900,
    description: 'Versátil para múltiples preparaciones.', image: 'https://picsum.photos/seed/berenjena/400/300',
    category: 'mercado-fresco', benefits: ['Versátil', 'Baja en calorías'],
    healthBenefit: 'Es antioxidante, reduce el colesterol y mejora la salud cardiovascular.',
    portions: 2,
    ingredients: ['berenjena']
  },
  {
    id: 'col-bruselas', name: 'Col de Bruselas (Libra)', price: 14900,
    description: 'Perfectas para hornear o saltear.', image: 'https://picsum.photos/seed/col-bruselas/400/300',
    category: 'mercado-fresco', benefits: ['Premium', 'Nutritiva'],
    healthBenefit: 'Es un antioxidante potente, desintoxica y refuerza el sistema inmune.',
    portions: 1,
    ingredients: ['col de bruselas']
  },
  {
    id: 'esparragos', name: 'Espárragos (Atado)', price: 12900,
    description: 'Frescos y listos para preparar.', image: 'https://picsum.photos/seed/esparragos/400/300',
    category: 'mercado-fresco', benefits: ['Gourmet', 'Saludable'],
    healthBenefit: 'Son diuréticos, es un desintoxicante renal y mejora la digestión.',
    portions: 3,
    ingredients: ['espárragos']
  },
  {
    id: 'kale', name: 'Kale (250g)', price: 8900,
    description: 'Superalimento de moda.', image: 'https://picsum.photos/seed/kale/400/300',
    category: 'mercado-fresco', benefits: ['Superalimento', 'Antioxidante'],
    healthBenefit: 'Es un superalimento, altamente antioxidante y refuerza el sistema inmune.',
    portions: 3,
    ingredients: ['kale']
  },
  {
    id: 'espinaca', name: 'Espinaca (250g)', price: 5900,
    description: 'Hojas frescas y nutritivas.', image: 'https://picsum.photos/seed/espinaca/400/300',
    category: 'mercado-fresco', benefits: ['Hierro', 'Nutritiva'],
    healthBenefit: 'Es otro superalimento, rica en hierro, mejora la energía y es antioxidante.',
    portions: 4,
    ingredients: ['espinaca']
  },
  {
    id: 'acelga', name: 'Acelga (Atado)', price: 4900,
    description: 'Hojas verdes nutritivas.', image: 'https://picsum.photos/seed/acelga/400/300',
    category: 'mercado-fresco', benefits: ['Nutritiva', 'Versátil'],
    healthBenefit: 'Rica en minerales, mejora la digestión y es antioxidante.',
    portions: 4,
    ingredients: ['acelga']
  },
  {
    id: 'col-china', name: 'Col China (Libra)', price: 6900,
    description: 'Ideal para salteados asiáticos.', image: 'https://picsum.photos/seed/col-china/400/300',
    category: 'mercado-fresco', benefits: ['Asiática', 'Ligera'],
    healthBenefit: 'Es ligera, digestiva y rica en antioxidantes.',
    portions: 4,
    ingredients: ['col china']
  },
  {
    id: 'hinojo', name: 'Hinojo (Libra)', price: 8900,
    description: 'Sabor anisado único.', image: 'https://picsum.photos/seed/hinojo/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Digestivo'],
    healthBenefit: 'Reduce gases estomacales, mejora la digestión y es antiinflamatorio.',
    portions: 5,
    ingredients: ['hinojo']
  },
  {
    id: 'eneldo', name: 'Eneldo (Atado)', price: 3900,
    description: 'Hierba aromática fresca.', image: 'https://picsum.photos/seed/eneldo/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Gourmet'],
    healthBenefit: 'Es digestivo, antiinflamatorio y mejora el metabolismo.',
    portions: 5,
    ingredients: ['eneldo']
  },
  {
    id: 'menta', name: 'Menta (Atado)', price: 3900,
    description: 'Fresca y aromática.', image: 'https://picsum.photos/seed/menta/400/300',
    category: 'mercado-fresco', benefits: ['Refrescante', 'Aromática'],
    healthBenefit: 'Es refrescante, mejora la digestión y es relajante.',
    portions: 5,
    ingredients: ['menta']
  },
  {
    id: 'yerbabuena', name: 'Yerbabuena (Atado)', price: 3900,
    description: 'Para infusiones y cocina.', image: 'https://picsum.photos/seed/yerbabuena/400/300',
    category: 'mercado-fresco', benefits: ['Aromática', 'Digestiva'],
    healthBenefit: 'Es digestiva, relajante y antiinflamatoria.',
    portions: 5,
    ingredients: ['yerbabuena']
  },
  {
    id: 'albahaca', name: 'Albahaca (Atado)', price: 3900,
    description: 'La reina de las hierbas aromáticas.', image: 'https://picsum.photos/seed/albahaca/400/300',
    category: 'mercado-fresco', benefits: ['Aromática', 'Italiana'],
    healthBenefit: 'Es antioxidante, antiinflamatoria y mejora la digestión.',
    portions: 5,
    ingredients: ['albahaca']
  },
  {
    id: 'tomillo', name: 'Tomillo (Atado)', price: 3900,
    description: 'Hierba esencial de cocina.', image: 'https://picsum.photos/seed/tomillo/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Esencial'],
    healthBenefit: 'Es antibacteriano, refuerza el sistema inmune y mejora la respiración.',
    portions: 10,
    ingredients: ['tomillo']
  },
  {
    id: 'romero', name: 'Romero (Atado)', price: 3900,
    description: 'Perfecto para carnes y asados.', image: 'https://picsum.photos/seed/romero/400/300',
    category: 'mercado-fresco', benefits: ['Aromático', 'Asados'],
    healthBenefit: 'Mejora la memoria, es antioxidante y estimula la circulación.',
    portions: 10,
    ingredients: ['romero']
  },

  {
    id: 'manzana-libra', name: 'Manzana (Libra)', price: 8900,
    description: 'Pídela verdes o rojas.', image: 'https://picsum.photos/seed/manzana-libra/400/300',
    category: 'mercado-fresco', benefits: ['Fresca', 'Versátil'],
    healthBenefit: 'Es rica en fibra, favorece la salud intestinal y mejora la digestión. además es perfecta para el control de peso.',
    portions: 1,
    observation: 'Color a elección: verde o roja.',
    ingredients: ['manzana']
  },
  {
    id: 'pera-libra', name: 'Pera (Libra)', price: 9900,
    description: 'Seleccionadas cuidadosamente.', image: 'https://picsum.photos/seed/pera-libra/400/300',
    category: 'mercado-fresco', benefits: ['Dulce', 'Jugosa'],
    healthBenefit: 'Alta en fibra, mejora el tránsito intestinal además es hidratante y baja en calorías.',
    portions: 1,
    ingredients: ['pera']
  },
  {
    id: 'banano-libra', name: 'Banano (Racimo)', price: 5900,
    description: 'Por racimos.', image: 'https://picsum.photos/seed/banano-libra/400/300',
    category: 'mercado-fresco', benefits: ['Energía', 'Potasio'],
    healthBenefit: 'Alto en potasio perfecto para la recuperación muscular, reduce la fatiga y es fuente rápida de energía.',
    portions: 12,
    observation: 'Se entrega verde o pintón, en racimos pequeños.',
    ingredients: ['banano']
  },
  {
    id: 'limon-libra', name: 'Limón (Libra)', price: 4900,
    description: 'Los más jugosos y frescos.', image: 'https://picsum.photos/seed/limon-libra/400/300',
    category: 'mercado-fresco', benefits: ['Vitamina C', 'Fresco'],
    healthBenefit: 'Es alto en vitamina C, perfecta para proteger el sistema inmune.',
    portions: 8,
    ingredients: ['limón']
  },
  {
    id: 'granadilla', name: 'Granadilla (Libra)', price: 12900,
    description: 'Una fruta exótica colombiana.', image: 'https://picsum.photos/seed/granadilla/400/300',
    category: 'mercado-fresco', benefits: ['Exótica', 'Digestiva'],
    healthBenefit: 'Rica en fibra, mejora la digestión y es un relajante natural.',
    portions: 3,
    ingredients: ['granadilla']
  },
  {
    id: 'mango-libra', name: 'Mango (Libra)', price: 7900,
    description: 'Un infaltable en tu nevera.', image: 'https://picsum.photos/seed/mango-libra/400/300',
    category: 'mercado-fresco', benefits: ['Tropical', 'Dulce'],
    healthBenefit: 'Alto en vitaminas A y C, mejora el sistema inmune y la piel.',
    portions: 1,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['mango']
  },
  {
    id: 'coco-libra', name: 'Coco (Libra)', price: 8900,
    description: 'El sabor dulce inconfundible del coco.', image: 'https://picsum.photos/seed/coco-libra/400/300',
    category: 'mercado-fresco', benefits: ['Tropical', 'Energía'],
    healthBenefit: 'Son grasas saludables, hidratante y mejora el metabolismo.',
    portions: 1,
    ingredients: ['coco']
  },
  {
    id: 'lulo', name: 'Lulo (Libra)', price: 8900,
    description: 'Acidito y especial para hacer jugo.', image: 'https://picsum.photos/seed/lulo/400/300',
    category: 'mercado-fresco', benefits: ['Cítrico', 'Jugos'],
    healthBenefit: 'Muy alto en vitamina C, es antioxidante y refuerza el sistema inmune.',
    portions: 4,
    ingredients: ['lulo']
  },
  {
    id: 'kiwi-libra', name: 'Kiwi (Libra)', price: 19900,
    description: 'Importados de calidad.', image: 'https://picsum.photos/seed/kiwi-libra/400/300',
    category: 'mercado-fresco', benefits: ['Importado', 'Vitamina C'],
    healthBenefit: 'Altísimo en vitamina C, refuerza las defensas y mejora la digestión.',
    portions: 4,
    observation: 'Maduración a elección: verde o pintón.',
    ingredients: ['kiwi']
  },
  {
    id: 'durazno', name: 'Durazno (Libra)', price: 12900,
    description: 'Una fruta deliciosa con sabor delicado.', image: 'https://picsum.photos/seed/durazno/400/300',
    category: 'mercado-fresco', benefits: ['Dulce', 'Delicado'],
    healthBenefit: 'Es hidratante, y rico en antioxidantes.',
    portions: 4,
    ingredients: ['durazno']
  },
  {
    id: 'pitahaya', name: 'Pitahaya (Libra)', price: 14900,
    description: 'Para mejorar tu salud digestiva.', image: 'https://picsum.photos/seed/pitahaya/400/300',
    category: 'mercado-fresco', benefits: ['Digestiva', 'Exótica'],
    healthBenefit: 'Rica en fibra, regula la digestión y es antioxidante.',
    portions: 2,
    ingredients: ['pitahaya']
  },
  {
    id: 'mandarina', name: 'Mandarina (Libra)', price: 6900,
    description: 'Un cítrico que acompaña loncheras.', image: 'https://picsum.photos/seed/mandarina/400/300',
    category: 'mercado-fresco', benefits: ['Cítrica', 'Snack'],
    healthBenefit: 'Contiene vitamina C, es hidratante y mejora el sistema inmune.',
    portions: 4,
    ingredients: ['mandarina']
  },
  {
    id: 'fresa-libra', name: 'Fresa (Libra)', price: 12900,
    description: 'Dulces y grandes perfectamente seleccionadas.', image: 'https://picsum.photos/seed/fresa-libra/400/300',
    category: 'mercado-fresco', benefits: ['Dulce', 'Seleccionada'],
    healthBenefit: 'Es un potente antioxidante, mejora la piel y es antiinflamatoria.',
    portions: 4,
    ingredients: ['fresa']
  },
  {
    id: 'guayaba-pera', name: 'Guayaba Pera (Libra)', price: 7900,
    description: 'La guayaba rosadita y dulce.', image: 'https://picsum.photos/seed/guayaba-pera/400/300',
    category: 'mercado-fresco', benefits: ['Dulce', 'Jugos'],
    healthBenefit: 'Es muy alta en vitamina C, mejora el sistema inmune y contiene fibra.',
    portions: 3,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['guayaba pera']
  },
  {
    id: 'guayaba-manzana-libra', name: 'Guayaba Manzana (Libra)', price: 7900,
    description: 'La guayaba verde y acidita.', image: 'https://picsum.photos/seed/guayaba-manzana-libra/400/300',
    category: 'mercado-fresco', benefits: ['Acidita', 'Fresca'],
    healthBenefit: 'Es rica en antioxidantes, mejora la digestión y apoya al sistema inmune.',
    portions: 2,
    ingredients: ['guayaba manzana']
  },
  {
    id: 'aguacate-hass', name: 'Aguacate Hass (Libra)', price: 5900,
    description: 'Perfecto para hacer guacamole.', image: 'https://picsum.photos/seed/aguacate-hass/400/300',
    category: 'mercado-fresco', benefits: ['Grasas saludables', 'Versátil'],
    healthBenefit: 'Contiene grasas saludables, mejora la salud cardiovascular y aumenta la saciedad.',
    portions: 3,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['aguacate hass']
  },
  {
    id: 'sandia-baby-libra', name: 'Sandía Baby (Libra)', price: 12900,
    description: 'Las sandías más dulces.', image: 'https://picsum.photos/seed/sandia-baby-libra/400/300',
    category: 'mercado-fresco', benefits: ['Hidratante', 'Dulce'],
    healthBenefit: 'Es hidratación extrema, es diurética y refrescante.',
    portions: 1,
    observation: 'Se entrega entera por unidad y madura.',
    ingredients: ['sandía baby']
  },
  {
    id: 'tomate-arbol', name: 'Tomate de Árbol (Libra)', price: 6900,
    description: 'Perfecto para hacer jugo.', image: 'https://picsum.photos/seed/tomate-arbol/400/300',
    category: 'mercado-fresco', benefits: ['Jugos', 'Vitaminas'],
    healthBenefit: 'Es alto en antioxidantes, mejora la salud cardiovascular y regula el colesterol.',
    portions: 3,
    ingredients: ['tomate de árbol']
  },
  {
    id: 'papaya-maradol', name: 'Papaya Maradol (Libra)', price: 8900,
    description: 'Seleccionada perfectamente.', image: 'https://picsum.photos/seed/papaya-maradol/400/300',
    category: 'mercado-fresco', benefits: ['Digestiva', 'Dulce'],
    healthBenefit: 'Contiene enzimás digestivas (papaína) mejora la digestión y es antiinflamatoria.',
    portions: 1,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['papaya maradol']
  },
  {
    id: 'melon-libra', name: 'Melón (Libra)', price: 9900,
    description: 'Dulce y exquisito.', image: 'https://picsum.photos/seed/melon-libra/400/300',
    category: 'mercado-fresco', benefits: ['Dulce', 'Refrescante'],
    healthBenefit: 'Es hidratante, ligero y bajo en calorías.',
    portions: 1,
    observation: 'Se entrega entero por unidad y maduro.',
    ingredients: ['melón']
  },
  {
    id: 'guanabana', name: 'Guanábana (Libra)', price: 14900,
    description: 'Perfectamente seleccionada.', image: 'https://picsum.photos/seed/guanabana/400/300',
    category: 'mercado-fresco', benefits: ['Exótica', 'Jugos'],
    healthBenefit: 'Es un antioxidante potente, refuerza el sistema inmune y es un relajante natural.',
    portions: 1,
    observation: 'Se entrega entera por unidad y pintona.',
    ingredients: ['guanábana']
  },
  {
    id: 'mangostino', name: 'Mangostino (Libra)', price: 19900,
    description: 'Un sabor único y exótico.', image: 'https://picsum.photos/seed/mangostino/400/300',
    category: 'mercado-fresco', benefits: ['Exótico', 'Premium'],
    healthBenefit: 'Es riquísimo en antioxidantes, antiinflamatorio y mejora el sistema inmune.',
    portions: 3,
    ingredients: ['mangostino']
  },
  {
    id: 'rambutan', name: 'Rambután (Libra)', price: 24900,
    description: 'Un producto exclusivo.', image: 'https://picsum.photos/seed/rambutan/400/300',
    category: 'mercado-fresco', benefits: ['Exclusivo', 'Exótico'],
    healthBenefit: 'Rico en vitamina C, es energía natural y mejora el sistema inmune.',
    portions: 8,
    ingredients: ['rambután']
  },
  {
    id: 'arandanos', name: 'Arándanos (125g)', price: 14900,
    description: 'Fruta cargada de antioxidantes.', image: 'https://picsum.photos/seed/arandanos/400/300',
    category: 'mercado-fresco', benefits: ['Antioxidantes', 'Premium'],
    healthBenefit: 'Es un potente antioxidante, mejora la memoria y protege el sistema cardiovascular.',
    portions: 1,
    ingredients: ['arándanos']
  },
  {
    id: 'frambuesa', name: 'Frambuesa (125g)', price: 17900,
    description: 'Exclusivo y exótico.', image: 'https://picsum.photos/seed/frambuesa/400/300',
    category: 'mercado-fresco', benefits: ['Exclusivo', 'Antioxidante'],
    healthBenefit: 'Es rica en fibra, antioxidante y mejora la digestión.',
    portions: 1,
    ingredients: ['frambuesa']
  },
  {
    id: 'maracuya', name: 'Maracuyá (Libra)', price: 7900,
    description: 'La fruta de la pasión.', image: 'https://picsum.photos/seed/maracuya/400/300',
    category: 'mercado-fresco', benefits: ['Tropical', 'Jugos'],
    healthBenefit: 'Es una pasiflora natural, te relaja además de que mejora el sueño y es antioxidante.',
    portions: 2,
    ingredients: ['maracuyá']
  },
  {
    id: 'naranja-libra', name: 'Naranja (Libra)', price: 4900,
    description: 'Dulces y perfectamente seleccionadas.', image: 'https://picsum.photos/seed/naranja-libra/400/300',
    category: 'mercado-fresco', benefits: ['Vitamina C', 'Jugos'],
    healthBenefit: 'Contiene vitamina C, es hidratante y mejora el sistema inmune.',
    portions: 3,
    ingredients: ['naranja']
  },
  {
    id: 'aguacate-papelillo', name: 'Aguacate Papelillo (Libra)', price: 4900,
    description: 'Especial para acompañar almuerzos y ensaladas.', image: 'https://picsum.photos/seed/aguacate-papelillo/400/300',
    category: 'mercado-fresco', benefits: ['Tradicional', 'Versátil'],
    healthBenefit: 'Es una grasa saludable, te aporta energía sostenida y apoya la salud cardiovascular.',
    portions: 1,
    observation: 'Maduración a elección: verde, pintón o maduro.',
    ingredients: ['aguacate papelillo']
  },

  // Combos
  {
    id: 'combo-1-2',
    name: 'Combo para 1 o 2',
    price: 390000,
    description: 'Selección perfecta para parejas o consumo individual.',
    image: 'https://picsum.photos/seed/combo-1-2/400/300',
    category: 'combos',
    benefits: ['Completo', 'Ahorro'],
    healthBenefit: 'La porción perfecta para tu mercado saludable quincenal.',
    portions: 84,
    observation: 'Incluye opciones para escoger sopas o cremas, frutas picadas, verduras picadas, una ensalada gourmet, una ensalada tradicional, jugos saludables o jugo de naranja, frutos secos y frutas de mano por unidad.',
    ingredients: [
      '3 sopas o cremas',
      '3 baby bowls de fruta x 250 gr',
      '3 baby bowls de verduras x 250 gr',
      '1 bowl de ensalada gourmet',
      '1 bowl de ensalada tradicional',
      '6 frutas de mano por unidad',
      '1 kg de aguacate hass',
      'cilantro x 200 gr',
      '1 kg de papa capira',
      '1 lb de papa criolla',
      '1 kg de plátano',
      '1,5 kg de banano',
      '2 cabezas de ajo',
      '1 kg de limón tahiti',
      '5 jugos saludables o six pack de jugo de naranja',
      'mix de frutos secos x 2',
      'queso saludable 500 gr x 1'
    ]
  },
  {
    id: 'combo-familiar',
    name: 'Combo Familiar',
    price: 590000,
    description: 'Abastecimiento completo para la familia.',
    image: 'https://picsum.photos/seed/combo-familiar/400/300',
    category: 'combos',
    benefits: ['Familiar', 'Gran ahorro'],
    healthBenefit: 'Un mercado saludable para compartir entre familia y amigos.',
    portions: 118,
    observation: 'Incluye opciones para escoger sopas o cremas, frutas picadas, verduras picadas, ensaladas gourmet, ensaladas tradicionales, jugos saludables o jugo de naranja, frutos secos y frutas de mano por unidad.',
    ingredients: [
      '5 sopas o cremas',
      '6 baby bowls de fruta x 250 gr',
      '6 baby bowls de verduras x 250 gr',
      '2 bowls de ensalada gourmet',
      '2 bowls de ensalada tradicional',
      '8 frutas de mano por unidad',
      '1 kg de aguacate hass',
      'cilantro x 200 gr',
      '2 kg de papa capira',
      '1 kg de papa criolla',
      '2 kg de plátano',
      '2 kg de banano',
      '3 cabezas de ajo',
      '1 kg de limón tahiti',
      '5 jugos saludables o six pack de jugo de naranja',
      'mix de frutos secos x 2 de 140 gr',
      'queso saludable 500 gr x 2'
    ]
  },
  {
    id: 'combo-tardes',
    name: 'Combo para Tardes',
    price: 290000,
    description: 'Snacks y bebidas para tus tardes.',
    image: 'https://picsum.photos/seed/combo-tardes/400/300',
    category: 'combos',
    benefits: ['Snacks', 'Merienda'],
    healthBenefit: 'Pensado para convertir tus tardes en tardes saludables y balanceadas.',
    portions: 68,
    observation: 'Incluye base predeterminada y una fruta de elección.',
    ingredients: [
      '1 lt de yogurt griego',
      '2 mini bowl berry mix x 250 gr',
      '2 kg de banano',
      '1 frutos secos mix 140 gr',
      '1 almendra 140 gr',
      '1 baby bowl de frutos amarillos',
      '1 baby bowl de kiwi',
      '1 miel de abejas x 250 gr',
      '1 mantequilla de maní x 200 gr',
      '1 avena en hojuelas 150 gr',
      '1 baby bowl de fruta x 250 gr',
      '1 semillas de calabaza 140 gr'
    ]
  },
  {
    id: 'combo-lonchera',
    name: 'Combo Lonchera Niños',
    price: 280000,
    description: 'Opciones saludables para el colegio.',
    image: 'https://picsum.photos/seed/combo-lonchera/400/300',
    category: 'combos',
    benefits: ['Niños', 'Saludable'],
    healthBenefit: 'Pensado en porciones exactas para niños.',
    portions: 19,
    observation: 'Incluye opciones para escoger frutas picadas, ensalada tradicional, ensalada gourmet y frutas de mano por unidad.',
    ingredients: [
      '2 mini bowls de fruta x 200 gr',
      '2 mini bowl berry mix x 150 gr',
      '2 mini bowls de frutos amarillos x 200 gr',
      '1 ensalada mini tradicional x 250 gr',
      '1 ensalada mini gourmet x 250 gr',
      '5 frutos secos mix 50 gr',
      '5 frutas de mano por unidad',
      '6 galletas de avena',
      '5 barritas de granola'
    ]
  },
  {
    id: 'combo-oficina',
    name: 'Combo Oficina',
    price: 310000,
    description: 'Energía y salud para tu jornada laboral.',
    image: 'https://picsum.photos/seed/combo-oficina/400/300',
    category: 'combos',
    benefits: ['Productividad', 'Práctico'],
    healthBenefit: 'Pensado en la practicidad y el ajetreo de tu día a día en la oficina.',
    portions: 21,
    observation: 'Incluye opciones para escoger frutas picadas, ensalada tradicional, ensalada gourmet y frutas de mano por unidad.',
    ingredients: [
      '2 baby bowls de fruta x 250 gr',
      '2 baby bowl berry mix x 200 gr',
      '2 baby bowls de frutos amarillos x 250 gr',
      '1 ensalada mini tradicional x 250 gr',
      '1 ensalada mini gourmet x 250 gr',
      '6 frutos secos mix 50 gr',
      '6 frutas de mano por unidad',
      '6 galletas de avena',
      '5 barritas de granola'
    ]
  },
  {
    id: 'combo-mascotas',
    name: 'Combo Mascotas',
    price: 169000,
    description: 'Opciones balanceadas y testeadas para tu peludito, con productos aptos para consumo animal.',
    image: 'https://picsum.photos/seed/combo-mascotas/400/300',
    category: 'combos',
    benefits: ['Mascotas', 'Digestivo'],
    healthBenefit: 'Pensado en el bienestar y la salud digestiva de tu peludito.',
    portions: 34,
    observation: 'Todo viene predeterminado en este combo.',
    ingredients: [
      '2 baby bowls de mango maduro x 200 gr',
      '2 mini bowls de zanahoria x 200 gr',
      '2 mini bowls de apio x 200 gr',
      '1 baby bowl de pepino sin semilla y sin cáscara x 250 gr',
      '1 baby bowl de calabaza cocida x 250 gr',
      '1 baby bowl de zucchini sin semilla y sin cáscara',
      '2 mini bowls de arándanos x 125 gr',
      '1 litro de kéfir natural sin azúcar'
    ]
  },

  {
    id: 'kit-jugos-saludables-18-und',
    name: 'Kit Jugos Saludables (18 und)',
    price: 95900,
    description: 'Un kit completo de jugos saludables que te brindan nutrientes esenciales para el día a día.',
    image: 'https://picsum.photos/seed/kit-jugos-saludables/400/300',
    category: 'combos',
    benefits: ['Funcional', 'Energía diaria'],
    healthBenefit: 'Reúne jugos funcionales pensados para sumar nutrientes, frescura y practicidad a tu rutina.',
    portions: 18,
    observation: 'Incluye las opciones de jugos funcionales de Serana y jugo de naranja recién exprimido.',
    ingredients: [
      '5 jugos verde detox x 150 gr',
      '5 batidos circulación x 150 gr',
      '5 batidos detox anti estrés x 150 gr',
      '3 jugos de naranja x 250 ml'
    ]
  },
  {
    id: 'kit-jugos',
    name: 'Kit Jugos de Fruta (18 und)',
    price: 95900,
    description: 'Variedad de jugos naturales.',
    image: 'https://picsum.photos/seed/kit-jugos/400/300',
    category: 'combos',
    benefits: ['Variedad', 'Natural'],
    healthBenefit: 'Un kit completo de jugos de fruta para que nunca te quedes sin opciones saludables en tu sobremesa.',
    portions: 18,
    observation: 'Opciones de jugos de fruta: mango, piña, melón maduro, sandía, maracuyá, mora, fresa, tomate de árbol o papaya.',
    ingredients: ['3 packs de batidos de fruta x 5 und de 150 gr', 'jugo de naranja x 3']
  },
  {
    id: 'kit-ensaladas-gourmet-5-und',
    name: 'Kit Ensaladas Gourmet (5 und)',
    price: 190000,
    description: 'Un kit de ensaladas deliciosas y más elaboradas para darle un toque gourmet a tu semana.',
    image: 'https://picsum.photos/seed/kit-ensaladas-gourmet/400/300',
    category: 'combos',
    benefits: ['Gourmet', 'Semanal'],
    healthBenefit: 'Una forma práctica de tener ensaladas gourmet listas para varios momentos de la semana.',
    portions: 15,
    observation: 'Opción desplegable de todas las ensaladas gourmet para escoger máximo 5 unidades.',
    ingredients: ['5 ensaladas gourmet a elección']
  },
  {
    id: 'kit-ensaladas',
    name: 'Kit Ensaladas Tradicional (5 und)',
    price: 110000,
    description: 'Tus ensaladas favoritas para la semana.',
    image: 'https://picsum.photos/seed/kit-ensaladas/400/300',
    category: 'combos',
    benefits: ['Semanal', 'Práctico'],
    healthBenefit: 'Un kit de ensaladas para tu día a día.',
    portions: 15,
    observation: 'Ensaladas tradicionales a elección.',
    ingredients: ['5 ensaladas tradicionales a elección']
  },
  {
    id: 'kit-sopas-prelistas-5-und',
    name: 'Kit Sopas Prelistas (5 und)',
    price: 95900,
    description: 'El kit de sopas que te saca de apuros mientras complementas tus almuerzos.',
    image: 'https://picsum.photos/seed/kit-sopas-prelistas/400/300',
    category: 'combos',
    benefits: ['Práctico', 'Reconfortante'],
    healthBenefit: 'Pensado para tener sopas listas, nutritivas y fáciles de sumar a tus comidas.',
    portions: 15,
    observation: 'Opción desplegable de todas las sopas prelistas para escoger máximo 5 unidades.',
    ingredients: ['5 sopas prelistas a elección']
  },
  {
    id: 'kit-vinagretas-3-und',
    name: 'Kit Vinagretas (3 und)',
    price: 75900,
    description: '¿Qué sería de una ensalada sin su vinagreta? Con este kit realzas el sabor de tus comidas.',
    image: 'https://picsum.photos/seed/kit-vinagretas/400/300',
    category: 'combos',
    benefits: ['Sabor', 'Complemento'],
    healthBenefit: 'Un kit para elevar ensaladas y comidas con salsas o vinagretas listas para servir.',
    portions: 20,
    observation: 'Opción desplegable de todas las salsas y vinagretas para escoger máximo 3 unidades.',
    ingredients: ['3 vinagretas o salsas a elección']
  }
];

export const products: Product[] = baseProducts.map(addProduceWeightVariants);

function addProduceWeightVariants(product: Product): Product {
  if (product.variants?.length) return product;
  if (!['frutas-picadas', 'verduras-picadas'].includes(product.category)) return product;

  const normalizedName = product.name.toLowerCase();
  if (normalizedName.includes('(libra)')) {
    return {
      ...product,
      variants: [
        { label: '500 gr', price: product.price },
        { label: '250 gr', price: Math.round(product.price / 2) },
      ],
    };
  }

  if (normalizedName.includes('(250g)') || normalizedName.includes('(250 g)')) {
    return {
      ...product,
      variants: [
        { label: '250 gr', price: product.price },
        { label: '500 gr', price: product.price * 2 },
      ],
    };
  }

  return product;
}
