"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/data/slides";

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

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();

      const isTypingElement =
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target?.isContentEditable;

      if (isTypingElement) return;

      if (event.key === "ArrowRight") {
        event.preventDefault();
        changeSlide("next");
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        changeSlide("prev");
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isAnimating]);

  return (
    <section className="heroContainer">
      <div className="relative hidden h-full w-full lg:flex lg:flex-row">
        <article
          className="heroLeft relative h-full w-1/2"
          style={{ backgroundColor: current.corEsquerda }}
        >
          <div className="relative z-10 flex h-full w-full items-center justify-center px-16 py-10">
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

        <article
          className="heroRight relative h-full w-1/2"
          style={{ backgroundColor: current.bgDireita }}
        >
          <div className="relative z-10 flex h-full w-full items-center px-16 py-10">
            <div
              className={`rightTextWrap ml-auto w-full max-w-[650px] ${
                showText ? "ativo" : ""
              }`}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
                Refrigerante
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase text-neutral-900">
                {current.sabor}
              </h2>
              <p className="mt-6 text-lg uppercase tracking-[0.12em] text-neutral-900">
                {current.subtitulo}
              </p>
              <p className="mt-2 max-w-[420px] text-base leading-5 text-neutral-600">
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
                        item.ativo ? "border-2 bg-white" : "text-neutral-500"
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

                <Link
                  href={`/${current.slug}`}
                  className="heroButton inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white/80 px-7 py-4 text-sm font-bold uppercase tracking-[0.15em] text-neutral-800"
                >
                  Conhecer linha
                </Link>
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

        <div className="heroWatermark" aria-hidden="true">
          <img
            src="/logo.png"
            alt=""
            className="heroWatermarkImg -rotate-14 w-[1500px]"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 w-[310px] -translate-x-1/2 -translate-y-[44%] xl:w-[440px]">
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

        <div className="absolute bottom-10 left-10 z-30 flex items-center gap-3">
          {slides.map((item, i) => (
            <button
              key={item.id}
              onClick={() =>
                goToSlide(i, i > currentIndex ? "next" : "prev")
              }
              className={`sliderDot h-3 rounded-full ${
                i === currentIndex
                  ? "w-10 bg-white/95"
                  : "w-3 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para slide ${item.sabor}`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 right-10 z-30 flex items-center gap-3">
          <button
            onClick={() => changeSlide("prev")}
            className="heroButton flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-neutral-800 shadow-xl"
            aria-label="Slide anterior"
          >
            ←
          </button>
          <button
            onClick={() => changeSlide("next")}
            className="heroButton flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-white text-2xl text-neutral-800 shadow-xl"
            aria-label="Próximo slide"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="flex min-h-screen flex-col lg:hidden"
        style={{ backgroundColor: current.bgDireita }}
      >
        <div className="relative flex flex-row items-start px-5 pt-8 pb-4">
          <div
            className={`flex flex-1 flex-col pr-2 ${
              showText ? "mobileTextIn" : "mobileTextOut"
            }`}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Refrigerante
            </p>
            <h2
              className="mt-1 text-4xl font-black uppercase leading-none"
              style={{ color: current.corEsquerda }}
            >
              {current.sabor}
            </h2>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              {current.subtitulo}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-neutral-600">
              {current.descricao}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => changeSlide("prev")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-base text-neutral-700 shadow-sm"
                aria-label="Slide anterior"
              >
                ←
              </button>
              <button
                onClick={() => changeSlide("next")}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-base text-neutral-700 shadow-sm"
                aria-label="Próximo slide"
              >
                →
              </button>

              <div className="ml-2 flex items-center gap-2">
                {slides.map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      goToSlide(i, i > currentIndex ? "next" : "prev")
                    }
                    className="sliderDot h-2 rounded-full transition-all"
                    style={{
                      width: i === currentIndex ? "28px" : "8px",
                      backgroundColor:
                        i === currentIndex ? current.corEsquerda : "#d1d5db",
                    }}
                    aria-label={`Ir para slide ${item.sabor}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="relative w-[130px] shrink-0 self-center">
            <div
              className="bottleGlow absolute left-1/2 top-1/2 -z-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-2xl"
              style={{ backgroundColor: current.corEsquerda }}
            />
            <Image
              key={`mob-current-${current.id}`}
              src={current.imagem}
              alt={`Refrigerante ${current.sabor}`}
              width={400}
              height={700}
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
                key={`mob-next-${nextSlide.id}`}
                src={nextSlide.imagem}
                alt={`Refrigerante ${nextSlide.sabor}`}
                width={400}
                height={700}
                priority
                className={`bottleLayer bottleNext h-auto w-full object-contain ${
                  direction === "next" ? "inUp" : "inDown"
                }`}
              />
            )}
          </div>
        </div>

        <div
          className={`px-5 pb-4 ${showText ? "mobileTextIn" : "mobileTextOut"}`}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Disponível em:
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            {current.volumesDisponiveis.map((item) => (
              <button
                key={item.label}
                type="button"
                className={`flex h-9 items-center justify-center rounded-full px-5 text-xs font-semibold uppercase transition-all ${
                  item.ativo ? "border-2 bg-white" : "text-neutral-400"
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

        <div
          className={`px-5 pb-5 ${showText ? "mobileTextIn" : "mobileTextOut"}`}
        >
          <button
            className="w-full rounded-full py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-white shadow-md"
            style={{ backgroundColor: current.corEsquerda }}
          >
            Onde comprar
          </button>

          <Link
            href={`/${current.slug}`}
            className="mt-2 flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white py-3.5 text-sm font-bold uppercase tracking-[0.15em] text-neutral-700"
          >
            Conhecer linha
          </Link>
        </div>

        <div
          className={`mx-5 mb-5 grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200 bg-white p-4 ${
            showText ? "mobileTextIn" : "mobileTextOut"
          }`}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Sabor
            </p>
            <p className="mt-1 text-2xl font-black text-neutral-900">
              {current.sabor}
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              Volume
            </p>
            <p className="mt-1 text-2xl font-black text-neutral-900">
              {current.volume}
            </p>
          </div>
        </div>

        <div
          className="mt-auto rounded-t-3xl px-5 py-7"
          style={{ backgroundColor: current.corEsquerda }}
        >
          <p className="text-center text-base font-semibold uppercase tracking-[0.3em] text-white">
            Nutrientes
          </p>
          <div className="mt-4 flex justify-center gap-8">
            {current.nutrientes.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  className="w-10 object-cover"
                  src={item.icon}
                  alt={item.titulo}
                />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/75">
                    {item.titulo}
                  </p>
                  <p className="text-xs font-semibold text-white">{item.valor}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-5 border-t border-white/20" />

          <p className="text-center text-base font-semibold uppercase tracking-[0.3em] text-white">
            Ingredientes
          </p>
          <div className="mt-4 flex justify-center gap-6">
            {current.ingredientes.map((item) => (
              <div key={item.id} className="text-center">
                <img
                  className="mx-auto w-10 object-cover"
                  src={item.icon}
                  alt={item.titulo}
                />
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/75">
                  {item.titulo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}