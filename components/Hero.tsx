"use client";

import Image from "next/image";
import { useState } from "react";

type VolumeOption = {
  label: string;
  ativo?: boolean;
};

type NutrienteItem = {
  id: number;
  icon: string;
  titulo: string;
  valor: string;
};

type IngredienteItem = {
  id: number;
  icon: string;
  titulo: string;
};

type SlideItem = {
  id: number;
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

const slides: SlideItem[] = [
  {
    id: 1,
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
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Calorias",
        valor: "8,5G / 200ML",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Açúcar",
        valor: "8,5G / 200ML",
      },
    ],
    ingredientes: [
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Fruta",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Água",
      },
      {
        id: 3,
        icon: "/icon1.png",
        titulo: "Extrato",
      },
      {
        id: 4,
        icon: "/icon1.png",
        titulo: "Laranja",
      },
    ],
  },
  {
    id: 2,
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
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Calorias",
        valor: "8,5G / 200ML",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Açúcar",
        valor: "8,5G / 200ML",
      },
    ],
    ingredientes: [
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Fruta",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Água",
      },
      {
        id: 3,
        icon: "/icon1.png",
        titulo: "Extrato",
      },
      {
        id: 4,
        icon: "/icon1.png",
        titulo: "Uva",
      },
    ],
  },
  {
    id: 3,
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
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Calorias",
        valor: "8,5G / 200ML",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Açúcar",
        valor: "8,5G / 200ML",
      },
    ],
    ingredientes: [
      {
        id: 1,
        icon: "/icon1.png",
        titulo: "Fruta",
      },
      {
        id: 2,
        icon: "/icon1.png",
        titulo: "Água",
      },
      {
        id: 3,
        icon: "/icon1.png",
        titulo: "Extrato",
      },
      {
        id: 4,
        icon: "/icon1.png",
        titulo: "Abacaxi",
      },
    ],
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [incomingIndex, setIncomingIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showText, setShowText] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const current = slides[currentIndex];
  const nextSlide = incomingIndex !== null ? slides[incomingIndex] : null;

  function goToSlide(newIndex: number, dir: "next" | "prev") {
    if (isAnimating || newIndex === currentIndex) return;

    setDirection(dir);
    setIsAnimating(true);
    setShowText(false);
    setIncomingIndex(newIndex);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIncomingIndex(null);
      setShowText(true);
      setIsAnimating(false);
    }, 780);
  }

  function changeSlide(dir: "next" | "prev") {
    const nextIndex =
      dir === "next"
        ? currentIndex === slides.length - 1
          ? 0
          : currentIndex + 1
        : currentIndex === 0
          ? slides.length - 1
          : currentIndex - 1;

    goToSlide(nextIndex, dir);
  }

  return (
    <section className="heroContainer">
      <div className="relative flex h-full w-full flex-col lg:flex-row">
        {/* ESQUERDA */}
        <article
          className="heroLeft relative h-[45%] w-full lg:h-full lg:w-1/2"
          style={{ backgroundColor: current.corEsquerda }}
        >
          <div className="relative z-10 flex h-full w-full items-center justify-center px-6 py-10 lg:px-16">
            <div
              className={`leftTextWrap w-full max-w-[520px] text-white ${
                showText ? "ativo" : ""
              }`}
            >
              <article>
                <p className="text-center text-3xl font-semibold uppercase tracking-[0.35em]">
                  Nutrientes
                </p>

                <div className="mt-5 flex justify-center gap-10">
                  {current.nutrientes.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        className="w-[60px] object-cover"
                        src={item.icon}
                        alt={item.titulo}
                      />
                      <div className="text-center">
                        <p className="uppercase tracking-widest text-white/80">
                          {item.titulo}
                        </p>
                        <p className="text-sm font-semibold">{item.valor}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="mt-20">
                <p className="text-center text-3xl font-semibold uppercase tracking-[0.35em] text-white">
                  Ingredientes
                </p>

                <div className="mt-5 flex justify-center gap-14">
                  {current.ingredientes.map((item) => (
                    <div key={item.id} className="text-center">
                      <img
                        className="mx-auto w-[60px] object-cover"
                        src={item.icon}
                        alt={item.titulo}
                      />
                      <p className="mt-2 uppercase tracking-widest text-white/80">
                        {item.titulo}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </article>

        {/* DIREITA */}
        <article
          className="heroRight relative h-[55%] w-full lg:h-full lg:w-1/2"
          style={{ backgroundColor: current.bgDireita }}
        >
          <div className="relative z-10 flex h-full w-full items-center px-6 py-10 lg:px-16">
            <div
              className={`rightTextWrap ml-auto w-full max-w-[650px] ${
                showText ? "ativo" : ""
              }`}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Refrigerante
              </p>

              <h2 className="mt-3 text-4xl font-black uppercase text-neutral-900 sm:text-5xl">
                {current.sabor}
              </h2>

              <p className="mt-6 text-lg uppercase tracking-[0.12em] text-neutral-900">
                {current.subtitulo}
              </p>

              <p className="mt-2 max-w-[420px] text-sm leading-5 text-neutral-600 sm:text-base">
                {current.descricao}
              </p>

              <div className="mt-8">
                <p className="text-lg font-medium uppercase leading-none tracking-[0.08em] text-neutral-900">
                  Disponível em:
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {current.volumesDisponiveis.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`flex h-[52px] w-[110px] items-center justify-center rounded-full text-sm font-semibold uppercase transition-all ${
                        item.ativo
                          ? "border-2 bg-white"
                          : "text-neutral-500"
                      }`}
                      style={
                        item.ativo
                          ? {
                              color: current.corEsquerda,
                              borderColor: current.corEsquerda,
                            }
                          : {}
                      }
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  className="heroButton rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-lg"
                  style={{ backgroundColor: current.corEsquerda }}
                >
                  Onde comprar
                </button>

                <button className="heroButton rounded-full border border-neutral-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-neutral-800">
                  Conhecer linha
                </button>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    sabor
                  </p>
                  <p className="mt-2 text-3xl font-black text-neutral-900">
                    {current.sabor}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                    volume
                  </p>
                  <p className="mt-2 text-3xl font-black text-neutral-900">
                    {current.volume}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* LOGO FIXA / MARCA D'ÁGUA */}
        <div className="heroWatermark" aria-hidden="true">
          <img
            src="/logo.png"
            alt=""
            className="heroWatermarkImg -rotate-14 w-[1500px]"
          />
        </div>

        {/* GARRAFAS */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[220px] -translate-x-1/2 -translate-y-[44%] sm:w-[250px] lg:w-[310px] xl:w-[440px]">
          <div
            className="bottleGlow absolute left-1/2 top-1/2 -z-10 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ backgroundColor: current.corEsquerda }}
          />

          <Image
            key={`current-${current.id}`}
            src={current.imagem}
            alt={`Refrigerante ${current.sabor}`}
            width={900}
            height={1600}
            priority
            className={`bottleLayer bottleCurrent h-auto w-full object-contain ${
              isAnimating
                ? direction === "next"
                  ? "outUp"
                  : "outDown"
                : "idle"
            }`}
          />

          {nextSlide && (
            <Image
              key={`next-${nextSlide.id}`}
              src={nextSlide.imagem}
              alt={`Refrigerante ${nextSlide.sabor}`}
              width={900}
              height={1600}
              priority
              className={`bottleLayer bottleNext h-auto w-full object-contain ${
                direction === "next" ? "inUp" : "inDown"
              }`}
            />
          )}
        </div>

        {/* INDICADORES */}
        <div className="absolute bottom-8 left-6 z-30 flex items-center gap-3 lg:bottom-10 lg:left-10">
          {slides.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goToSlide(i, i > currentIndex ? "next" : "prev")}
              className={`sliderDot h-3 rounded-full ${
                i === currentIndex
                  ? "w-10 bg-white/95"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para slide ${item.sabor}`}
            />
          ))}
        </div>

        {/* BOTÕES */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 lg:bottom-10 lg:right-10">
          <button
            onClick={() => changeSlide("prev")}
            className="heroButton flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-neutral-800 shadow-xl"
            aria-label="Slide anterior"
          >
            ←
          </button>

          <button
            onClick={() => changeSlide("next")}
            className="heroButton flex h-14 w-14 items-center cursor-pointer justify-center rounded-full bg-white text-2xl text-neutral-800 shadow-xl"
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}