export default function handler(req, res) {
  res.status(200).json([
    {
      "titulo": "Desratización",
      "descripcion": "Eliminamos roedores de forma segura y controlada para evitar daños estructurales, contaminación y pérdidas económicas.",
      "etiqueta": "Control de roedores",
      "bullets": [
        "Inspección detallada de puntos críticos",
        "Uso de estaciones de cebado seguras",
        "Monitoreo y reporte de hallazgos"
      ]
    },
    {
      "titulo": "Desinsectación",
      "descripcion": "Tratamientos dirigidos contra cucarachas, hormigas, moscas, mosquitos y otros insectos que afectan tu operación diaria.",
      "etiqueta": "Control de insectos",
      "bullets": [
        "Planes para cocina, almacenes y oficinas",
        "Productos aprobados y de baja toxicidad",
        "Programas preventivos y de choque"
      ]
    },
    {
      "titulo": "Desinfección",
      "descripcion": "Reducimos la carga microbiana en espacios cerrados para proteger a colaboradores, clientes y familias.",
      "etiqueta": "Ambientes sanitizados",
      "bullets": [
        "Nebulización y pulverización dirigida",
        "Protocolos para oficinas, colegios y hogares",
        "Certificados de servicio para auditorías"
      ]
    },
    {
      "titulo": "Limpieza de reservorios",
      "descripcion": "Mantenimiento completo de tanques y cisternas para asegurar la calidad y potabilidad del agua almacenada.",
      "etiqueta": "Calidad de agua",
      "bullets": [
        "Retiro de sedimentos y lodos",
        "Desinfección interna certificada",
        "Programas de limpieza periódica"
      ]
    },
    {
      "titulo": "Control aviar",
      "descripcion": "Evitamos daños y contaminación por aves mediante métodos humanitarios y soluciones a medida.",
      "etiqueta": "Gestión de aves",
      "bullets": [
        "Instalación de púas y mallas",
        "Sistemas de exclusión en techos y cornisas",
        "Evaluación de riesgos y recomendaciones"
      ]
    }
  ]);
}
