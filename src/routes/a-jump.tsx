import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, PageIntro, PageShell, wrap } from "@/components/site-shell";
import { STEPS } from "@/data/content";
import { useReveal } from "@/hooks/use-reveal";
import collectiveDesktop from "@/assets/jump/jump-2088-desktop.webp";
import collectiveMobile from "@/assets/jump/jump-2088-mobile.webp";
import bahiaDesktop from "@/assets/jump/jump-9417-desktop.webp";
import bahiaMobile from "@/assets/jump/jump-9417-mobile.webp";

export const Route = createFileRoute("/a-jump")({
  head: () => ({ meta: [{ title: "A JUMP — De ‘e se?’ para ‘por que não?’" }] }),
  component: About,
});

function About() {
  const collective = useReveal<HTMLDivElement>();
  const bahia = useReveal<HTMLDivElement>();
  return (
    <PageShell>
      <PageIntro
        dark
        eyebrow="A JUMP / 01"
        title={
          <>
            De ‘e se?’ para
            <br />
            <em>‘por que não?’</em>
          </>
        }
        description="Uma vontade de ir além transformada em coletivo criativo, ecossistema e espaço para novas possibilidades."
      />
      <section className="about-statement">
        <div
          className={`${wrap} about-editorial-grid ${collective.visible ? "is-visible" : ""}`}
          ref={collective.ref}
        >
          <picture className="about-collective-photo">
            <source
              media="(max-width: 700px)"
              srcSet={`${collectiveMobile} 800w`}
              sizes="100vw"
              width={800}
              height={1200}
            />
            <img
              src={collectiveDesktop}
              srcSet={`${collectiveMobile} 800w, ${collectiveDesktop} 1365w`}
              sizes="(min-width: 901px) 42vw, 100vw"
              width={1365}
              height={2048}
              alt="Duas pessoas vestindo camisetas da JUMP diante de um portão azul."
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div className="about-editorial-copy">
            <p className="eyebrow">Um coletivo de talentos</p>
            <p className="big-quote">
              “Se você é do tipo que transforma ‘e se?’ em ‘por que não?’, a JUMP é pra você!”
            </p>
            <div className="two-column-copy">
              <p>
                JUMP significa saltar. E a gente acredita no poder de explorar novas possibilidades,
                ultrapassar limites e dar o próximo salto.
              </p>
              <p>
                Foi dessa vontade de ir além que a JUMP nasceu. Conectamos comunicação, audiovisual,
                moda, arte, música e publicidade. Diferentes linguagens, diferentes talentos, uma
                vontade em comum: <strong>criar.</strong>
              </p>
              <p className="about-original-copy">
                Conectamos estratégia, audiovisual, moda, arte e publicidade para transformar ideias
                em projetos com identidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-dark">
        <div className={`${wrap} about-dark-grid`}>
          <div>
            <p className="eyebrow eyebrow-light">Um coletivo, não uma fórmula</p>
            <h2 className="section-title light-title">Mais do que uma agência ou produtora.</h2>
          </div>
          <div className="dark-copy">
            <p>
              Somos um coletivo criativo e um ecossistema de pessoas, ideias e projetos, onde
              diferentes áreas se encontram e colaboram.
            </p>
            <p>Porque uma habilidade pode encontrar outra e, juntas, criar algo muito maior.</p>
          </div>
        </div>
      </section>
      <section className="process-section">
        <div className={wrap}>
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Nosso jeito / 02</p>
              <h2 className="section-title">
                Você traz o desafio.
                <br />
                <em>A gente constrói o caminho.</em>
              </h2>
            </div>
            <p className="section-aside">
              Cada projeto tem uma necessidade, um contexto e um objetivo diferentes. A partir
              disso, estruturamos a solução.
              <br />
              Você traz o desafio. A gente constrói o caminho junto com você.
            </p>
          </div>
          <ol className="process-list">
            {STEPS.map(([number, title, description]) => (
              <li key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="about-bahia">
        <div
          className={`${wrap} about-bahia-grid ${bahia.visible ? "is-visible" : ""}`}
          ref={bahia.ref}
        >
          <div className="about-bahia-copy">
            <p className="eyebrow">Por toda a Bahia / 03</p>
            <h2 className="section-title">
              Referências que
              <br />
              <em>nascem daqui.</em>
            </h2>
            <p>
              A Bahia faz parte da identidade da JUMP. É desse encontro entre território, cultura e
              diferentes talentos que seguimos criando novas possibilidades.
            </p>
          </div>
          <picture className="about-bahia-photo">
            <source
              media="(max-width: 700px)"
              srcSet={`${bahiaMobile} 800w`}
              sizes="100vw"
              width={800}
              height={1200}
            />
            <img
              src={bahiaDesktop}
              srcSet={`${bahiaMobile} 800w, ${bahiaDesktop} 1365w`}
              sizes="(min-width: 901px) 42vw, 100vw"
              width={1365}
              height={2048}
              alt="Duas pessoas da JUMP diante de um mural que faz referência à Bahia."
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </section>
      <section className="founder-section">
        <div className={`${wrap} founder-grid`}>
          <div className="founder-nameplate">
            <p className="eyebrow">Por trás da JUMP / 04</p>
            <strong>Juliana Cardoso</strong>
            <span>Fundadora e diretora criativa</span>
          </div>
          <div className="founder-copy">
            <p>
              Sou estrategista digital e empreendedora, movida pela comunicação e pelas
              possibilidades que surgem quando diferentes talentos se conectam.
            </p>
            <p>
              Idealizei a JUMP para transformar essa visão em um coletivo criativo, onde pessoas,
              ideias e diferentes linguagens se encontram para construir projetos que vão além do
              óbvio.
            </p>
            <blockquote>
              “Afinal, o próximo salto pode ser muito maior quando damos ele juntos.”
            </blockquote>
          </div>
        </div>
      </section>
      <section className="page-cta">
        <div className={wrap}>
          <p className="eyebrow">Agora que você conhece a gente</p>
          <h2>
            Vamos criar
            <br />
            <em>algo juntos?</em>
          </h2>
          <Link to="/servicos" className="text-link">
            Conheça nossos serviços <Arrow />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
