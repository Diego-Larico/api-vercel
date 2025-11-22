export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([
    {
      id: 1,
      titulo: "Fumigación integral en restaurante",
      categoria: "Comercial",
      plaga: "Cucarachas alemanas",
      ubicacion: "Lima - Miraflores",
      fecha: "2024-10",
      descripcion: "Eliminación completa de infestación en cocina industrial. Tratamiento con gel y nebulización.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-1.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-1.jpg",
      resultados: "100% erradicación en 48 horas",
      duracion: "2 días"
    },
    {
      id: 2,
      titulo: "Control de roedores en almacén",
      categoria: "Industrial",
      plaga: "Ratas noruegas",
      ubicacion: "Callao - Zona industrial",
      fecha: "2024-09",
      descripcion: "Implementación de sistema de trampeo y sellado de puntos de entrada en almacén de alimentos.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-2.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-2.jpg",
      resultados: "Eliminación total de población",
      duracion: "1 semana"
    },
    {
      id: 3,
      titulo: "Desinsectación en vivienda",
      categoria: "Residencial",
      plaga: "Hormigas carpinteras",
      ubicacion: "San Isidro",
      fecha: "2024-11",
      descripcion: "Tratamiento localizado en estructuras de madera con productos de baja toxicidad aptos para hogares.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-3.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-3.jpg",
      resultados: "Erradicación completa sin reincidencia",
      duracion: "1 día"
    },
    {
      id: 4,
      titulo: "Fumigación preventiva en hotel",
      categoria: "Comercial",
      plaga: "Chinches de cama",
      ubicacion: "Cusco - Centro histórico",
      fecha: "2024-08",
      descripcion: "Protocolo de prevención en 45 habitaciones con vapor de alta temperatura y productos residuales.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-4.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-4.jpg",
      resultados: "Cero incidencias en 6 meses",
      duracion: "3 días"
    },
    {
      id: 5,
      titulo: "Desratización en planta procesadora",
      categoria: "Industrial",
      plaga: "Ratones domésticos",
      ubicacion: "Ica - Parque industrial",
      fecha: "2024-10",
      descripcion: "Programa integral con estaciones de cebado y monitoreo continuo. Certificación HACCP incluida.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-5.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-5.jpg",
      resultados: "Certificación sanitaria renovada",
      duracion: "2 semanas"
    },
    {
      id: 6,
      titulo: "Control de termitas en casa",
      categoria: "Residencial",
      plaga: "Termitas subterráneas",
      ubicacion: "La Molina",
      fecha: "2024-07",
      descripcion: "Tratamiento de barrera química perimetral y tratamiento directo en madera afectada.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-6.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-6.jpg",
      resultados: "Protección garantizada por 5 años",
      duracion: "2 días"
    },
    {
      id: 7,
      titulo: "Fumigación en supermercado",
      categoria: "Comercial",
      plaga: "Moscas de la fruta",
      ubicacion: "Arequipa - Centro comercial",
      fecha: "2024-09",
      descripcion: "Control integrado con trampas lumínicas y nebulización nocturna en área de frutas y verduras.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-7.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-7.jpg",
      resultados: "Reducción del 98% en 72 horas",
      duracion: "1 semana"
    },
    {
      id: 8,
      titulo: "Eliminación de alacranes",
      categoria: "Residencial",
      plaga: "Escorpiones",
      ubicacion: "Piura - Zona rural",
      fecha: "2024-06",
      descripcion: "Tratamiento perimetral y sellado de grietas. Capacitación a residentes sobre prevención.",
      imagenAntes: "https://i.imgur.com/ejemplo-antes-8.jpg",
      imagenDespues: "https://i.imgur.com/ejemplo-despues-8.jpg",
      resultados: "Zona segura para niños y mascotas",
      duracion: "1 día"
    }
  ]);
}
