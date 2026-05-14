export type ProductCategory =
  | 'geleias'
  | 'geleias-diet'
  | 'doces'
  | 'conservas'
  | 'compotas'
  | 'outros'
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
    name: 'Geleia de Morango',
    emoji: '🍓',
    color: '#8c2240',
    category: 'geleias',
    featured: true,
    weight: '300g',
    image: '/geleia-morango-produto.png',
    description: 'A clássica geleia de morango artesanal com pedaços da fruta.',
    details: 'Produzida com morangos selecionados da Serra da Mantiqueira, esta geleia preserva o sabor fresco e natural da fruta. Perfeita para torradas, crepes e sobremesas.',
  },
  {
    id: 'geleia-amora',
    name: 'Geleia de Amora',
    emoji: '🫐',
    color: '#4a1468',
    category: 'geleias',
    featured: true,
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
    featured: true,
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
    name: 'Geleia de Laranja c/ Gengibre',
    emoji: '🍊',
    color: '#e87820',
    category: 'geleias',
    weight: '300g',
    description: 'A clássica marmelada com um toque picante e aromático.',
    details: 'Laranja fresca com gengibre cria uma geleia complexa e memorável. Levemente picante, muito aromática.',
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
  // DOCES
  {
    id: 'doce-leite',
    name: 'Doce de Leite Artesanal',
    emoji: '🍮',
    color: '#c8851a',
    category: 'doces',
    featured: true,
    weight: '400g',
    description: 'Cremoso e irresistível, produzido de forma artesanal.',
    details: 'Cozido lentamente em tacho de cobre, resultando em textura cremosa e sabor incomparável.',
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
    id: 'conserva-pimenta',
    name: 'Pimenta em Conserva',
    emoji: '🌶️',
    color: '#c41e1e',
    category: 'conservas',
    featured: true,
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
  // COMPOTAS
  {
    id: 'compota-figo',
    name: 'Compota de Figo Inteiro',
    emoji: '🍇',
    color: '#6b2d5a',
    category: 'compotas',
    featured: true,
    weight: '500g',
    description: 'Figos inteiros em calda de açúcar, um clássico artesanal.',
    details: 'Figos selecionados, mantidos inteiros e conservados em calda com especiarias.',
  },
  {
    id: 'compota-pessego',
    name: 'Compota de Pêssego',
    emoji: '🍑',
    color: '#e8783c',
    category: 'compotas',
    weight: '500g',
    description: 'Metades de pêssego em calda leve e perfumada.',
    details: 'Pêssegos no ponto perfeito de maturação em calda aromatizada com baunilha.',
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
  'geleias': 'Geleias',
  'geleias-diet': 'Geleias Diet',
  'doces': 'Doces',
  'conservas': 'Conservas',
  'compotas': 'Compotas',
  'outros': 'Outros',
  'marca-propria': 'Marca Própria',
};

export const categoryColors: Record<ProductCategory, string> = {
  'geleias': '#721c37',
  'geleias-diet': '#4a1468',
  'doces': '#c8851a',
  'conservas': '#c41e1e',
  'compotas': '#6b2d5a',
  'outros': '#2D5A1B',
  'marca-propria': '#2D5A1B',
};
