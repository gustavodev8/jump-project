import { createFileRoute } from "@tanstack/react-router";
import { Arrow, PageIntro, PageShell, wrap } from "@/components/site-shell";
import { BENEFITS, INSTAGRAM_URL } from "@/data/content";
import { useReveal } from "@/hooks/use-reveal";
import communityDesktop from "@/assets/jump/jump-9399-desktop.webp";
import communityMobile from "@/assets/jump/jump-9399-mobile.webp";

export const Route = createFileRoute("/comunidade")({
  head: () => ({
    meta: [{ title: "JUMP Community — Seu talento pode encontrar o próximo salto" }],
  }),
  component: Community,
});

function Community() {
  const intro = useReveal<HTMLDivElement>();
  return (
    <PageShell>
      <PageIntro
        dark
        eyebrow="JUMP Community / 03"
        title={
          <>
            Seu talento pode encontrar
            <br />
            <em>o próximo salto aqui.</em>
          </>
        }
        description="Um espaço para conectar pessoas, compartilhar ideias e construir novas possibilidades."
      />
      <section className="community-intro">
        <div
          className={`${wrap} community-intro-grid ${intro.visible ? "is-visible" : ""}`}
          ref={intro.ref}
        >
          <picture>
            <source
              media="(max-width: 700px)"
              srcSet={`${communityMobile} 800w`}
              sizes="100vw"
              width={800}
              height={1200}
            />
            <img
              src={communityDesktop}
              srcSet={`${communityMobile} 800w, ${communityDesktop} 1365w`}
              sizes="(min-width: 901px) 52vw, 100vw"
              width={1365}
              height={2048}
              alt="Três pessoas com roupas da JUMP reunidas em uma escadaria."
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div>
            <p className="eyebrow">O que é a comunidade?</p>
            <p className="community-lede">
              Acreditamos que existem muitas ideias esperando para acontecer e muitos talentos
              esperando para se encontrar.
            </p>
          </div>
        </div>
      </section>
      <section className="community-story">
        <div className={`${wrap} community-story-copy`}>
          <p>
            A JUMP também é um espaço de conexão entre pessoas criativas, profissionais de
            diferentes áreas e gente que quer experimentar, colaborar e construir coisas novas.
          </p>
          <p>
            Queremos aproximar universos, criar oportunidades e fazer com que boas ideias encontrem
            as pessoas certas para sair do papel.
          </p>
          <p>O próximo salto pode começar com um encontro.</p>
        </div>
      </section>
      <section className="community-pillars">
        <div className={wrap}>
          <div className="community-quote">
            <span>“</span>
            <blockquote>
              Você não precisa saber exatamente onde essa conexão vai chegar. Só precisa estar
              disposto a construir.
            </blockquote>
          </div>
          <div className="pillar-grid">
            {BENEFITS.map(([title, description], index) => (
              <div key={title}>
                <span className="pillar-number">0{index + 1}</span>
                <h2>
                  {title}
                  <span>.</span>
                </h2>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="community-who">
        <div className={wrap}>
          <p className="eyebrow">Quem pode fazer parte?</p>
          <div className="two-column-copy">
            <p>
              A comunidade é para pessoas interessadas em comunicação, audiovisual, moda, arte,
              música, publicidade, design e outras áreas criativas.
            </p>
            <p>
              Profissionais, artistas e talentos em desenvolvimento podem encontrar oportunidades de
              colaboração, conexões e projetos. Não se trata apenas de reunir pessoas, mas de criar
              possibilidades reais a partir do que cada uma tem a oferecer.
            </p>
          </div>
          <div className="community-final">
            <h2>
              Tem espaço para
              <br />
              <em>o seu talento aqui.</em>
            </h2>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-dark"
            >
              Quero fazer parte <Arrow />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
