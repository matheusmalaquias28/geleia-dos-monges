// Catálogo Monges 2026. Variações "não produz" são omitidas; "não tem" ficam como indisponíveis.

export type ProductCategory =
  | 'geleias-tradicionais'
  | 'geleias-diet'
  | 'doces'
  | 'geleias-agridoce'
  | 'mel'
  | 'conservas'
  | 'geleias-classic'
  | 'geleias-viver';

export interface ProductSize {
  label: string;
  available: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  /** Vazio quando a gramatura não foi informada. */
  sizes: ProductSize[];
  /** Falso quando o produto inteiro está marcado como "não tem". */
  available: boolean;
  emoji: string;
  color: string;
  image?: string;
  /** Foto específica de cada tamanho, quando houver mais de uma. */
  sizeImages?: Record<string, string>;
  description?: string;
  details?: string;
}

export const categoryOrder: ProductCategory[] = [
  'geleias-tradicionais',
  'geleias-diet',
  'doces',
  'geleias-agridoce',
  'mel',
  'conservas',
  'geleias-classic',
  'geleias-viver',
];

export const categoryLabels: Record<ProductCategory, string> = {
  'geleias-tradicionais': 'Geleias Tradicionais',
  'geleias-diet': 'Geleias Diet',
  doces: 'Doces',
  'geleias-agridoce': 'Geleias Agridoce',
  mel: 'Mel',
  conservas: 'Conservas',
  'geleias-classic': 'Geleias Classic',
  'geleias-viver': 'Geleias Viver',
};

const flavorStyle: Record<string, { emoji: string; color: string }> = {
  Abacaxi: { emoji: '🍍', color: '#d4a40a' },
  Amora: { emoji: '🫐', color: '#4a1468' },
  Damasco: { emoji: '🍑', color: '#e8783c' },
  Framboesa: { emoji: '🫐', color: '#c41e5a' },
  'Frutas Vermelhas': { emoji: '🍒', color: '#8c2240' },
  Goiaba: { emoji: '🟡', color: '#c8851a' },
  Laranja: { emoji: '🍊', color: '#e87820' },
  Maracujá: { emoji: '🟡', color: '#d4a40a' },
  Morango: { emoji: '🍓', color: '#8c2240' },
  Tangerina: { emoji: '🍊', color: '#d4641e' },
};

const img = (file: string) => `/produtos/${file}-min.png`;
const imgV2 = (file: string) => `/produtos/v2/${file}-min.png`;
const imgV3 = (file: string) => `/produtos/v3/${file}-min.png`;
const imgV4 = (file: string) => `/produtos/v4/${file}.webp`;

/** Monta a foto principal e as fotos por tamanho a partir das que existirem. */
const photos = (bySize: Record<string, string | undefined>, primary: string): Partial<Product> => {
  const sizeImages = Object.fromEntries(
    Object.entries(bySize).filter((entry): entry is [string, string] => Boolean(entry[1])),
  );
  const image = sizeImages[primary] ?? Object.values(sizeImages)[0];
  return Object.keys(sizeImages).length > 1 ? { image, sizeImages } : { image };
};

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');

const sizes = (...entries: [string, boolean][]): ProductSize[] =>
  entries.map(([label, available]) => ({ label, available }));

const jam = (
  category: ProductCategory,
  idPrefix: string,
  namePrefix: string,
  flavor: string,
  productSizes: ProductSize[],
  extra: Partial<Product> = {},
): Product => ({
  id: `${idPrefix}-${slug(flavor)}`,
  name: `${namePrefix} de ${flavor}`,
  category,
  sizes: productSizes,
  available: true,
  ...flavorStyle[flavor],
  ...extra,
});

// 1. GELEIAS TRADICIONAIS — todos os sabores em 45g, 310g e Balde
const tradicionalSizes = () => sizes(['45g', true], ['310g', true], ['Balde', true]);

const tradicionalExtras: Record<string, Partial<Product>> = {
  Morango: {
    description:
      'Com generosos pedaços de morango, oferece um equilíbrio perfeito entre doçura e acidez.',
    details:
      'Nossa clássica geleia de morango é preparada com frutas cuidadosamente selecionadas, preservando o sabor natural e a textura caseira. Com generosos pedaços de morango, oferece um equilíbrio perfeito entre doçura e acidez, proporcionando uma experiência única a cada colherada. Ideal para acompanhar pães, torradas, queijos, iogurtes, sobremesas e diversas receitas.',
  },
  Laranja: {
    description:
      'Sabor cítrico e refrescante com delicados pedaços de casca e um leve toque de amargor.',
    details:
      'Elaborada com laranjas de seleção, nossa geleia combina o sabor cítrico e refrescante da fruta com delicados pedaços de casca, que proporcionam uma textura marcante e um leve toque de amargor característico. Uma receita tradicional, equilibrada e cheia de personalidade.',
  },
};

const tradicionalImages: Record<string, string> = {
  Abacaxi: img('geleia-de-abacaxi'),
  Amora: img('geleia-de-amora'),
  Damasco: img('geleia-de-damasco'),
  Framboesa: img('geleia-de-framboesa'),
  'Frutas Vermelhas': img('geleia-de-frutas-vermelhas'),
  Goiaba: img('geleia-de-goiaba'),
  Laranja: img('geleia-de-laranja'),
  Maracujá: img('geleia-de-maracuja'),
  Morango: img('geleia-de-morango'),
  Tangerina: imgV4('geleia-de-tangerina-310g'),
};

const tradicional45gImages: Record<string, string> = {
  Abacaxi: imgV2('geleia-de-abacaxi-45g'),
  Amora: imgV2('geleie-de-amora-45g'),
  Damasco: imgV2('geleia-de-damasco-45g'),
  Framboesa: imgV2('geleia-de-framboesa-45g'),
  'Frutas Vermelhas': imgV2('geleia-de-frutas-vermelhas-45g'),
  Goiaba: imgV2('geleia-de-goiaba-45g'),
  Laranja: imgV2('geleia-de-laranja-45g'),
  Maracujá: imgV2('geleia-de-maracuja-45g'),
  Morango: imgV2('geleia-de-morango-45g'),
  Tangerina: imgV2('geleia-de-tangerina-45g'),
};

const tradicionalBaldeImages: Record<string, string> = {
  Abacaxi: imgV3('geleia-de-abacaxi-3,4kg'),
  Amora: imgV3('geleia-de-amora-3,2kg'),
  Damasco: imgV3('geleia-de-damasco-3,4kg'),
  Framboesa: imgV3('geleia-de-framboesa-3,2kg'),
  'Frutas Vermelhas': imgV3('geleia-de-frutas-vermelhas-3,2kg'),
  Goiaba: imgV3('geleia-de-goiaba-3,4kg'),
  Laranja: imgV3('geleia-de-laranja-3,4kg'),
  Maracujá: imgV3('geleia-de-maracuja-3,4kg'),
  Tangerina: imgV3('geleia-de-tangerina-3,4kg'),
};

const tradicionais = [
  'Abacaxi',
  'Amora',
  'Damasco',
  'Framboesa',
  'Frutas Vermelhas',
  'Goiaba',
  'Laranja',
  'Maracujá',
  'Morango',
  'Tangerina',
].map((flavor) =>
  jam('geleias-tradicionais', 'tradicional', 'Geleia', flavor, tradicionalSizes(), {
    ...photos(
      {
        '45g': tradicional45gImages[flavor],
        '310g': tradicionalImages[flavor],
        Balde: tradicionalBaldeImages[flavor],
      },
      '310g',
    ),
    ...tradicionalExtras[flavor],
  }),
);

// 2. GELEIAS DIET — 35g e 200g
const dietImages: Record<string, string> = {
  Abacaxi: img('geleia-de-abacaxi-diet'),
  Amora: img('geleia-de-amora-diet'),
  Damasco: img('geleia-de-damasco-diet'),
  Framboesa: img('geleia-de-famboesa-diet'),
  'Frutas Vermelhas': img('geleia-de-frutas-vermelhas-diet'),
  Goiaba: img('geleia-de-goiaba-diet'),
  Laranja: img('geleia-de-laranja-diet'),
  Maracujá: img('geleia-de-maracujá-diet'),
  Morango: img('geleia-de-morango-diet'),
  Tangerina: img('geleia-de-tangerina-diet'),
};

const diet35gImages: Record<string, string> = {
  Abacaxi: imgV4('geleia-de-abacaxi-diet-35g'),
  Amora: imgV2('geleia-de-amora-diet-35g'),
  'Frutas Vermelhas': imgV2('geleia-de-frutas-vermelhas-diet-35g'),
  Goiaba: imgV2('geleia-de-goiaba-diet-35g'),
  Laranja: imgV2('geleia-de-laranja-diet-35g'),
  Maracujá: imgV2('geleia-de-macaruja-diet-35g'),
  Tangerina: imgV2('geleia-de-tangerina-diet-35g'),
};

const diet = (
  [
    ['Abacaxi', true],
    ['Amora', true],
    ['Damasco', false],
    ['Framboesa', false],
    ['Frutas Vermelhas', true],
    ['Goiaba', true],
    ['Laranja', true],
    ['Maracujá', true],
    ['Morango', false],
    ['Tangerina', true],
  ] as [string, boolean][]
).map(([flavor, has35]) =>
  jam(
    'geleias-diet',
    'diet',
    'Geleia Diet',
    flavor,
    sizes(['35g', has35], ['200g', true]),
    photos({ '35g': diet35gImages[flavor], '200g': dietImages[flavor] }, '200g'),
  ),
);

// 3. DOCES — 35g, 230g e 410g
const doces: Product[] = (
  [
    {
      id: 'doce-brigadeiro',
      name: 'Brigadeiro',
      emoji: '🍫',
      color: '#5a2d1a',
      sizes: sizes(['230g', true]),
      image: img('brigadeiro-de-colher'),
    },
    {
      id: 'doce-cocadinha',
      name: 'Cocadinha',
      emoji: '🥥',
      color: '#c8a46a',
      sizes: sizes(['230g', true], ['410g', true]),
      sizeImages: { '230g': img('cocadinha-230g'), '410g': img('cocadinha-410g') },
    },
    {
      id: 'doce-abobora',
      name: 'Doce de Abóbora',
      emoji: '🎃',
      color: '#d4641e',
      sizes: sizes(['230g', true], ['410g', true]),
      sizeImages: {
        '230g': img('doce-de-aboborda-coco-cremoso'),
        '410g': img('doce-de-abobora-com-coco-cremoso'),
      },
    },
    {
      id: 'doce-banana',
      name: 'Doce de Banana',
      emoji: '🍌',
      color: '#d4a40a',
      sizes: sizes(['230g', true], ['410g', true]),
      sizeImages: { '230g': img('doce-de-banana-cremoso-230g'), '410g': img('doce-de-banana') },
    },
    {
      id: 'doce-goiaba',
      name: 'Doce de Goiaba',
      emoji: '🟡',
      color: '#c8851a',
      sizes: sizes(['230g', true], ['410g', true]),
      // Os nomes dos arquivos estão invertidos: o "410g" é o pote de 230g.
      sizeImages: { '230g': img('docei-de-goiaba-410g'), '410g': img('doce-de-goiaba') },
    },
    {
      id: 'doce-fondant',
      name: 'Fondant',
      emoji: '🍮',
      color: '#c8851a',
      sizes: sizes(['35g', true], ['230g', true], ['410g', true]),
      image: img('fondant-de-leite-cremoso'),
      sizeImages: {
        '35g': imgV2('fondant-de-leite-cremoso-35g'),
        '230g': img('fondant-de-leite-cremoso'),
        '410g': img('fondant-de-leite'),
      },
      description: 'Cremoso e delicado, com textura macia e sabor suave que derrete na boca.',
      details:
        'Cremoso, delicado e irresistível, o Fondant de Leite é preparado com ingredientes selecionados para oferecer uma textura macia e um sabor suave que derrete na boca. Versátil e sofisticado, é perfeito para rechear e decorar bolos, tortas, doces, cupcakes e sobremesas, além de poder ser apreciado puro por quem busca um toque especial de doçura.',
    },
    {
      id: 'doce-fondant-ameixa',
      name: 'Fondant com Ameixa',
      emoji: '🍮',
      color: '#6b2d5a',
      sizes: sizes(['230g', true], ['410g', true]),
      sizeImages: { '230g': img('fondant-com-ameixa'), '410g': imgV4('fondant-com-ameixa-410g') },
    },
    {
      id: 'doce-fondant-brigadeiro',
      name: 'Fondant com Brigadeiro',
      emoji: '🍮',
      color: '#5a2d1a',
      sizes: sizes(['230g', false], ['410g', true]),
      image: img('fondant-com-brigadeiro'),
    },
    {
      id: 'doce-fondant-goiaba',
      name: 'Fondant com Goiaba',
      emoji: '🍮',
      color: '#c8851a',
      sizes: sizes(['230g', true], ['410g', false]),
      image: img('fondant-com-goiaba'),
    },
  ] as Omit<Product, 'category' | 'available'>[]
).map((p) => ({
  ...p,
  category: 'doces' as const,
  available: true,
  image: p.image ?? Object.values(p.sizeImages ?? {})[0],
}));

// 4. GELEIAS AGRIDOCE — gramatura não informada
const agridoce: Product[] = (
  [
    ['Gengibre', '🫚', '#c8851a', img('geleia-de-gengibre')],
    ['Pimenta com Alecrim', '🌶️', '#c41e1e', img('geleia-de-pimenta-com-alecrim')],
  ] as [string, string, string, string][]
).map(([flavor, emoji, color, image]) => ({
  id: `agridoce-${slug(flavor)}`,
  name: `Geleia Agridoce de ${flavor}`,
  category: 'geleias-agridoce',
  sizes: [],
  available: true,
  emoji,
  color,
  image,
}));

// 5. MEL
const mel: Product[] = [
  {
    id: 'mel',
    name: 'Mel',
    category: 'mel',
    sizes: sizes(['45g', true], ['340g', false]),
    available: true,
    emoji: '🍯',
    color: '#d4a40a',
    image: imgV2('mel-florada-silvestre-45g'),
  },
];

// 6. CONSERVAS — tamanhos não informados
const conservas: Product[] = [
  {
    id: 'conserva-berinjela-caponata',
    name: 'Berinjela Caponata',
    emoji: '🍆',
    color: '#6b2d5a',
    image: img('conserva-de-beringela'),
  },
  {
    id: 'conserva-berinjela-siciliana',
    name: 'Berinjela Siciliana',
    emoji: '🍆',
    color: '#6b2d5a',
    image: img('berinjela-siciliana'),
    description:
      'Textura macia e equilíbrio de aromas e especiarias, inspirada na tradição mediterrânea.',
    details:
      'Preparada com berinjelas cuidadosamente selecionadas e temperos que realçam seu sabor, nossa Berinjela Siciliana combina textura macia e um equilíbrio perfeito de aromas e especiarias. Uma receita inspirada na tradição mediterrânea, ideal para servir como antepasto, acompanhar pães, torradas, saladas, massas, carnes ou compor tábuas de frios e queijos.',
  },
  {
    id: 'conserva-relish-pepino',
    name: 'Relish de Pepino',
    emoji: '🥒',
    color: '#2d5a1b',
    image: img('relish-de-pepino'),
  },
].map((p) => ({ ...p, category: 'conservas' as const, sizes: [], available: true }));

// 7. GELEIAS CLASSIC — gramaturas não informadas
const classicImages: Record<string, string> = {
  Amora: '/geleia-amora-produto.png',
  'Frutas Vermelhas': imgV4('geleia-de-frutas-vermelhas-classic-310g'),
  Laranja: imgV3('geleia-de-laranja-classic-310g'),
  // O arquivo não diz a linha, mas o rótulo é da Classic.
  Morango: imgV3('geleia-de-morango-310g'),
};

const classic = ['Amora', 'Frutas Vermelhas', 'Laranja', 'Morango'].map((flavor) =>
  jam('geleias-classic', 'classic', 'Geleia Classic', flavor, [], { image: classicImages[flavor] }),
);

// 8. GELEIAS VIVER — gramaturas não informadas
const viverImages: Record<string, string> = {
  Amora: imgV3('geleia-de-amora-viver-200g'),
  Damasco: imgV4('geleia-de-damasco-viver-200g'),
  'Frutas Vermelhas': imgV3('geleia-de-frutas-vermelhas-viver-200g'),
  Goiaba: imgV4('geleia-de-goiaba-viver-200g'),
  Laranja: imgV4('geleia-de-laranja-viver-200g'),
};

const viver = ['Amora', 'Damasco', 'Frutas Vermelhas', 'Goiaba', 'Laranja'].map((flavor) =>
  jam('geleias-viver', 'viver', 'Geleia Viver', flavor, [], { image: viverImages[flavor] }),
);

export const products: Product[] = [
  ...tradicionais,
  ...diet,
  ...doces,
  ...agridoce,
  ...mel,
  ...conservas,
  ...classic,
  ...viver,
];
