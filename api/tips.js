export default function handler(req, res) {
  res.status(200).json([
    {
      icono: "ic_tip_prevent",
      titulo: "Prevención de plagas",
      cuerpo: "Mantén tu hogar limpio y sella grietas para evitar la entrada de insectos y roedores."
    },
    {
      icono: "ic_tip_signs",
      titulo: "Señales de infestación",
      cuerpo: "Revisa regularmente por excrementos, cables roídos y olores inusuales que indiquen presencia de plagas."
    },
    {
      icono: "ic_tip_when",
      titulo: "Cuándo actuar",
      cuerpo: "No esperes a que el problema crezca. Ante la primera señal, contacta a profesionales certificados."
    },
    {
      icono: "ic_tip_maintenance",
      titulo: "Mantenimiento regular",
      cuerpo: "Programa fumigaciones preventivas cada 3-6 meses para mantener tu espacio libre de plagas."
    }
  ]);
}
