export default function handler(req, res) {
  res.status(200).json([
    {
      nombre: "Bayer Perú S.A.",
      categoria: "Productos Químicos",
      contacto: "Carlos Mendoza Rivera",
      pais: "Perú",
      descripcion: "Proveedor líder de productos químicos para control de plagas. Soluciones innovadoras con respaldo científico.",
      certificaciones: "ISO 9001, ISO 14001, Certificación Sanitaria DIGESA"
    },
    {
      nombre: "BASF Química Peruana S.A.",
      categoria: "Productos Químicos",
      contacto: "María González Torres",
      pais: "Perú",
      descripcion: "Líder global en soluciones químicas para agricultura y control de plagas urbanas.",
      certificaciones: "ISO 9001, ISO 14001, ISO 45001"
    },
    {
      nombre: "Equipos y Tecnología SAC",
      categoria: "Equipamiento",
      contacto: "Jorge Ramírez Flores",
      pais: "Perú",
      descripcion: "Proveedor especializado en equipos de fumigación, nebulizadores y aspersores profesionales.",
      certificaciones: "ISO 9001, Certificado de Calidad Sanitaria"
    },
    {
      nombre: "Uniformes Industriales del Perú",
      categoria: "Equipos de Protección",
      contacto: "Ana Sánchez López",
      pais: "Perú",
      descripcion: "Fabricación y distribución de EPPs certificados para personal de control de plagas.",
      certificaciones: "ISO 9001, Certificación CE, ANSI Z87.1"
    },
    {
      nombre: "Laboratorios Ecológicos SAC",
      categoria: "Productos Químicos",
      contacto: "Luis Fernández Castro",
      pais: "Perú",
      descripcion: "Desarrollo de biocidas ecológicos y productos biodegradables para saneamiento ambiental.",
      certificaciones: "ISO 9001, ISO 14001, Certificación Orgánica"
    },
    {
      nombre: "ProTech Equipment",
      categoria: "Equipamiento",
      contacto: "Roberto Díaz Moreno",
      pais: "Estados Unidos",
      descripcion: "Equipos de última generación para control de plagas: termonebulizadores, detectores y trampas inteligentes.",
      certificaciones: "ISO 9001, EPA Registered, UL Certified"
    },
    {
      nombre: "SafetyFirst Perú EIRL",
      categoria: "Equipos de Protección",
      contacto: "Patricia Vega Ruiz",
      pais: "Perú",
      descripcion: "Importador exclusivo de equipos de protección respiratoria, guantes y trajes de protección química.",
      certificaciones: "ISO 9001, CE, NIOSH Approved"
    },
    {
      nombre: "Química Global Andina",
      categoria: "Productos Químicos",
      contacto: "Fernando Torres Pérez",
      pais: "Colombia",
      descripcion: "Fabricante de rodenticidas, insecticidas y desinfectantes de grado profesional.",
      certificaciones: "ISO 9001, ISO 14001, Registro ICA"
    },
    {
      nombre: "EcoSolutions International",
      categoria: "Productos Químicos",
      contacto: "Michael Johnson",
      pais: "Estados Unidos",
      descripcion: "Soluciones ecológicas y sostenibles para control integrado de plagas en entornos sensibles.",
      certificaciones: "ISO 9001, EPA Green Certified, OMRI Listed"
    },
    {
      nombre: "Trampas y Sistemas SA",
      categoria: "Equipamiento",
      contacto: "Ricardo Paredes Silva",
      pais: "Perú",
      descripcion: "Diseño y fabricación de trampas mecánicas, estaciones cebaderas y sistemas de monitoreo.",
      certificaciones: "ISO 9001, Certificación SENASA"
    },
    {
      nombre: "CleanLab Suministros",
      categoria: "Insumos de Limpieza",
      contacto: "Gabriela Rojas Mendoza",
      pais: "Perú",
      descripcion: "Distribución de insumos de limpieza y desinfección hospitalaria de alto nivel.",
      certificaciones: "ISO 9001, Certificación DIGEMID"
    },
    {
      nombre: "Tech Monitors Corp",
      categoria: "Equipamiento",
      contacto: "David Chen",
      pais: "China",
      descripcion: "Fabricante de sistemas de monitoreo electrónico y sensores IoT para detección de plagas.",
      certificaciones: "ISO 9001, CE, FCC Certified"
    }
  ]);
}
