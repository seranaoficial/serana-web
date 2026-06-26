import LegalLayout from '../components/LegalLayout';

export default function TerminosPage() {
  return (
    <LegalLayout
      kicker="Condiciones · Servicio"
      title="Términos y"
      italic="Condiciones"
      intro="Estos términos rigen el uso de serana.food y la compra de productos en nuestra tienda. Al usar el sitio aceptas estas condiciones; si no estás de acuerdo, te pedimos no continuar con la compra."
      lastUpdated="abril 2026"
    >
      <h2>1. Quiénes somos</h2>
      <p>
        <strong>Serana Wellness S.A.S.</strong>, sociedad colombiana con domicilio en Medellín, Antioquia,
        opera la tienda en línea serana.food, dedicada a la venta de alimentos preparados y
        productos de bienestar. Para cualquier asunto contractual:{' '}
        <a href="mailto:contacto@serana.co">contacto@serana.co</a>.
      </p>

      <h2>2. Cómo se hace una compra</h2>
      <ol>
        <li>Seleccionas los productos en el menú y los agregas al carrito.</li>
        <li>Procedes al checkout, donde ingresas datos de contacto y dirección de entrega.</li>
        <li>Eliges método de pago a través de Mercado Pago (tarjeta, PSE, Nequi, transferencia o efectivo).</li>
        <li>
          Recibes la confirmación del pedido por correo. El pedido se considera{' '}
          <strong>aceptado</strong> únicamente cuando confirmamos el pago.
        </li>
      </ol>

      <h2>3. Precios e impuestos</h2>
      <p>
        Todos los precios se muestran en pesos colombianos (COP) e incluyen IVA cuando aplica. El
        valor del domicilio se calcula en el checkout según la zona de entrega. Podemos modificar
        precios sin aviso previo, pero el precio que verás al pagar es el que se cobra.
      </p>

      <h2>4. Métodos de pago</h2>
      <p>
        Procesamos los pagos a través de <strong>Mercado Pago Colombia</strong>. Aceptamos:
      </p>
      <ul>
        <li>Tarjetas de crédito y débito (Visa, Mastercard, Amex).</li>
        <li>PSE — débito desde cuenta bancaria.</li>
        <li>Nequi y otras billeteras digitales.</li>
        <li>Transferencia bancaria y pago en efectivo en puntos autorizados.</li>
      </ul>
      <p>
        Serana no almacena ni accede a los datos de tarjeta. Toda la transacción ocurre en el
        entorno seguro de Mercado Pago.
      </p>

      <h2>5. Entregas</h2>
      <p>
        Entregamos en Medellín y municipios aledaños cubiertos por nuestros aliados logísticos. Los
        tiempos estimados se muestran al hacer el pedido y dependen de la zona y el horario.
      </p>
      <p>
        Si nadie recibe el pedido en el lugar y horario indicado, intentaremos contactarte por el
        número que registraste. Tras dos intentos fallidos, el pedido se devuelve a la cocina y se
        coordina una nueva entrega o reembolso parcial según el caso.
      </p>

      <h2>6. Suscripciones</h2>
      <p>
        Las suscripciones (semanales o mensuales) se renuevan automáticamente en la frecuencia que
        elijas. Puedes <strong>pausar, modificar o cancelar</strong> tu suscripción en cualquier
        momento desde tu cuenta o escribiéndonos a{' '}
        <a href="mailto:contacto@serana.co">contacto@serana.co</a> al menos 48 horas antes del
        próximo cobro. Cancelaciones recibidas con menos de 48 horas se aplican al ciclo siguiente.
      </p>

      <h2>7. Conducta del usuario</h2>
      <p>Al usar serana.food te comprometes a:</p>
      <ul>
        <li>Proporcionar información veraz y actualizada.</li>
        <li>No usar el sitio para actividades fraudulentas o ilegales.</li>
        <li>Respetar los derechos de propiedad intelectual del contenido publicado.</li>
        <li>No intentar acceder a áreas restringidas o vulnerar la seguridad del sitio.</li>
      </ul>

      <h2>8. Propiedad intelectual</h2>
      <p>
        Todo el contenido del sitio (textos, imágenes, ilustraciones, marcas, logos y código)
        pertenece a Serana Wellness S.A.S. o a sus licenciantes. Queda prohibida su reproducción,
        modificación o uso comercial sin autorización previa por escrito.
      </p>

      <h2>9. Limitación de responsabilidad</h2>
      <p>
        Serana se compromete a entregar productos de la mejor calidad. Sin embargo, no nos hacemos
        responsables por reacciones alérgicas no informadas previamente, mal uso de los productos,
        o consumo en condiciones distintas a las recomendadas. Si tienes alergias o condiciones
        médicas particulares, revisa los ingredientes antes de pedir o consúltanos.
      </p>

      <h2>10. Resolución de conflictos</h2>
      <p>
        Cualquier controversia se intentará resolver primero por canales directos:{' '}
        <a href="mailto:contacto@serana.co">contacto@serana.co</a>. De no llegar a acuerdo, se
        someterá a la jurisdicción ordinaria colombiana, conforme al Estatuto del Consumidor (Ley
        1480 de 2011).
      </p>

      <h2>11. Cambios a los términos</h2>
      <p>
        Podemos actualizar estos términos cuando lo consideremos necesario. La versión vigente
        siempre estará publicada en esta página. El uso continuado del sitio tras una
        actualización implica aceptación de los nuevos términos.
      </p>
    </LegalLayout>
  );
}
