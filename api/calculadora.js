export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    precioBase: {
      vivienda: 150,
      departamento: 120,
      oficina: 200,
      restaurante: 350,
      almacen: 400,
      fabrica: 600
    },
    multiplicadorMetros: {
      "0-50": 1.0,
      "51-100": 1.3,
      "101-200": 1.6,
      "201-500": 2.0,
      "501+": 2.5
    },
    factorPlaga: {
      cucarachas: 1.0,
      hormigas: 0.8,
      roedores: 1.4,
      termitas: 1.8,
      chinches: 1.6,
      mosquitos: 0.9,
      pulgas: 1.1,
      aranas: 0.9,
      otras: 1.0
    },
    descuentoFrecuencia: {
      unica: 0,
      mensual: 15,
      trimestral: 20,
      semestral: 25,
      anual: 30
    },
    serviciosAdicionales: {
      desinfeccion: 80,
      certificado: 50,
      garantia_extendida: 120,
      mantenimiento_preventivo: 200
    }
  });
}
