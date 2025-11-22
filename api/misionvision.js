export default function handler(req, res) {
  res.status(200).json([
    {
      tipo: "mision",
      titulo: "Misión",
      descripcion: "Brindar soluciones integrales y seguras en control de plagas, desinfección y limpieza especializada, protegiendo la salud de las personas y la continuidad de las operaciones de nuestros clientes."
    },
    {
      tipo: "vision",
      titulo: "Visión",
      descripcion: "Ser la empresa referente en control de plagas y saneamiento ambiental en el Perú, reconocida por su calidad, innovación y cumplimiento de normas internacionales."
    },
    {
      tipo: "principios",
      titulo: "Principios",
      descripcion: "Actuamos con honradez, responsabilidad, puntualidad y respeto por las personas y el entorno en cada servicio que realizamos.",
      lista: [
        "Honradez",
        "Responsabilidad",
        "Puntualidad",
        "Compromiso con la calidad",
        "Respeto al entorno",
        "Trabajo en equipo"
      ]
    }
  ]);
}
