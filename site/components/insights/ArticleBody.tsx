import { Reveal } from "../Reveal";
import type { Article, ArticleBlock } from "@/content/insights";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[16px] leading-[25px] text-grey">{block.text}</p>;
    case "h2":
      return <h2 className="h-row pt-4 text-ink">{block.text}</h2>;
    case "quote":
      return (
        <figure className="rounded-[16px] border-l-2 border-olive-deep bg-cream p-6">
          <blockquote>
            <p className="text-[17px] leading-[25px] text-ink">{block.fr}</p>
            <p className="mt-3 text-[14px] italic leading-[20px] text-grey">{block.en}</p>
          </blockquote>
          <figcaption className="mt-4 text-[12px] uppercase tracking-[0.1em] text-grey">
            {block.source}
          </figcaption>
        </figure>
      );
    case "list":
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[16px] leading-[25px] text-grey">
              <span className="mt-[11px] block h-[3px] w-[14px] shrink-0 bg-olive-deep" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <div className="rounded-[16px] bg-sand p-6">
          <p className="text-[16px] leading-[25px] text-ink">{block.text}</p>
        </div>
      );
  }
}

export function ArticleBody({ article }: { article: Article }) {
  return (
    <section className="px-[10px] pt-[10px]">
      <div className="rounded-[20px] border border-hairline bg-light px-6 py-16 sm:px-10 lg:py-[90px]">
        <div className="mx-auto max-w-[720px]">
          <div className="space-y-7">
            {article.blocks.map((block, i) => (
              <Reveal key={i} y={18}>
                <Block block={block} />
              </Reveal>
            ))}
          </div>

          <Reveal y={18}>
            <div className="mt-14 rounded-[16px] border border-hairline bg-cream p-7">
              <h2 className="h-row text-ink">Sources</h2>
              <ol className="mt-5 space-y-3">
                {article.sources.map((s, i) => (
                  <li key={s.url} className="flex gap-3 text-[14px] leading-[21px]">
                    <span className="text-grey">{i + 1}.</span>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-olive-deep underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
