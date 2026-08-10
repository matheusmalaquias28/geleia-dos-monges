export type ProductCategory =
  | 'geleias'
  | 'geleias-diet'
  | 'geleias-agridoces'
  | 'mini-potes'
  | 'conservas'
  | 'doces'
  | 'institucional'
  | 'marca-propria';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  details: string;
  emoji: string;
  color: string;
  featured?: boolean;
  weight?: string;
  ingredients?: string;
  image?: string;
}

export const products: Product[] = [
  // GELEIAS
  {
    id: 'geleia-morango',
    name: 'Geleia de Morango Artesanal com Pedaços de Fruta',
    emoji: '🍓',
    color: '#8c2240',
    category: 'geleias',
    featured: true,
    weight: '300g',
    image: '/geleia-morango-produto.png',
    description:
      'Com generosos pedaços de morango, oferece um equilíbrio perfeito entre doçura e acidez.',
    details:
      'Nossa clássica geleia de morango é preparada com frutas cuidadosamente selecionadas, preservando o sabor natural e a textura caseira. Com generosos pedaços de morango, oferece um equilíbrio perfeito entre doçura e acidez, proporcionando uma experiência única a cada colherada. Ideal para acompanhar pães, torradas, queijos, iogurtes, sobremesas e diversas receitas.',
  },
  {
    id: 'geleia-amora',
    name: 'Geleia de Amora',
    emoji: '🫐',
    color: '#4a1468',
    category: 'geleias',
    weight: '300g',
    image: '/geleia-amora-produto.png',
    description: 'Intensamente saborosa, feita com amoras frescas da região.',
    details: 'As amoras colhidas na Serra da Mantiqueira têm um sabor único e intenso. Nossa geleia captura toda essa essência em cada frasco.',
  },
  {
    id: 'geleia-framboesa',
    name: 'Geleia de Framboesa',
    emoji: '🫐',
    color: '#c41e5a',
    category: 'geleias',
    weight: '300g',
    image: '/geleia-framboesa-produto.png',
    description: 'Delicada e perfumada, com o melhor da framboesa.',
    details: 'A framboesa é uma das frutas mais delicadas e especiais. Nossa geleia preserva seu aroma inconfundível e sabor levemente ácido.',
  },
  {
    id: 'geleia-goiaba',
    name: 'Geleia de Goiaba',
    emoji: '🟡',
    color: '#c8851a',
    category: 'geleias',
    weight: '300g',
    image: '/geleia-goiaba-produto.png',
    description: 'O sabor tropical que todo brasileiro ama, em versão artesanal.',
    details: 'Produzida com frutas selecionadas e todo o cuidado artesanal da Fruitland.',
  },
  {
    id: 'geleia-marmelo',
    name: 'Geleia de Marmelo',
    emoji: '🍊',
    color: '#d4641e',
    category: 'geleias',
    weight: '300g',
    description: 'Tradicional e sofisticada, ideal para acompanhar queijos.',
    details: 'O marmelo é fruta-símbolo de Campos do Jordão. Nossa geleia harmoniza perfeitamente com queijos e frios.',
  },
  {
    id: 'geleia-pessego',
    name: 'Geleia de Pêssego',
    emoji: '🍑',
    color: '#e8783c',
    category: 'geleias',
    weight: '300g',
    description: 'Suave e perfumada, com o aroma inconfundível do pêssego maduro.',
    details: 'Pêssegos selecionados transformados em uma geleia delicada, de cor dourada e sabor suave.',
  },
  {
    id: 'geleia-kiwi',
    name: 'Geleia de Kiwi',
    emoji: '🥝',
    color: '#2d5a1b',
    category: 'geleias',
    weight: '300g',
    description: 'Exótica e refrescante, com a acidez característica do kiwi.',
    details: 'Uma opção diferenciada para quem busca sabores inusitados. O kiwi traz acidez e frescor únicos.',
  },
  {
    id: 'geleia-hibisco',
    name: 'Geleia de Hibisco',
    emoji: '🌺',
    color: '#9b1b4a',
    category: 'geleias',
    weight: '300g',
    description: 'Floral e elegante, uma experiência sensorial única.',
    details: 'As flores de hibisco conferem sabor levemente ácido e cor vibrante a esta geleia especial.',
  },
  {
    id: 'geleia-manga',
    name: 'Geleia de Manga',
    emoji: '🥭',
    color: '#d4840a',
    category: 'geleias',
    weight: '300g',
    description: 'O sabor tropical mais amado do Brasil em pote artesanal.',
    details: 'Mangas selecionadas no ponto ideal de maturação, transformadas em uma geleia dourada e intensa.',
  },
  {
    id: 'geleia-laranja',
    name: 'Geleia de Laranja com Pedaços de Casca',
    emoji: '🍊',
    color: '#e87820',
    category: 'geleias',
    featured: true,
    weight: '300g',
    image: '/geleia-damasco-monges.png',
    description:
      'Sabor cítrico e refrescante com delicados pedaços de casca e um leve toque de amargor.',
    details:
      'Elaborada com laranjas de seleção, nossa geleia combina o sabor cítrico e refrescante da fruta com delicados pedaços de casca, que proporcionam uma textura marcante e um leve toque de amargor característico. Uma receita tradicional, equilibrada e cheia de personalidade.',
  },
  {
    id: 'geleia-figo',
    name: 'Geleia de Figo',
    emoji: '🍇',
    color: '#6b2d5a',
    category: 'geleias',
    weight: '300g',
    description: 'Sofisticada e encorpada, com notas rústicas e adoçadas.',
    details: 'O figo é uma das frutas mais nobres. Nossa geleia é perfeita para tabuas de frios e queijos.',
  },
  // GELEIAS DIET
  {
    id: 'diet-morango',
    name: 'Geleia Diet de Morango',
    emoji: '🍓',
    color: '#8c2240',
    category: 'geleias-diet',
    weight: '300g',
    description: 'Todo o sabor da geleia clássica, sem adição de açúcares.',
    details: 'Desenvolvida para quem busca alimentação mais saudável sem abrir mão do sabor. Adoçada naturalmente.',
  },
  {
    id: 'diet-amora',
    name: 'Geleia Diet de Amora',
    emoji: '🫐',
    color: '#4a1468',
    category: 'geleias-diet',
    weight: '300g',
    description: 'Sabor intenso de amora sem adição de açúcares.',
    details: 'Para diabéticos e quem controla ingestão de açúcar. Mantém todo o sabor e benefícios da amora.',
  },
  {
    id: 'diet-framboesa',
    name: 'Geleia Diet de Framboesa',
    emoji: '🫐',
    color: '#c41e5a',
    category: 'geleias-diet',
    weight: '300g',
    description: 'Framboesa delicada e perfumada, versão sem açúcar.',
    details: 'A delicadeza da framboesa em versão saudável, sem açúcar convencional.',
  },
  // GELEIAS AGRIDOCES
  {
    id: 'agridoces-pimenta',
    name: 'Geleia Agridoce de Pimenta',
    emoji: '🌶️',
    color: '#c41e1e',
    category: 'geleias-agridoces',
    weight: '300g',
    description: 'Doçura e picância em equilíbrio, ideal para carnes e queijos.',
    details:
      'Uma geleia agridoce com personalidade, perfeita para acompanhar tábuas de frios, carnes grelhadas e queijos maturados.',
  },
  {
    id: 'agridoces-cebola',
    name: 'Geleia Agridoce de Cebola',
    emoji: '🧅',
    color: '#8c5a2a',
    category: 'geleias-agridoces',
    weight: '300g',
    description: 'Sabor profundo e caramelizado, com leve acidez.',
    details:
      'Cebolas selecionadas transformadas em uma geleia agridoce sofisticada, excelente com queijos e carnes.',
  },
  // MINI-POTES
  {
    id: 'mini-morango',
    name: 'Mini-Pote Geleia de Morango',
    emoji: '🍓',
    color: '#8c2240',
    category: 'mini-potes',
    weight: '40g',
    description: 'O clássico sabor de morango em formato prático e individual.',
    details:
      'Ideal para hotelaria, café da manhã, kits e degustação. Mesma qualidade artesanal em porção individual.',
  },
  {
    id: 'mini-laranja',
    name: 'Mini-Pote Geleia de Laranja',
    emoji: '🍊',
    color: '#e87820',
    category: 'mini-potes',
    weight: '40g',
    description: 'Geleia de laranja em mini-pote, prática e versátil.',
    details:
      'Formato individual para serviço, hospitalidade e presentes. Sabor cítrico em porção compacta.',
  },
  // DOCES
  {
    id: 'fondant-leite',
    name: 'Fondant de Leite',
    emoji: '🍮',
    color: '#c8851a',
    category: 'doces',
    featured: true,
    weight: '400g',
    description:
      'Cremoso e delicado, com textura macia e sabor suave que derrete na boca.',
    details:
      'Cremoso, delicado e irresistível, o Fondant de Leite é preparado com ingredientes selecionados para oferecer uma textura macia e um sabor suave que derrete na boca. Versátil e sofisticado, é perfeito para rechear e decorar bolos, tortas, doces, cupcakes e sobremesas, além de poder ser apreciado puro por quem busca um toque especial de doçura.',
  },
  {
    id: 'doce-abobora',
    name: 'Doce de Abóbora com Coco',
    emoji: '🎃',
    color: '#d4641e',
    category: 'doces',
    weight: '400g',
    description: 'Tradicional doce brasileiro em versão artesanal especial.',
    details: 'Abóbora com coco ralado, cozida lentamente. Um clássico da culinária brasileira.',
  },
  {
    id: 'doce-banana',
    name: 'Doce de Banana da Terra',
    emoji: '🍌',
    color: '#d4a40a',
    category: 'doces',
    weight: '400g',
    description: 'Banana da terra caramelizada com canela e cravo.',
    details: 'Banana da terra madura cozida com açúcar, canela e cravo. Um sabor que remete à tradição mineira.',
  },
  // CONSERVAS
  {
    id: 'conserva-berinjela',
    name: 'Conserva de Berinjela Siciliana',
    emoji: '🍆',
    color: '#6b2d5a',
    category: 'conservas',
    featured: true,
    weight: '300g',
    description:
      'Textura macia e equilíbrio de aromas e especiarias, inspirada na tradição mediterrânea.',
    details:
      'Preparada com berinjelas cuidadosamente selecionadas e temperos que realçam seu sabor, nossa Berinjela Siciliana combina textura macia e um equilíbrio perfeito de aromas e especiarias. Uma receita inspirada na tradição mediterrânea, ideal para servir como antepasto, acompanhar pães, torradas, saladas, massas, carnes ou compor tábuas de frios e queijos.',
  },
  {
    id: 'conserva-pimenta',
    name: 'Pimenta em Conserva',
    emoji: '🌶️',
    color: '#c41e1e',
    category: 'conservas',
    weight: '250g',
    description: 'Pimentas selecionadas em azeite com ervas aromáticas.',
    details: 'Blend de pimentas coloridas conservadas em azeite com alecrim, tomilho e pimenta-preta.',
  },
  {
    id: 'conserva-picles',
    name: 'Picles de Legumes',
    emoji: '🥒',
    color: '#2d5a1b',
    category: 'conservas',
    weight: '300g',
    description: 'Mix de legumes crocantes em conserva de vinagre e especiarias.',
    details: 'Pepino, cenoura, pimentão e cebola em conserva temperada com especiarias.',
  },
  {
    id: 'conserva-tomate',
    name: 'Tomate Seco em Azeite',
    emoji: '🍅',
    color: '#c41e1e',
    category: 'conservas',
    weight: '250g',
    description: 'Tomates desidratados em azeite extra virgem.',
    details: 'Tomates desidratados lentamente e conservados em azeite extra virgem com alho e manjericão.',
  },
  // INSTITUCIONAL
  {
    id: 'institucional-foodservice',
    name: 'Linha Institucional / Food Service',
    emoji: '🏨',
    color: '#2D5A1B',
    category: 'institucional',
    description: 'Soluções em geleias e doces para hotéis, restaurantes e catering.',
    details:
      'Linha pensada para o segmento institucional, com volumes e formatos adequados a hotéis, restaurantes, padarias e food service, mantendo o padrão artesanal da marca Monges.',
  },
  // MARCA PROPRIA
  {
    id: 'marca-propria',
    name: 'Geleias Marca Própria',
    emoji: '🏪',
    color: '#2D5A1B',
    category: 'marca-propria',
    description: 'Produzimos geleias com a marca dos principais hipermercados.',
    details: 'A Fruitland produz geleias e doces com marca própria dos principais supermercados brasileiros, com a mesma qualidade artesanal.',
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  geleias: 'Geleias',
  'geleias-diet': 'Geleias Diet',
  'geleias-agridoces': 'Geleias Agridoces',
  'mini-potes': 'Mini-Potes',
  conservas: 'Conservas',
  doces: 'Doces',
  institucional: 'Institucional',
  'marca-propria': 'Marca Própria',
};

export const categoryColors: Record<ProductCategory, string> = {
  geleias: '#721c37',
  'geleias-diet': '#4a1468',
  'geleias-agridoces': '#9b5e0a',
  'mini-potes': '#8c2240',
  conservas: '#c41e1e',
  doces: '#c8851a',
  institucional: '#2D5A1B',
  'marca-propria': '#2D5A1B',
};
