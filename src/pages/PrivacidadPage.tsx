import LegalLayout from '../components/LegalLayout';

export default function PrivacidadPage() {
  return (
    <LegalLayout
      kicker="Política · Datos Personales"
      title="Política de"
      italic="Privacidad"
      intro="En Serana cuidamos tus datos con la misma honestidad con la que cocinamos. Esta política describe cómo recolectamos, usamos y protegemos tu información personal, en cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia."
      lastUpdated="abril 2026"
    >
      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>Serana Wellness S.A.S.</strong>, sociedad constituida en Colombia, con domicilio en
        Medellín, Antioquia. Correo de contacto:{' '}
        <a href="mailto:contacto@serana.co">contacto@serana.co</a>.
      </p>

      <h2>2. Datos que recolectamos</h2>
      <p>Cuando interactúas con serana.food podemos recolectar:</p>
      <ul>
        <li>
          <strong>Datos de contacto:</strong> nombre, correo, teléfono y ciudad cuando te suscribes
          al boletín, te inscribes a un encuentro o completas el wellness quiz.
        </li>
        <li>
          <strong>Datos de pedido:</strong> dirección de entrega, productos seleccionados, método de
          pago y trazabilidad del envío cuando realizas una compra.
        </li>
        <li>
          <strong>Datos técnicos:</strong> dirección IP, tipo de navegador, páginas visitadas y
          tiempo de permanencia, recolectados de forma agregada para mejorar la experiencia.
        </li>
        <li>
          <strong>Datos de comunicación:</strong> mensajes que nos envías por formulario, chat o
          correo electrónico.
        </li>
      </ul>

      <h2>3. Para qué los usamos</h2>
      <ul>
        <li>Procesar tus pedidos y entregarlos en la dirección que indicaste.</li>
        <li>Enviarte confirmaciones de inscripción, recetas y comunicaciones del boletín al que te suscribiste.</li>
        <li>Personalizar tu experiencia con recomendaciones basadas en tus preferencias.</li>
        <li>Mejorar nuestros productos y servicios mediante análisis agregados.</li>
        <li>Cumplir con obligaciones legales, tributarias y contables.</li>
      </ul>

      <h2>4. Tus derechos</h2>
      <p>
        Como titular de los datos, en cualquier momento puedes ejercer los derechos consagrados en
        la Ley 1581 de 2012:
      </p>
      <ul>
        <li><strong>Conocer</strong> qué datos tuyos tenemos almacenados.</li>
        <li><strong>Actualizar</strong> o <strong>rectificar</strong> información incorrecta o desactualizada.</li>
        <li><strong>Solicitar prueba</strong> de la autorización que diste para el tratamiento.</li>
        <li><strong>Revocar</strong> tu autorización y/o solicitar la <strong>supresión</strong> de tus datos.</li>
        <li><strong>Acceder gratuitamente</strong> a tus datos personales.</li>
        <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC).</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escribe a{' '}
        <a href="mailto:contacto@serana.co">contacto@serana.co</a>. Responderemos en máximo 15 días
        hábiles contados desde la recepción de la solicitud.
      </p>

      <h2>5. Con quién compartimos tus datos</h2>
      <p>Solo compartimos datos con terceros estrictamente necesarios para operar:</p>
      <ul>
        <li>
          <strong>Pasarela de pago:</strong> Mercado Pago Colombia para procesar transacciones de
          forma segura. No almacenamos números de tarjeta.
        </li>
        <li>
          <strong>Mensajería:</strong> aliados logísticos para la entrega de pedidos a domicilio en Medellín.
        </li>
        <li>
          <strong>Infraestructura:</strong> Supabase y proveedores de hosting para alojar la plataforma.
        </li>
        <li>
          <strong>Autoridades:</strong> cuando una orden judicial o requerimiento legítimo así lo exija.
        </li>
      </ul>
      <p>
        <strong>Nunca vendemos tus datos</strong> a terceros con fines publicitarios.
      </p>

      <h2>6. Tiempo de conservación</h2>
      <p>
        Conservamos tus datos mientras seas cliente activo o suscriptor. Si solicitas la supresión,
        eliminamos tu información en máximo 30 días, salvo cuando una norma nos obligue a
        conservarla por más tiempo (por ejemplo, facturación electrónica).
      </p>

      <h2>7. Cookies</h2>
      <p>
        Usamos cookies esenciales para que la tienda funcione (carrito, sesión) y cookies de
        análisis agregado para entender el uso del sitio. Puedes desactivarlas desde la
        configuración de tu navegador, pero algunas funciones podrían dejar de operar.
      </p>

      <h2>8. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política cuando incorporemos nuevos servicios o cambien las normas
        aplicables. Publicaremos siempre la versión vigente con su fecha. Si los cambios son
        sustanciales, te avisaremos por correo a la dirección que tengamos registrada.
      </p>
    </LegalLayout>
  );
}
