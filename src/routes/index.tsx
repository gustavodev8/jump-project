import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Arrow, PageShell, wrap } from "@/components/site-shell";
import { SERVICES } from "@/data/content";
import heroDesktop from "@/assets/jump/jump-9407-desktop.webp";
import heroDesktopSmall from "@/assets/jump/jump-9407-mobile.webp";
import heroMobile from "@/assets/jump/jump-2093-mobile.webp";
import communityDesktop from "@/assets/jump/jump-9402-desktop.webp";
import communityMobile from "@/assets/jump/jump-9402-mobile.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JUMP — Seu próximo salto começa aqui" },
      {
        name: "description",
        content:
          "Conectamos comunicação, audiovisual, arte e moda para transformar ideias em projetos com identidade.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const manifesto = useReveal<HTMLDivElement>();
  const services = useReveal<HTMLDivElement>();
  const community = useReveal<HTMLDivElement>();
  return (
    <PageShell>
      <section className="home-hero">
        <div className={`${wrap} hero-layout`}>
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow reveal reveal-delay-1">
              Coletivo criativo <span>•</span> Por toda a Bahia
            </p>
            <h1 className="hero-title">
              <span className="hero-line reveal reveal-delay-2">Seu próximo</span>
              <span className="hero-line reveal reveal-delay-3">
                salto <em>começa</em>
              </span>
              <span className="hero-line reveal reveal-delay-4">aqui.</span>
            </h1>
            <p className="hero-description reveal reveal-delay-5">
              Conectamos comunicação, audiovisual, arte e moda para transformar ideias em projetos
              com identidade.
            </p>
            <div className="hero-actions reveal reveal-delay-5">
              <Link to="/contato" className="button button-dark">
                Crie com a JUMP <Arrow />
              </Link>
              <Link to="/a-jump" className="text-link">
                Conheça o coletivo <Arrow />
              </Link>
            </div>
          </div>
          <figure className="hero-media reveal reveal-delay-3">
            <div className="image-reveal">
              <picture>
                <source
                  media="(max-width: 900px)"
                  srcSet={`${heroMobile} 800w`}
                  sizes="100vw"
                  width={800}
                  height={1201}
                />
                <img
                  src={heroDesktop}
                  srcSet={`${heroDesktopSmall} 800w, ${heroDesktop} 1600w`}
                  sizes="(min-width: 1200px) 42vw, (min-width: 901px) 46vw, 100vw"
                  width={1600}
                  height={1066}
                  alt="Pessoas usando camisetas da JUMP em um ensaio externo da marca."
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </div>
            <figcaption>Gente, ideia e próximo salto</figcaption>
          </figure>
        </div>
        <div className={`${wrap} hero-footer reveal reveal-delay-5`}>
          <span>Estratégia</span>
          <span>Audiovisual</span>
          <span>Direção criativa</span>
          <span>Conexões</span>
          <span className="hero-scroll">↓ Role para explorar</span>
        </div>
      </section>
      <section className="manifesto-section" ref={manifesto.ref}>
        <div className={`${wrap} manifesto-grid ${manifesto.visible ? "is-visible" : ""}`}>
          <p className="eyebrow">Manifesto / 01</p>
          <div>
            <h2 className="manifesto-title">
              Diferentes talentos.
              <br />
              Uma vontade em comum:
              <br />
              <span>criar.</span>
            </h2>
            <p className="manifesto-text">
              Somos um coletivo que conecta pessoas, linguagens e ideias para construir projetos que
              vão além do óbvio.
            </p>
            <Link to="/a-jump" className="text-link">
              Conheça a JUMP <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="home-services" ref={services.ref}>
        <div className={`${wrap} ${services.visible ? "is-visible" : ""}`}>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">O que fazemos / 02</p>
              <h2 className="section-title">
                O que podemos
                <br />
                <em>criar juntos?</em>
              </h2>
            </div>
            <p className="section-aside">
              Uma ideia não precisa caber em uma solução pronta. Ela precisa encontrar o caminho
              certo.
            </p>
          </div>
          <div className="service-index-list">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                to={`/servicos#${service.slug}`}
                className="service-index-item"
              >
                <span className="service-number">{service.number}</span>
                <span className="service-index-copy">
                  <strong>{service.title}</strong>
                  <small>{service.summary}</small>
                </span>
                <Arrow />
              </Link>
            ))}
          </div>
          <Link to="/servicos" className="text-link services-link">
            Ver todos os serviços <Arrow />
          </Link>
        </div>
      </section>
      <section className="community-banner">
        <div
          className={`${wrap} community-banner-grid ${community.visible ? "is-visible" : ""}`}
          ref={community.ref}
        >
          <div>
            <p className="eyebrow eyebrow-light">JUMP Community / 03</p>
            <h2 className="banner-title">Seu talento pode encontrar o próximo salto aqui.</h2>
            <p className="banner-copy">
              Um espaço para conectar pessoas, compartilhar ideias e construir novas possibilidades.
            </p>
            <Link to="/comunidade" className="button button-light">
              Conheça a comunidade <Arrow />
            </Link>
          </div>
          <div className="community-banner-media">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={`${communityMobile} 800w`}
                sizes="100vw"
                width={800}
                height={533}
              />
              <img
                src={communityDesktop}
                srcSet={`${communityMobile} 800w, ${communityDesktop} 1600w`}
                sizes="(min-width: 901px) 40vw, 100vw"
                width={1600}
                height={1066}
                alt="Três pessoas da JUMP interagem à beira-mar, usando camisetas da marca."
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>
      <section className="home-close">
        <div className={wrap}>
          <p className="eyebrow">Pronto para começar?</p>
          <h2>
            Vamos dar o<br />
            <em>próximo salto?</em>
          </h2>
          <Link to="/contato" className="button button-dark">
            Conte sua ideia <Arrow />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
