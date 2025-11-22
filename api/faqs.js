export default function handler(req, res) {
  res.status(200).json([
    {
      "pregunta": "¿Cada cuánto debería fumigar mi casa o negocio?",
      "respuesta": "Depende del nivel de exposición. Como referencia general, muchos locales comerciales fumigan cada 3 a 6 meses y viviendas al menos una vez al año, o antes si notas actividad de plagas."
    },
    {
      "pregunta": "¿Es seguro para niños y mascotas?",
      "respuesta": "Utilizamos productos autorizados y de baja toxicidad. Siempre recomendamos retirar mascotas durante el servicio y ventilar según las indicaciones del técnico."
    },
    {
      "pregunta": "¿Qué debo preparar antes de un servicio?",
      "respuesta": "Idealmente, despejar zonas de trabajo (cocina, almacén, bajo lavaderos), guardar alimentos y utensilios, y avisar al personal sobre la visita para no interrumpir el tratamiento."
    },
    {
      "pregunta": "¿Cuánto dura el servicio y el olor?",
      "respuesta": "La mayoría de intervenciones toma entre 1 y 3 horas, según el tamaño. El ligero olor de los productos suele desaparecer al ventilar, normalmente en pocas horas."
    },
    {
      "pregunta": "¿Qué incluye una limpieza de reservorios?",
      "respuesta": "Incluye vaciado controlado, retiro de sedimentos, cepillado interno y desinfección. Se deja el sistema listo para llenado y, si aplica, se entrega certificado."
    },
    {
      "pregunta": "¿Puedo agendar fuera del horario de oficina?",
      "respuesta": "Sí, coordinamos horarios especiales para no interrumpir la operación de tu negocio, según disponibilidad de agenda."
    },
    {
      "pregunta": "¿Ofrecen garantía en los servicios?",
      "respuesta": "Sí, todos nuestros servicios cuentan con garantía. El período varía según el tipo de tratamiento y se especifica en el contrato de servicio."
    },
    {
      "pregunta": "¿Necesito estar presente durante el servicio?",
      "respuesta": "Es recomendable que alguien esté presente para facilitar el acceso a todas las áreas y recibir las recomendaciones post-servicio del técnico."
    },
    {
      "pregunta": "¿Qué métodos de pago aceptan?",
      "respuesta": "Aceptamos efectivo, transferencias bancarias, tarjetas de crédito y débito. Para empresas, también ofrecemos facturación con crédito previa evaluación."
    },
    {
      "pregunta": "¿Atienden emergencias?",
      "respuesta": "Sí, contamos con servicio de atención para casos urgentes. Puedes comunicarte directamente al (01) 719 9160 o al WhatsApp +51 989 297 269."
    }
  ]);
}
