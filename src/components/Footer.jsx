import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <footer className="footer">
      {/* Seção Principal */}
      <div className="footer-container">
        {/* Menu recolhível */}
        <div className="footer-menu">
          <button className="footer-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
          </button>
          <ul className={`footer-menu-items ${isMenuOpen ? "open" : ""}`}>
            <li><a href="/">Início</a></li>
            <li><a href="/about">Sobre Nós</a></li>
            <li><a href="/products">Produtos</a></li>
            <li><a href="/contact">Contato</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="./icons/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="./icons/instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="./icons/twitter-icon.png" alt="Twitter" />
          </a>
        </div>

        {/* Segurança e bandeiras de pagamento */}
        <div className="footer-payments-security">
          <div className="security">
            <img src="./icons/security-icon.png" alt="Site Seguro" />
            <span>Site 100% Seguro</span>
          </div>
          <div className="payment-flags">
            <img src="./icons/visa.png" alt="Visa" />
            <img src="./icons/mastercard.png" alt="MasterCard" />
            <img src="./icons/pix.png" alt="Pix" />
            <img src="./icons/elo.png" alt="Elo" />
          </div>
        </div>
      </div>

      {/* Texto final de direitos reservados */}
      <div className="footer-bottom">
        <p>© 2025 BenLegacy. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
