import { v4 as uuidv4 } from 'uuid';

const recipes = [
  {
    id: 'f8c83a21-7599-48f6-bf25-ca0e6e4945a7',
    name: 'Ensalada de hierbas',
    instructions: [
      'Lave, seque y deshoje la lechuga y las hierbas.',
      'Píquelas.',
      'En un ensaladera, mézclelo todo con la vinagreta',
    ],
    ingredients: [
      {
        name: 'Lechuga romana',
        quantity: ' 1',
      },
      {
        name: 'Cilantro',
        quantity: ' 1 ramito',
      },
      {
        name: 'Menta',
        quantity: ' 1/2 ramito',
      },
      {
        name: 'Estragón',
        quantity: ' 1 ramito',
      },
      {
        name: 'Albahaca',
        quantity: ' 1 ramito',
      },
      {
        name: 'Vinagreta',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/1.webp',
    numberOnBook: 1,
  },
  {
    id: '7c0eab74-2157-4597-b6fa-b3819ae65819',
    name: 'Kale y arándanos rojos',
    instructions: [
      'Rompa las hojas de col kale y deseche los nervios muy duros. Amáselas bien con la salsa de sola durante 1 minuto.',
      'Trocee las almendras con un cuchillo.',
      'Mezcle la col kale con las almendras y los arándanos. Añada la cúrcuma a la salsa de tahín.',
      'Rocié la ensalada con la salsa y remuévela antes de servirla.',
    ],
    ingredients: [
      {
        name: 'Col kale',
        quantity: ' 200g',
      },
      {
        name: 'Arándanos rojos secos',
        quantity: ' 40g',
      },
      {
        name: 'Almendras',
        quantity: ' 20g',
      },
      {
        name: 'Salsa de soja',
        quantity: ' 2 cucharadas',
      },
      {
        name: 'Cúrcuma molida',
        quantity: ' 1 cucharadita',
      },
      {
        name: 'Salsa de Tahín',
        quantity: '',
      },
    ],
    time: 10,
    cooked: 'sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/2.webp',
    numberOnBook: 2,
  },
  {
    id: '176c916c-8675-4d5d-9b0e-4ac9544e0323',
    name: 'Tabule  de coliflor ',
    instructions: [
      'Ralle la coliflor y la manzana. Deshoje las hierbas y píquelas. Pique el limón confitado.',
      'Mezcle en una ensaladera con las hierbas y el limón confitado.',
      'Rocié la ensalada con la salsa y sírvala.',
    ],
    ingredients: [
      {
        name: 'Coliflor',
        quantity: ' 500g',
      },
      {
        name: 'Menta',
        quantity: ' 3 ramitas',
      },
      {
        name: 'Perejil',
        quantity: ' 3 ramitas',
      },
      {
        name: 'Limón confitado',
        quantity: ' 1',
      },
      {
        name: 'Manzana Gala o Elstar',
        quantity: ' 1',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin coccion',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/3.webp',
    numberOnBook: 3,
  },
  {
    id: 'e032378a-193e-489d-9492-fcf214b1b8a0',
    name: 'Apio a la tailandesa',
    instructions: [
      'Pele las ramas de apio y córtelas en rodajas bien finas. Limpie el pimiento, retire las semillas y píquelo con un cuchillo. Deshoje las hierbas y píquelas. Pique los cacahuetes.',
      'Justo antes de servir la ensalda, mezcle todos los ingredientes con la salsa tahín',
    ],
    ingredients: [
      {
        name: 'Apio',
        quantity: ' 200g',
      },
      {
        name: 'Cilantro',
        quantity: ' 1/2 ramito',
      },
      {
        name: 'Menta',
        quantity: ' 6 ramitas',
      },
      {
        name: 'Cacahuetes salados',
        quantity: ' 40g',
      },
      {
        name: 'Pimiento rojo',
        quantity: ' 80g',
      },
      {
        name: 'Salsa de tahín',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/4.webp',
    numberOnBook: 4,
  },
  {
    id: '62247efb-f69e-4f72-aa86-47bc4abe7f36',
    name: 'Zanahoria rallada',
    instructions: [
      'Eche la quinoa en un sartén bien caliente y tuéstela 10 minutos agitando la sartén.',
      'Trocee las avellanas. Ralle las zanahorias. Deshoje el perifollo y píquelo.',
      'Mezcle la zanahoria con el perifollo, las avellanas y la salsa de limón.',
      'Sirva la ensalada con la quinoa tostada esparcida por encima.',
    ],
    ingredients: [
      {
        name: 'Zanahorias',
        quantity: ' 500g',
      },
      {
        name: 'Quinoa',
        quantity: '20g',
      },
      {
        name: 'Perifollo',
        quantity: '8 ramitas',
      },
      {
        name: 'Avellanas',
        quantity: '30g',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: '10 minutos de cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/5.webp',
    numberOnBook: 5,
  },
  {
    id: 'abb4bc4b-a0a1-4498-a14d-7fb34a97f09f',
    name: 'Rabano y garbanzos ',
    instructions: [
      'Aclare los garbanzos, escúrralos y cháfelos un poco con un tenedor con el aceite de olive.',
      'Ralle el rábano. Trocee las avellanas.',
      'Justo antes de servir la ensalada, mezcle el rábano, los garbanzos y las avellanas con la sal ahumada y 2 pizcas de pimienta.',
    ],
    ingredients: [
      {
        name: 'Rábano negro',
        quantity: ' 500g',
      },
      {
        name: 'Avellanas',
        quantity: ' 50g',
      },
      {
        name: 'Sal ahumada',
        quantity: ' 2 pizcas',
      },
      {
        name: 'Garbanzos cocidos',
        quantity: ' 400g',
      },
      {
        name: 'Aceite de oliva',
        quantity: ' 8 cucharadas',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/6.webp',
    numberOnBook: 6,
  },
  {
    id: '11ec5f01-e62e-4014-b5cb-82f0dfa9de48',
    name: 'Champiñones y limón ',
    instructions: [
      'Corte los champiñones en laminas. Pele e jengibre y el ajo, y píquelo. Pique el perejil y el cebollino.',
      'Mezcle los champiñones con el jengibre, las hierbas y el ajo.',
      'Antes de servirla, rocié la ensalada con la salsa.',
    ],
    ingredients: [
      {
        name: 'Champiñones',
        quantity: ' 500g',
      },
      {
        name: 'Jengibre',
        quantity: ' 20g',
      },
      {
        name: 'Ajo',
        quantity: ' 1 diente',
      },
      {
        name: 'Perejil',
        quantity: ' 6 ramitas',
      },
      {
        name: 'Cebollino',
        quantity: ' 12 ramitas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/7.webp',
    numberOnBook: 7,
  },
  {
    id: '4e69ca0a-f44e-457e-a063-e759e8daa5b1',
    name: 'Brócoli crujiente',
    instructions: [
      'Precaliente el horno a 200C. Corte el tofu en dados. Separe el brócoli en ramitos pequeños de tamaño regular.',
      'Extienda el brócoli y el tofu en la bandeja del horno forrada con papel vegetal, espolvoree el curri por encima, rocíelo con 2 cucharadas de salsa de limón y aselo en el horno 30 minutos. Deje que se entibie.',
      'Mezcle la salsa de soja con el resto de la salsa de limón y las pasas.',
      'Viértalo sobre el brócoli y el tofu templados, remueva y sírvalo.',
    ],
    ingredients: [
      {
        name: 'Brócoli',
        quantity: ' 800g',
      },
      {
        name: 'Tofu ahumado',
        quantity: ' 200g',
      },
      {
        name: 'Pasa',
        quantity: ' 2 cucharadas',
      },
      {
        name: 'Curri',
        quantity: ' 1 cucharada',
      },
      {
        name: 'Salsa de soja',
        quantity: ' 2 cucharadas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: '30 minutos de cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/8.webp',
    numberOnBook: 8,
  },
  {
    id: 'b775afcd-309f-4765-9249-73b90fbbdecb',
    name: 'Remolacha y zanahoria',
    instructions: [
      'Pele las remolachas y rállelas. Ralle también la manzana y las zanahorias. Mézclelo todo con las semillas.',
      'Rocíe la ensalada con la salsa de limón y remueva.',
      'Sirva la ensalada con la levadura esparcida por encima.',
    ],
    ingredients: [
      {
        name: 'Remolachas crudas',
        quantity: ' 150g',
      },
      {
        name: 'Manzana',
        quantity: ' 1',
      },
      {
        name: 'Zanahorias',
        quantity: ' 250g',
      },
      {
        name: 'Levadura malteada',
        quantity: ' 4 cucharadas',
      },
      {
        name: 'Mezcla de semillas',
        quantity: ' 1 cucharada',
      },
      {
        name: 'Salsa de limón',
        quantity: '4 cucharadas',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/9.webp',
    numberOnBook: 9,
  },
  {
    id: 'bd7d112e-6f64-4888-8085-8b9199db7a37',
    name: 'Mango y aguacate ',
    instructions: [
      'Caliente un sartén a fuego fuerte y tueste las almendras 4 minutos, removiendo.',
      'Pele el mango y el aguacate, córtelos en láminas y dispóngalas en una fuente.',
      'Pique la menta y el cilantro. Esparza las hierbas por encima de las láminas de mango y aguacate, y añada las almendras tostadas.',
      'Rocíe la ensalada con la salsa antes de servirla.',
    ],
    ingredients: [
      {
        name: 'Mango',
        quantity: ' 1 grande',
      },
      {
        name: 'Aguacate',
        quantity: ' 1 x 300g',
      },
      {
        name: 'Menta',
        quantity: ' 12 hojas',
      },
      {
        name: 'Almendras fileteadas',
        quantity: ' 2 cucharadas',
      },
      {
        name: 'Cilantro',
        quantity: ' 12 ramitas',
      },
      {
        name: 'Salsa de limón',
        quantity: ' 6 cucharadas',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/10.webp',
    numberOnBook: 10,
  },
  {
    id: '682ff353-0db9-4754-be35-077e0c864f21',
    name: 'Ensalada roja',
    instructions: [
      'Desgrane la granada.',
      'Corte la manzana en cunas finas; la cebolla, en rodajas finas, y el pimiento, en tiritas.',
      'Mezcle el pimiento, la manzana, la cebolla y la granada con las hojas de albahaca.',
      'Sirva la ensalada con la vinagreta.',
    ],
    ingredients: [
      {
        name: 'Pimiento rojo',
        quantity: '1',
      },
      {
        name: 'Granada',
        quantity: '1/2',
      },
      {
        name: 'Manzana roja',
        quantity: '1',
      },
      {
        name: 'Cebolla roja',
        quantity: '1/2',
      },
      {
        name: 'Albahaca',
        quantity: '8 hojas',
      },
      {
        name: 'Vinagreta',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin coccion',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/11.webp',
    numberOnBook: 11,
  },
  {
    id: '7f740393-932f-4363-9c56-39eea034a8c6',
    name: 'Kiwi y pepino ',
    instructions: [
      'Pele los kiwis. Corte los kiwis y el pepino en dados. Deshoje la menta y la albahaca, y píquelas.',
      'Mezcle las hierbas con el pepino y el kiwi.',
      'Rocíe la ensalada con la salsa antes de servirla.',
    ],
    ingredients: [
      {
        name: 'Kiwis',
        quantity: '4',
      },
      {
        name: 'Pepino',
        quantity: '1',
      },
      {
        name: 'Menta',
        quantity: '4 ramitas',
      },
      {
        name: 'Albahaca',
        quantity: '6 ramitas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/12.webp',
    numberOnBook: 12,
  },
  {
    id: 'a6a4b1a5-d9a2-4ea6-929c-7e9f0d30caf6',
    name: 'Lentejas, remolacha y aguacate ',
    instructions: [
      'Ponga las lentejas en una olla con agua fría y cuézalas 15 minutos contando desde que arranquen a hervir. Escúrralas, aclárelas y deje que se enfríen.',
      'Corte las remolachas en cuñas. Corte la cebolleta en rodajas finas. Pele el aguacate y córtelo en láminas.',
      'Mezcle las lentejas con la remolacha, el aguacate, la cebolleta, las nueces y la vinagreta. Sirva la ensalada fría.',
    ],
    ingredients: [
      {
        name: 'Lentejas beluga o verdes',
        quantity: '250g',
      },
      {
        name: 'Remolachas cocidas',
        quantity: '150g',
      },
      {
        name: 'Aguacate',
        quantity: '1',
      },
      {
        name: 'Cebolleta',
        quantity: '1',
      },
      {
        name: 'Nueces',
        quantity: '12 mitades',
      },
      {
        name: 'Vinagreta',
        quantity: '',
      },
    ],
    time: 15,
    cooked: '20 minutos de cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/13.webp',
    numberOnBook: 13,
  },
  {
    id: '78b2d4f8-0b03-4bce-979b-f18576863236',
    name: 'Caqui y quinoa',
    instructions: [
      'Ponga la quinoa en abundante agua fría, llévela a ebullición y cuézala 10 minutos. Escúrrala y deje que se enfríe.',
      'Sin pelarlos, corte los caquis en rodajas. Corte la cebolleta en rodajitas finas y pique el cilantro.',
      'Mezcle las rodajas de caqui con la cebolleta, la quinoa y el cilantro.',
      'Rocíe la ensalada con la salsa antes de servirla.',
    ],
    ingredients: [
      {
        name: 'Caquis',
        quantity: '2',
      },
      {
        name: 'Cilantro',
        quantity: '6 ramitas',
      },
      {
        name: 'Cebolleta',
        quantity: '1',
      },
      {
        name: 'Quinoa',
        quantity: '100g',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 10,
    cooked: '15 minutos de cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/14.webp',
    numberOnBook: 14,
  },
  {
    id: '3535ed80-810e-4ebb-9129-de186c2c2e9c',
    name: 'Ensalada de linguine y radicchio ',
    instructions: [
      'Precaliente el horno a 180 °C. Corte las berenjenas en rodajas de 1 cm y el radicchio, en tiras de 2 cm.',
      'Extiéndalos en la bandeja del horno y rocíelos con la mitad del aceite de oliva y el vinagre. Áselos 10 minutos, saque el radicchio y siga asando la berenjena 20 minutos.',
      'Cueza los linguine al dente y aclárelos. Dore los piñones en una sartén.',
      'Mezcle la pasta con la berenjena, el radicchio y los piñones. Rocíelo con el resto del aceite y salpimiente.',
    ],
    ingredients: [
      {
        name: 'Linguine',
        quantity: '250g',
      },
      {
        name: 'Berenjenas',
        quantity: '2',
      },
      {
        name: 'Radicchio',
        quantity: '1',
      },
      {
        name: 'Piñones',
        quantity: '50g',
      },
      {
        name: 'Aceite de oliva',
        quantity: '4 cucharadas',
      },
      {
        name: 'Vinagre balsámico',
        quantity: '2 cucharadas',
      },
    ],
    time: 15,
    cooked: '30 minutos de cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/15.webp',
    numberOnBook: 15,
  },
  {
    id: '97a78df3-1aa9-4c39-af99-7769623ce598',
    name: 'Tabulé libanés',
    instructions: [
      'Ponga el bulgur en una ensaladera, rocíelo con la salsa y remueva.',
      'Parta los tomates cherry en cuartos, pique el perejil y la menta, y corte las cebolletas en rodajas finas.',
      'Échelo todo en la ensaladera, salpimiente y remueva.',
      'Deje reposar el tabulé en el frigorífico un mínimo de 1 hora.',
    ],
    ingredients: [
      {
        name: 'Bulgur',
        quantity: '100g',
      },
      {
        name: 'Perejil',
        quantity: '1 ramito',
      },
      {
        name: 'Menta',
        quantity: '1 ramito',
      },
      {
        name: 'Cebolletas',
        quantity: '2',
      },
      {
        name: 'Tomates cherry',
        quantity: '250g',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 20,
    cooked: '1 hora de reposo sin cocción',
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/16.webp',
    numberOnBook: 16,
  },
  {
    id: '07917d1a-0818-46dd-8295-d0d781d841f8',
    name: 'Col al estilo tailandés ',
    instructions: [
      'Corte la col china en rodajas bien finas. Deshoje la albahaca tailandesa y el cilantro.',
      'Mezcle la col con la salsa de soja y la de tahín.',
      'Mézclela a continuación con las hojas de albahaca y de cilantro. Esparza el sésamo por encima.',
    ],
    ingredients: [
      {
        name: 'Col china',
        quantity: '1',
      },
      {
        name: 'Cilantro',
        quantity: '1 ramito',
      },
      {
        name: 'Albahaca tailandesa',
        quantity: '4 ramitas',
      },
      {
        name: 'Semillas de sésamo',
        quantity: '1 cucharada',
      },
      {
        name: 'Salsa de soja',
        quantity: '2 cucharadas',
      },
      {
        name: 'Salsa de tahín',
        quantity: '',
      },
    ],
    time: 10,
    cooked: 'sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/17.webp',
    numberOnBook: 17,
  },
  {
    id: 'f43c9295-f3bc-4f39-ad07-d03502306ac0',
    name: 'Arroz negro y espárragos',
    instructions: [
      'Remoje el arroz 2 horas en dos veces su volumen de agua. Cuézalo 35 minutos a fuego lento, tapado. Apague el fuego y déjelo reposar 10 minutos.',
      'Deseche la base de los espárragos y córtelos por la mitad a lo largo. Pique las almendras.',
      'Cueza los espárragos y los guisantes 4 minutos en agua salada hirviendo. Escúrralos y sumérjalos en agua helada. Mézclelos con el arroz, las almendras y el estragón deshojado.',
      'Sirva la ensalada fría, rociada con la vinagreta.',
    ],
    ingredients: [
      {
        name: 'Arroz negro (Nerone)',
        quantity: '250g',
      },
      {
        name: 'Guisantes congelados',
        quantity: '300g',
      },
      {
        name: 'Espárragos',
        quantity: '400g',
      },
      {
        name: 'Estragón',
        quantity: '1/2 ramito',
      },
      {
        name: 'Almendras',
        quantity: '50g',
      },
      {
        name: 'Vinagreta',
        quantity: '',
      },
    ],
    time: 30,
    cooked: "2h reposo y 15' cocción",
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/18.webp',
    numberOnBook: 18,
  },
  {
    id: '878b84fc-0299-4624-a334-ffc412bf2b0d',
    name: 'Pimiento marinado',
    instructions: [
      'Precaliente el horno a 200 °C. Ase los pimientos 45 minutos. Mientras estén calientes, introdúzcalos en una bolsa de plástico hermética. Deje que se entibien.',
      'Pique el ajo y el jengibre. Corte la albahaca en tiritas. Pele los pimientos, despepítelos y córtelos en tiras.',
      'Mezcle el pimiento con el ajo, el jengibre, el aceite de oliva, la albahaca y 2 pizcas de sal y de pimienta molida. Sírvalo templado o frío.',
    ],
    ingredients: [
      {
        name: 'Pimientos rojos',
        quantity: '4',
      },
      {
        name: 'Ajo',
        quantity: '1 diente',
      },
      {
        name: 'Jengibre',
        quantity: '10g',
      },
      {
        name: 'Aceite de oliva',
        quantity: '4 cucharadas',
      },
      {
        name: 'Albahaca',
        quantity: '8 hojas',
      },
    ],
    time: 30,
    cooked: '45 minutos de cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/19.webp',
    numberOnBook: 19,
  },
  {
    id: '8fc5efe0-59f7-471e-b883-2caf370091bb',
    name: 'Ensalada blanca',
    instructions: [
      'Pele el apionabo y rállelo bien fino. Corte el hinojo y el repollo en rodajas finas. Corte la endibia en tiras a lo largo.',
      'Rocíe las hortalizas con la salsa y remueva.',
      'Sirva la ensalada espolvoreada con la levadura.',
    ],
    ingredients: [
      {
        name: 'Endibia',
        quantity: '1',
      },
      {
        name: 'Repollo',
        quantity: '1/4',
      },
      {
        name: 'Apionabo',
        quantity: '1/4',
      },
      {
        name: 'Hinojo',
        quantity: '1',
      },
      {
        name: 'Levadura malteada',
        quantity: 'cucharadas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 15,
    cooked: 'sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/20.webp',
    numberOnBook: 20,
  },
  {
    id: '93980dfb-35d6-4d07-a981-32f20c1a8b94',
    name: 'Lentejas, calabacín y tofu',
    instructions: [
      'Eche las lentejas en agua hirviendo y cuézalas 15 minutos. Escúrralas y aclárelas bajo el chorro de agua fría.',
      'Corte el tofu en dados y dórelo 5 minutos en una sartén con 1 cucharada de aceite de sésamo. Ralle el calabacín y el jengibre.',
      'Mezcle el resto del aceite de sésamo con el jengibre, el curri y 2 pizcas de sal y de pimienta. Antes de servir la ensalada, rocíe las lentejas, el tofu y el calabacín con la salsa.',
    ],
    ingredients: [
      {
        name: 'Lentejas rojas',
        quantity: '250g',
      },
      {
        name: 'Calabacín',
        quantity: '1 grande',
      },
      {
        name: 'Tofu ahumado',
        quantity: '200g',
      },
      {
        name: 'Aceite de sesamo',
        quantity: '3 cucharadas',
      },
      {
        name: 'Jengibre',
        quantity: '30g',
      },
      {
        name: 'Curri en polvo',
        quantity: '1 cucharada',
      },
    ],
    time: 20,
    cooked: '15 minutos de cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/21.webp',
    numberOnBook: 21,
  },
  {
    id: '9029e98a-8ae6-4a6e-9609-5ed7026f6d88',
    name: 'Ensalada de mijo',
    instructions: [
      'Eche el mijo en 250 ml de agua hirviendo con sal: cuézalo 10 minutos contando desde que vuelva a arrancar el hervor y luego déjelo reposar 20 minutos, tapado.',
      'Mezcle el mijo con la miel, el ras-el-hanout y la salsa de limón. Salpimiente y deje que se enfríe a temperatura ambiente.',
      'Deshoje el cilantro y corte la cebolla en rodajas finas Mézclelos con el mijo. Sirva la ensalada fría.',
    ],
    ingredients: [
      {
        name: 'Mijo',
        quantity: '200g',
      },
      {
        name: 'Cebolla roja',
        quantity: '1',
      },
      {
        name: 'Cilantro',
        quantity: '1 ramito',
      },
      {
        name: 'Ras-el-hanout',
        quantity: '1 cucharada',
      },
      {
        name: 'Miel',
        quantity: '2 cucharadas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 10,
    cooked: "1h reposo y 10' cocción",
    people: 4,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/22.webp',
    numberOnBook: 22,
  },
  {
    id: '38649b35-9ddf-4e7b-8b8c-17993b085328',
    name: 'Colirrábano asiático',
    instructions: [
      'Pele los colirrábanos y córtelos en bastoncitos finos. Corte la menta en tiritas.',
      'Mezcle la salsa de limón con la nuoc-mam y el azúcar.',
      'Rocíe el colirrábano con el aderezo y déjelo marinar 10 minutos en el frigorífico.',
      'Sírvalo con la menta y el sésamo esparcidos por encima.',
    ],
    ingredients: [
      {
        name: 'Colirrábanos',
        quantity: '2',
      },
      {
        name: 'Menta',
        quantity: '4 ramitas',
      },
      {
        name: 'Semillas de sésamo',
        quantity: '1 cucharada',
      },
      {
        name: 'Azúcar moreno',
        quantity: '2 cucharaditas',
      },
      {
        name: 'Salsa nuoc-nam',
        quantity: '1 cucharadita',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 10,
    cooked: '10 minutos reposo sin cocción',
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/23.webp',
    numberOnBook: 23,
  },
  {
    id: 'fa663e90-217c-47fd-8c7b-690532af8134',
    name: 'Judías negras y aguacate',
    instructions: [
      'Ponga las judías en una olla con agua fría, llévelas a ebullición y, a los 2 minutos, interrumpa la cocción y déjelas reposar 1 hora.',
      'Escurra las judías, aclárelas y sumérjalas en una cazuela con tres veces su volumen de agua. Cuézalas 45 minutos, escúrralas y aclárelas.',
      'Pele el aguacate y córtelo en láminas. Corte el apio en rodajas finas. Pique el perejil.',
      'Mezcle las judías con el perejil, el apio y el aguacate. Rocíe la ensalada con la salsa y espolvoreé la guindilla por encima antes de servirla.',
    ],
    ingredients: [
      {
        name: 'Judías negras secas',
        quantity: '200g',
      },
      {
        name: 'Aguacate',
        quantity: '1',
      },
      {
        name: 'Apio',
        quantity: '2 ramas',
      },
      {
        name: 'Perejil',
        quantity: '6 ramitas',
      },
      {
        name: 'Guindilla molida',
        quantity: '2 pizcas',
      },
      {
        name: 'Salsa de limón',
        quantity: '',
      },
    ],
    time: 10,
    cooked: "1h reposo y 45' cocción",
    people: 6,
    category: 'veganas',
    favorite: false,
    image: 'src/db/images/24.webp',
    numberOnBook: 24,
  },
];

export default recipes;
