const vinos = [
  {
    id: 1,
    nombre: "Château Margaux",
    tipoDeUva: "Cabernet Sauvignon",
    añoDeCosecha: 2018,
    descripcion:
      "Un vino elegante y refinado con notas de frutos negros y un toque de roble.",
    imagen:
      "https://static.millesima.com/s3/contrib/common/landing-pages/2020/chateau-margaux/images/1001_2012NM_c-p-800.png",
    offer: false,
    popular: true,
    precio: 450,
    mililitros: 1320,
    food: "Carnes rojas, cordero y quesos maduros.",
    calificacion: 5,
    frase: "La elegancia es la simplicidad perfeccionada.",
    pais: "Francia",
  },
  {
    id: 2,
    nombre: "Barolo La Morra",
    tipoDeUva: "Nebbiolo",
    añoDeCosecha: 2019,
    descripcion:
      "Complejo y robusto, con aromas de rosas y un final persistente.",
    imagen:
      "https://www.vinello.jp/media/image/26/12/b8/barolo-la-morra-riserva-elio-filippino.png",
    offer: true,
    precio: 350,
    mililitros: 980,
    food: "Guisos de carne, trufas y platos italianos con salsas ricas.",
    calificacion: 4,
    frase: "La complejidad revela la verdadera esencia.",
    pais: "Italia",
  },
  {
    id: 3,
    nombre: "Almaviva",
    tipoDeUva: "Carmenère",
    añoDeCosecha: 2020,
    descripcion:
      "Un vino chileno con cuerpo, destacando sabores de frutos rojos y especias.",
    imagen:
      "https://static.millesima.com/s3/attachements/h1000px/G303_2020_c.png",
    offer: true,
    precio: 320,
    mililitros: 720,
    food: "Carnes asadas, empanadas y platos especiados.",
    calificacion: 4,
    frase: "La tradición y el carácter son un arte que nunca muere.",
    pais: "Chile",
  },
  {
    id: 4,
    nombre: "Penfolds Grange",
    tipoDeUva: "Shiraz",
    añoDeCosecha: 2017,
    descripcion:
      "Un clásico australiano con gran intensidad y carácter, perfecto para ocasiones especiales.",
    imagen:
      "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hc5/h67/8818724667422.png",
    offer: false,
    popular: true,
    precio: 650,
    mililitros: 1450,
    food: "Costillas de cerdo, estofados y carne de caza.",
    calificacion: 5,
    frase: "La grandeza está en la intensidad.",
    pais: "Australia",
  },
  {
    id: 5,
    nombre: "Vega Sicilia Único",
    tipoDeUva: "Tempranillo",
    añoDeCosecha: 2015,
    descripcion:
      "Vino icónico de España con notas de cuero, tabaco y frutas maduras.",
    imagen:
      "https://static.millesima.com/s3/attachements/h1000px/J3513_NM_c.png",
    offer: false,
    popular: true,
    precio: 580,
    mililitros: 600,
    food: "Cordero, jamón ibérico y platos tradicionales españoles.",
    calificacion: 5,
    frase: "Cada sorbo es una obra maestra.",
    pais: "España",
  },
  {
    id: 6,
    nombre: "Cloudy Bay Sauvignon Blanc",
    tipoDeUva: "Sauvignon Blanc",
    añoDeCosecha: 2021,
    descripcion: "Fresco y vibrante, con aromas de cítricos y toques herbales.",
    imagen:
      "https://static.millesima.com/s3/attachements/h1000px/G500_2022NM_c.png",
    offer: true,
    precio: 40,
    mililitros: 1030,
    food: "Mariscos, ensaladas y platos ligeros.",
    calificacion: 4,
    frase: "La frescura que despierta los sentidos.",
    pais: "Nueva Zelanda",
  },
  {
    id: 7,
    nombre: "Opus One",
    tipoDeUva: "Cabernet Sauvignon",
    añoDeCosecha: 2019,
    descripcion:
      "Una mezcla sofisticada con notas de vainilla, cereza y un toque mineral.",
    imagen: "https://thekeywine.vn/wp-content/uploads/2022/12/opus-one.png",
    offer: false,
    popular: true,
    precio: 400,
    mililitros: 880,
    food: "Filete de res, cordero y quesos duros.",
    calificacion: 5,
    frase: "La sofisticación en cada detalle.",
    pais: "Estados Unidos",
  },
  {
    id: 8,
    nombre: "Malbec Reserva Norton",
    tipoDeUva: "Malbec",
    añoDeCosecha: 2020,
    descripcion:
      "Un argentino con cuerpo medio, equilibrado y toques de ciruela.",
    imagen:
      "https://manila-premiere-wines.com/wp-content/uploads/2015/06/Norton-Malbec-Reserva-2018-.png",
    offer: true,
    precio: 30,
    mililitros: 700,
    food: "Asado, empanadas y quesos suaves.",
    calificacion: 4,
    frase: "El alma de Argentina en cada copa.",
    pais: "Argentina",
  },
  {
    id: 9,
    nombre: "Chablis Grand Cru",
    tipoDeUva: "Chardonnay",
    añoDeCosecha: 2020,
    descripcion: "Mineral y fresco, con aromas de manzana verde y miel.",
    imagen: "https://www.global-wines.cz/data/images/w900h1320/9/419.png",
    offer: false,
    popular: true,
    precio: 200,
    mililitros: 920,
    food: "Ostras, pescados y quesos cremosos.",
    calificacion: 4,
    frase: "La frescura del terruño en cada sorbo.",
    pais: "Francia",
  },
  {
    id: 10,
    nombre: "Amarone della Valpolicella",
    tipoDeUva: "Corvina",
    añoDeCosecha: 2018,
    descripcion:
      "Intenso y con dulzura sutil, ideal para platos ricos y postres.",
    imagen:
      "https://www.eccellenza.com.au/wp-content/uploads/2022/06/Amarone.png",
    offer: false,
    popular: true,
    precio: 300,
    mililitros: 1020,
    food: "Risotto, carnes al horno y quesos azules.",
    calificacion: 5,
    frase: "Cada sabor cuenta una historia.",
    pais: "Italia",
  },
  {
    id: 11,
    nombre: "Rioja Gran Reserva",
    tipoDeUva: "Tempranillo",
    añoDeCosecha: 2016,
    descripcion: "Clásico español con sabores de frutas maduras y especias.",
    imagen:
      "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h63/h5a/14160544497694.png",
    offer: true,
    precio: 50,
    mililitros: 650,
    food: "Platos de caza, embutidos y guisos.",
    calificacion: 4,
    frase: "La tradición en una copa.",
    pais: "España",
  },
  {
    id: 12,
    nombre: "Pouilly-Fumé",
    tipoDeUva: "Sauvignon Blanc",
    añoDeCosecha: 2021,
    descripcion:
      "Vibrante y elegante, con notas de humo y hierba recién cortada.",
    imagen:
      "https://www.maisoncastel.wine/images/dynamics/wines/aoc-selection/aoc-pouilly-fume.png",
    offer: false,
    popular: true,
    precio: 60,
    mililitros: 750,
    food: "Pescado blanco, sushi y quesos de cabra.",
    calificacion: 4,
    frase: "Elegancia en cada nota aromática.",
    pais: "Francia",
  },
  {
    id: 13,
    nombre: "Zinfandel Ridge",
    tipoDeUva: "Zinfandel",
    añoDeCosecha: 2019,
    descripcion:
      "Potente y especiado, ideal para acompañar carnes a la parrilla.",
    imagen:
      "https://www.ridgewine.com/wp-content/uploads/2022/02/20ZPR-web.png",
    offer: true,
    precio: 55,
    mililitros: 960,
    food: "Costillas BBQ, hamburguesas y embutidos.",
    calificacion: 4,
    frase: "La fuerza y la autenticidad de California.",
    pais: "Estados Unidos",
  },
  {
    id: 14,
    nombre: "Prosecco Valdobbiadene",
    tipoDeUva: "Glera",
    añoDeCosecha: 2022,
    descripcion:
      "Espumoso italiano fresco y afrutado, perfecto para celebraciones.",
    imagen:
      "https://www.bataillard.ch/media/image/0c/a7/e5/10405fb7f13dd6c49.png",
    offer: false,
    popular: true,
    precio: 25,
    mililitros: 1150,
    food: "Aperitivos, frutas y postres ligeros.",
    calificacion: 3,
    frase: "El arte de celebrar cada instante.",
    pais: "Italia",
  },
  {
    id: 15,
    nombre: "Jean Geiler",
    tipoDeUva: "Gewürztraminer",
    añoDeCosecha: 2021,
    descripcion: "Aromático y dulce, con notas de lichi y pétalos de rosa.",
    imagen:
      "https://images.vivino.com/thumbs/06NF4rCsSd--rfFcwFsfzg_pb_x600.png",
    offer: true,
    precio: 45,
    mililitros: 850,
    food: "Comida asiática picante, quesos fuertes y postres.",
    calificacion: 4,
    frase: "El encanto dulce de Alsacia.",
    pais: "Francia",
  },
];

export default vinos;
