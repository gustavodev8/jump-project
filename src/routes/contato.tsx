import { createFileRoute } from "@tanstack/react-router";
import { Arrow, PageShell, wrap } from "@/components/site-shell";
import { INSTAGRAM_URL } from "@/data/content";

export const Route = createFileRoute("/contato")({
  head: () => ({ meta: [{ title: "Contato — JUMP" }] }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <section className="contact-page">
        <div className={wrap}>
          <p className="eyebrow">Contato / 04</p>
          <h1>
            Boas ideias
            <br />
            <em>começam com uma conversa.</em>
          </h1>
          <p className="contact-lede">
            Tem uma ideia, um desafio ou vontade de criar junto? Fale com a JUMP. Escolha o caminho
            que combina com você e vamos começar a conversa.
          </p>
          <div className="contact-options">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
            >
              <span className="eyebrow">Para marcas e projetos</span>
              <h2>
                Quero contratar
                <br />a JUMP <Arrow />
              </h2>
              <p>Tenho uma marca, evento ou projeto e quero criar com vocês.</p>
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
            >
              <span className="eyebrow">Para profissionais e criativos</span>
              <h2>
                Quero fazer
                <br />
                parte <Arrow />
              </h2>
              <p>Sou profissional ou criativo e quero me conectar ao coletivo.</p>
            </a>
          </div>
          <div className="contact-instagram">
            <p>Fale com a gente pelo Instagram</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              @jumprodutora <Arrow />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
