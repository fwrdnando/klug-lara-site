import { FaWhatsapp } from "react-icons/fa";
import whatsappIcon from "./assets/whats.png";
import instagramIcon from "./assets/instagram.png";
import emailIcon from "./assets/email.png";
import localizaIcon from "./assets/localiza.png";
import { useEffect, useState } from "react";
import "./App.css";
import equipe from "./assets/equipe.jpeg";
import jamille from "./assets/jamille.jpeg";
import luisSentado from "./assets/luis_sentado.jpeg";
import luisSerio from "./assets/luis_serio.jpeg";
import mariPe from "./assets/mari_pe.jpeg";
import mariSentada from "./assets/mari_sentada.jpeg";
import logoAzul from "./assets/logo_azul.png";
import logoCinza from "./assets/logo_cinza.png";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          <div className="logo">
            <img src={logoCinza} alt="Klug & Lara" className="logo-img" />
          </div>
          <div className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#areas">Atuação</a>
            <a href="#equipe">Equipe</a>
            <a href="#contato">Contato</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg-glow" />
        <div className="hero-content">
          <img src={logoAzul} alt="Klug & Lara" className="hero-logo" />
          <p>
            Soluções jurídicas com atendimento personalizado,
            atuação estratégica e compromisso com resultados.
          </p>
          <a
  
>
 
 
</a>
        </div>

        <div className="hero-image">
          <img src={equipe} alt="Equipe Klug & Lara" />
        </div>
      </header>

      <section id="sobre" className="section">
  <h2>Sobre o Escritório</h2>

  <div className="about-highlights">
    <div className="highlight-card">
      <span>10+</span>
      <p>Anos de Experiência</p>
    </div>

    <div className="highlight-card">
      <span>✓</span>
      <p>Atendimento Personalizado</p>
    </div>

    <div className="highlight-card">
      <span>◈</span>
      <p>Consultoria Online</p>
    </div>

    <div className="highlight-card">
      <span>⚖</span>
      <p>Excelência Jurídica</p>
    </div>
  </div>

  <div className="about-content">
          <p>
            O Escritório de Advocacia e Consultoria Klug & Lara foi idealizado
            pelos sócios Jamille Klug e Luís Lara, com o propósito de oferecer
            serviços jurídicos de qualidade e competência, priorizando a
            pessoalidade e a empatia para com os seus clientes.
          </p>
          <p>
            Embora ambos já atuassem no direito de maneira individual, em 2016
            resolveram reunir forças e colocar em prática o seu projeto de
            negócios, visando o atendimento individualizado e a humanização do
            trabalho jurídico.
          </p>
          <p>
            Neste tempo, o escritório já atuou em milhares de casos, com
            pessoas físicas e jurídicas, sempre na busca dos melhores resultados.
          </p>
          <p>
            Com atuação voltada ao direito privado, o escritório atua em
            diversas áreas, visto que em sua maioria as matérias se entrelaçam.
          </p>
        </div>
      </section>

      <section id="areas" className="section">
        <h2>Áreas de Atuação</h2>
        <div className="cards">
          <div className="card">
            <h3>Assessoria Jurídica à Empresas</h3>
            <p>Atendimento jurídico completo para empresas, com atuação preventiva e contenciosa.</p>
          </div>
          <div className="card">
            <h3>Direito Contratual</h3>
            <p>Elaboração, revisão e acompanhamento durante toda a negociação de contratos.</p>
          </div>
          <div className="card">
            <h3>Direito de Família e Sucessões</h3>
            <p>Divórcios, guarda, alimentos, inventários e planejamento sucessório.</p>
          </div>
          <div className="card">
            <h3>Direito do Consumidor</h3>
            <p>Orientação administrativa e judicial em relações consumeristas.</p>
          </div>
          <div className="card">
            <h3>Direito Previdenciário</h3>
            <p>Aposentadorias, revisões e benefícios previdenciários.</p>
          </div>
          <div className="card">
            <h3>Direito Civil</h3>
            <p>Consultoria, prevenção de litígios e atuação judicial.</p>
          </div>
          <div className="card">
            <h3>Responsabilidade Civil</h3>
            <p>Atuação em demandas indenizatórias e reparação de danos.</p>
          </div>
          <div className="card">
            <h3>Direito Trabalhista</h3>
            <p>Atuação preventiva e corretiva para empresas e trabalhadores.</p>
          </div>
        </div>
      </section>

      <section id="equipe" className="section">
        <h2>Nossa Equipe</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo">
              <img src={luisSentado} className="photo-main" alt="Luís Lara" />
              <img src={luisSerio} className="photo-hover" alt="Luís Lara" />
            </div>
            <div className="team-info">
              <h3>Dr. Luís Lara</h3>
              <p>Sócio Fundador</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo single">
              <img src={jamille} className="photo-main" alt="Jamille Klug" />
            </div>
            <div className="team-info">
              <h3>Dra. Jamille Klug</h3>
              <p>Sócia Fundadora</p>
            </div>
          </div>
          <div className="team-card">
            <div className="team-photo">
              <img src={mariPe} className="photo-main" alt="Mariluz Costa" />
              <img src={mariSentada} className="photo-hover" alt="Mariluz Costa" />
            </div>
            <div className="team-info">
              <h3>Dra. Mariluz Costa</h3>
              <p>Advogada Associada</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="footer-contact">

  <div className="footer-container">

    <div className="footer-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8687691284376!2d-51.168071325142336!3d-30.040622531097977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519770010f3128b%3A0x9994fd6b04c94997!2sKlug%20%26%20Lara%20Escrit%C3%B3rio%20De%20Advocacia!5e0!3m2!1spt-BR!2sbr!4v1781796477779!5m2!1spt-BR!2sbr"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <div className="footer-info">

      <img
        src={logoAzul}
        alt="Klug & Lara"
        className="footer-main-logo"
      />

      <div className="footer-links">

        <div className="footer-link">
          <img src={localizaIcon} alt="" />
          <div>
            <h4>Endereço</h4>
            <p>
              Avenida Protásio Alves, 4629<br />
              Sala 204 - Chácara das Pedras<br />
              Porto Alegre/RS
            </p>
          </div>
        </div>

        <div className="footer-link">
          <img src={whatsappIcon} alt="" />
          <div>
            <h4>WhatsApp</h4>
            <p>(51) 99274-4008</p>
          </div>
        </div>

        <div className="footer-link">
          <img src={emailIcon} alt="" />
          <div>
            <h4>E-mail</h4>
            <p>klug.lara.adv@gmail.com</p>
          </div>
        </div>

        <div className="footer-link">
          <img src={instagramIcon} alt="" />
          <div>
            <h4>Instagram</h4>
            <p>@advocaciakluglara</p>
          </div>
        </div>

      </div>

    </div>

  </div>

  <div className="footer-bottom">
    © 2026 Klug & Lara Advocacia e Consultoria. Todos os direitos reservados.
  </div>

</section>

      <a
  href="https://wa.me/5551992744008"
  target="_blank"
  rel="noreferrer"
  className="whatsapp"
>
  <FaWhatsapp />
  <span>WhatsApp</span>
</a>
    </>
  );
}

export default App;
