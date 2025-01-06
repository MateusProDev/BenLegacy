import React, { useState } from "react";
import "./pagina5.css";

// Dados do produto
const product = {
  id: 1,
  name: "Smartwatch S8 Pro 2024",
  content: "📦 Entregamos para toda a Fortaleza",
  description: `
    💡 <strong>Funções:</strong><br />
    🩸 Pressão Sanguínea<br />
    🌬️ Oxigênio no Sangue<br />
    ❤️ Batimentos Cardíacos: mede seus batimentos e monitora sua saúde<br />
    📞 Chamadas: faz e recebe chamadas quando pareado com o celular<br />
    🔔 Notificações: avisa suas notificações de WhatsApp, Facebook, Instagram e mais<br />
    🏃‍♂️ Lembrete de Sedentarismo: notifica quando é hora de se exercitar<br />
    🔍 Encontrar seu celular: emite um som para localizar seu smartphone<br />
    😴 Monitor de Sono: avalia a qualidade do seu sono<br />
    🧮 Calculadora<br />
    ⏱️ Cronômetro<br /><br />

    🔧 <strong>Especificações técnicas:</strong><br />
    - Modelo: S8<br />
    - Tipo: Smartwatch<br />
    - Tela: 1,75" HD<br />
    - Resolução: 240x280<br />
    - Formato: Alumínio Prensado<br />
    - Bateria: 280mAh<br /><br />

    ⚠️ <strong>Atenção:</strong><br />
    - Não é à prova d'água, apenas resistente a respingos<br />
    - Não recomendado para mergulho, banho, água quente ou salgada<br />
    - Garantia apenas para defeitos de fábrica. Testamos todas as funções vitais.<br /><br />

    📦 <strong>Incluso na embalagem:</strong><br />
    - 1 relógio inteligente S8 PRO<br />
    - 1 cabo de carregamento magnético<br />
    - 1 manual do usuário<br />
    - 1 pulseira de silicone 44mm<br />
    - 1 pulseira de metal milanesa 44mm (opcional, escolha na variação)<br />
    - 1 película 3D<br />
  `,
  price: 139.99,
  variants: [
    { id: "azul", color: "Azul", imgSrc: "/img/azul.png" },
    { id: "rosa", color: "Rosa", imgSrc: "/img/rosa.png" },
    { id: "preto", color: "Preto", imgSrc: "/img/preto.jpeg" },
  ],
};

const Pagina5 = ({ addToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [notification, setNotification] = useState("");
  const [expandedDescription, setExpandedDescription] = useState(false);

  // Função para adicionar ao carrinho
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      selectedVariant,  // Passando a variante selecionada
      description: product.description, // Passando a descrição
    });
    setNotification("Item adicionado à sacola!");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <div className="pagina5-container">
      <div className="pagina5-seeHome">
        <h1>Mais Vendidos</h1>
        <p>Conheça os produtos mais vendidos</p>
      </div>
      <div className="pagina5-container box-pagina">
        <section key={product.id} className="produto">
          <h2>{product.name}</h2>
          <div className="boxPg1">
            {/* Exibe a imagem da variante selecionada */}
            <img src={selectedVariant.imgSrc} alt={selectedVariant.color} />
            <strong>{product.content}</strong>
            <div className="description">
              {expandedDescription ? (
                <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: product.description.slice(0, 150) + "...",
                  }}
                />
              )}
              <button
                className="toggle-description"
                onClick={() => setExpandedDescription(!expandedDescription)}
              >
                {expandedDescription ? "Ver menos" : "Ver mais"}
              </button>
            </div>
            <div className="variants">
              <p>Selecione a cor:</p>
              <div className="variant-options">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    className={`variant-button ${
                      selectedVariant.id === variant.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedVariant(variant)} // Atualiza a variante selecionada
                  >
                    {variant.color}
                  </button>
                ))}
              </div>
            </div>
            <div className="box-value">
              <span>R${product.price.toFixed(2)}</span>
              <button className="btn" type="button" onClick={handleAddToCart}>
                Adicionar a sacola
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Exibe a notificação após adicionar o item ao carrinho */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Pagina5;
