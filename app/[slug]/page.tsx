import Image from "next/image";
import { notFound } from "next/navigation";
import { slides } from "@/data/slides";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProdutoPage({ params }: PageProps) {
  const { slug } = await params;

  const produto = slides.find((item) => item.slug === slug);

  if (!produto) {
    notFound();
  }

  return (
    <main
      className="min-h-screen"
      style={{ backgroundColor: produto.bgDireita }}
    >
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-16 lg:flex-row lg:px-10">
        <article
          className="flex w-full max-w-[520px] justify-center rounded-[32px] p-8"
          style={{ backgroundColor: produto.corEsquerda }}
        >
          <div className="relative w-[240px] sm:w-[300px]">
            <Image
              src={produto.imagem}
              alt={`Refrigerante ${produto.sabor}`}
              width={900}
              height={1600}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </article>

        <article className="w-full max-w-[620px]">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            Refrigerante São Carlos
          </p>

          <h1 className="mt-3 text-4xl font-black uppercase text-neutral-900 md:text-6xl">
            {produto.sabor}
          </h1>

          <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
            {produto.descricao}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {produto.volumesDisponiveis.map((item) => (
              <span
                key={item.label}
                className={`inline-flex h-[46px] min-w-[100px] items-center justify-center rounded-full px-5 text-sm font-semibold uppercase ${
                  item.ativo ? "border-2 bg-white" : "border border-neutral-300"
                }`}
                style={
                  item.ativo
                    ? {
                        color: produto.corEsquerda,
                        borderColor: produto.corEsquerda,
                      }
                    : {}
                }
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Sabor
              </p>
              <p className="mt-2 text-2xl font-black text-neutral-900">
                {produto.sabor}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                Volume principal
              </p>
              <p className="mt-2 text-2xl font-black text-neutral-900">
                {produto.volume}
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}