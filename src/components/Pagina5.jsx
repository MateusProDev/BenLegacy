import React, { useState } from "react";
import "./pagina5.css";

const products = [
  {
    id: 1,
    name: "Smartwatch S8 pro 2024 Azul",
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
    price: 27.99,
    imgSrc: "/img/azul.png",
  },
  {
    id: 2,
    name: "Smartwatch S8 pro 2024 Rosa",
    content: "📦 Entregamos para a sua região",
    description: `
      💡 <strong>Funções:</strong><br />
      🩸 Pressão Sanguínea<br />
      🌬️ Oxigênio no Sangue<br />
      ❤️ Batimentos Cardíacos: mede seus batimentos e monitora sua saúde<br />
      📞 Chamadas: faz e recebe chamadas quando pareado com o celular<br />
      🔔 Notificações: avisa suas notificações de WhatsApp, Facebook, Instagram e mais<br />
      🏃‍♀️ Lembrete de Sedentarismo: notifica quando é hora de se exercitar<br />
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
    price: 27.99,
    imgSrc: "/img/rosa.png",
  },
  {
    id: 3,
    name: "Smartwatch S8 pro 2024 Preto",
    content: "📦 Entregamos para a sua região",
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
    price: 27.99,
    imgSrc: "/img/preto.jpeg",
  },
];

const Pagina5 = ({ addToCart }) => {
  const [notification, setNotification] = useState("");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const handleToggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
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
        {products.map((product) => (
          <section key={product.id} className="produto">
            <h2>{product.name}</h2>
            <div className="boxPg1">
              <img src={product.imgSrc} alt={product.name} />
              <strong>{product.content}</strong>
              <div className="description">
                {expandedDescriptions[product.id] ? (
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
                  onClick={() => handleToggleDescription(product.id)}
                >
                  {expandedDescriptions[product.id] ? "Ver menos" : "Ver mais"}
                </button>
              </div>
              <div className="box-value">
                <span>R${product.price.toFixed(2)}</span>
                <button
                  className="btn"
                  type="button"
                  onClick={() => handleAddToCart(product)}
                >
                  Adicionar a sacola
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Pagina5;
