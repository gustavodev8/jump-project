import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Arrow, PageIntro, PageShell, wrap } from "@/components/site-shell";
import { SERVICES } from "@/data/content";

export const Route = createFileRoute("/servicos")({
  head: () => ({ meta: [{ title: "Serviços — JUMP" }] }),
  component: Services,
});

function Services() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash));
    if (!target) return;
    requestAnimationFrame(() =>
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" })),
    );
  }, []);

  return (
    <PageShell>
      <PageIntro
        dark
        eyebrow="Serviços / 02"
        title={
          <>
            Diferentes talentos.
            <br />
            <em>Novas possibilidades.</em>
          </>
        }
        description="Da estratégia à produção, reunimos as especialidades que o seu projeto precisa."
      />
      <section className="services-page">
        <div className={`${wrap} services-page-grid`}>
          <aside className="services-toc" aria-label="Índice de serviços">
            <p className="eyebrow">Índice</p>
            {SERVICES.map((service) => (
              <a key={service.slug} href={`#${service.slug}`}>
                {service.number} <span>{service.title}</span>
              </a>
            ))}
          </aside>
          <div className="services-detail">
            {SERVICES.map((service) => (
              <article id={service.slug} className="service-detail" key={service.slug}>
                <div className="service-detail-head">
                  <span>{service.number}</span>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-full">{service.full}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/contato" search={{ assunto: service.title }} className="text-link">
                  {service.cta} <Arrow />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-end">
        <div className={wrap}>
          <p className="eyebrow">Tem um desafio?</p>
          <h2>
            Vamos encontrar
            <br />
            <em>o caminho.</em>
          </h2>
          <Link to="/contato" className="button button-dark">
            Conte sua ideia <Arrow />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
