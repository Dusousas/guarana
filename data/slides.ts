export type VolumeOption = {
  label: string;
  ativo?: boolean;
};

export type NutrienteItem = {
  id: number;
  icon: string;
  titulo: string;
  valor: string;
};

export type IngredienteItem = {
  id: number;
  icon: string;
  titulo: string;
};

export type SlideItem = {
  id: number;
  slug: string;
  sabor: string;
  subtitulo: string;
  descricao: string;
  volume: string;
  volumesDisponiveis: VolumeOption[];
  corEsquerda: string;
  bgDireita: string;
  imagem: string;
  destaque1: string;
  destaque2: string;
  destaque3: string;
  teor: string;
  nutrientes: NutrienteItem[];
  ingredientes: IngredienteItem[];
};

export const slides: SlideItem[] = [
  {
    id: 1,
    slug: "laranja",
    sabor: "Laranja",
    subtitulo: "REFRIGERANTE SÃO CARLOS",
    descricao:
      "O clássico sabor de laranja com refrescância, aroma marcante e aquele visual vibrante que chama atenção na vitrine e na tela.",
    volume: "2L",
    volumesDisponiveis: [
      { label: "350ML" },
      { label: "600ML" },
      { label: "2L", ativo: true },
    ],
    corEsquerda: "#F5A000",
    bgDireita: "#F5F5F5",
    imagem: "/laranja.png",
    destaque1: "SABOR CÍTRICO",
    destaque2: "GELADO FICA AINDA MELHOR",
    destaque3: "TRADIÇÃO SÃO CARLOS",
    teor: "REFRESCÂNCIA ALTA",
    nutrientes: [
      { id: 1, icon: "/icon1.png", titulo: "Calorias", valor: "8,5G / 200ML" },
      { id: 2, icon: "/icon1.png", titulo: "Açúcar", valor: "8,5G / 200ML" },
    ],
    ingredientes: [
      { id: 1, icon: "/icon1.png", titulo: "Fruta" },
      { id: 2, icon: "/icon1.png", titulo: "Água" },
      { id: 3, icon: "/icon1.png", titulo: "Extrato" },
      { id: 4, icon: "/icon1.png", titulo: "Laranja" },
    ],
  },
  {
    id: 2,
    slug: "uva",
    sabor: "Uva",
    subtitulo: "REFRIGERANTE SÃO CARLOS",
    descricao:
      "Uma opção intensa, doce na medida e com identidade visual forte para destacar o produto em campanhas e vitrines digitais.",
    volume: "2L",
    volumesDisponiveis: [
      { label: "350ML" },
      { label: "600ML" },
      { label: "2L", ativo: true },
    ],
    corEsquerda: "#5B1F69",
    bgDireita: "#F5F5F5",
    imagem: "/Uva-design.png",
    destaque1: "SABOR INTENSO",
    destaque2: "VISUAL MARCANTE",
    destaque3: "IDEAL PARA CAMPANHAS",
    teor: "REFRESCÂNCIA ALTA",
    nutrientes: [
      { id: 1, icon: "/icon1.png", titulo: "Calorias", valor: "8,5G / 200ML" },
      { id: 2, icon: "/icon1.png", titulo: "Açúcar", valor: "8,5G / 200ML" },
    ],
    ingredientes: [
      { id: 1, icon: "/icon1.png", titulo: "Fruta" },
      { id: 2, icon: "/icon1.png", titulo: "Água" },
      { id: 3, icon: "/icon1.png", titulo: "Extrato" },
      { id: 4, icon: "/icon1.png", titulo: "Uva" },
    ],
  },
  {
    id: 3,
    slug: "abacaxi",
    sabor: "Abacaxi",
    subtitulo: "REFRIGERANTE SÃO CARLOS",
    descricao:
      "Leve, tropical e diferente. Um sabor com cara de verão, ótimo para apresentar variedade e valorizar a linha completa.",
    volume: "2L",
    volumesDisponiveis: [
      { label: "350ML" },
      { label: "600ML" },
      { label: "2L", ativo: true },
    ],
    corEsquerda: "#D4A017",
    bgDireita: "#F5F5F5",
    imagem: "/Abacaxi-design.png",
    destaque1: "TOQUE TROPICAL",
    destaque2: "APRESENTAÇÃO DIFERENCIADA",
    destaque3: "LINHA COMPLETA",
    teor: "REFRESCÂNCIA ALTA",
    nutrientes: [
      { id: 1, icon: "/icon1.png", titulo: "Calorias", valor: "8,5G / 200ML" },
      { id: 2, icon: "/icon1.png", titulo: "Açúcar", valor: "8,5G / 200ML" },
    ],
    ingredientes: [
      { id: 1, icon: "/icon1.png", titulo: "Fruta" },
      { id: 2, icon: "/icon1.png", titulo: "Água" },
      { id: 3, icon: "/icon1.png", titulo: "Extrato" },
      { id: 4, icon: "/icon1.png", titulo: "Abacaxi" },
    ],
  },
];