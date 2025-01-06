import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialMedia from "./SocialMedias";
import "./NavBar.css";

const NavBar = ({ cart, total, addToCart, removeFromCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(cart.length);
  const [cepInput, setCepInput] = useState(""); // Armazenar o CEP inserido
  const [deliveryFee, setDeliveryFee] = useState(0); // Taxa de entrega
  const [freteMessage, setFreteMessage] = useState(""); // Mensagem de frete

  const referenceCep = "60835225"; // CEP de Abreulândia
  const referenceCoordinates = { lat: -3.681991, lng: -38.526607 }; // Coordenadas de Abreulândia (exemplo)

  const kmRate = 0.50; // 50 centavos por quilômetro
  const maxFreteValue = 50.0; // Máximo valor do frete R$50.00

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setCartOpen(false);
  };

  const handleCartToggle = () => {
    setCartOpen(!isCartOpen);
    setMenuOpen(false);
  };

  const handleFinalizePurchase = () => {
    const message = cart
      .map((item) => {
        // Verificar se o item tem uma variante e incluir essa informação
        const variantInfo = item.selectedVariant ? `(Cor: ${item.selectedVariant.color})` : '';
        return `${item.name} ${variantInfo} - R$${item.price.toFixed(2)}`;
      })
      .join("\n");
    const totalValue = (Number(total) + deliveryFee).toFixed(2);
    const whatsappMessage = `Desejo concluir meu pedido:\n\n${message}\n\nTaxa de entrega: R$${deliveryFee.toFixed(
      2
    )} \nTotal: R$${totalValue}\n\nPreencha as informações:\n\nNome:\nEndereço:\nForma de pagamento:\nPix, Débito, Crédito`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5585991470709&text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleCepChange = async (event) => {
    setCepInput(event.target.value);

    if (event.target.value.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${event.target.value}/json/`);
        const { localidade, uf, logradouro } = response.data;

        // Obter coordenadas geográficas do CEP inserido
        const userCoordinates = await getCoordinatesFromCep(event.target.value);

        // Calcular a distância entre as coordenadas
        const distance = calculateDistance(referenceCoordinates, userCoordinates);

        // Calcular o valor do frete
        let fee = distance * kmRate;

        // Se o valor do frete for maior que o máximo permitido (R$ 50), mostrar "FRETE A CALCULAR"
        if (fee > maxFreteValue) {
          setFreteMessage("FRETE A CALCULAR");
          setDeliveryFee(0);
        } else {
          setFreteMessage(`Taxa de entrega: R$${fee.toFixed(2)}`);
          setDeliveryFee(fee);
        }
      } catch (error) {
        setFreteMessage("Erro ao buscar CEP, Finalize suas compras, entraremos em contato");
        setDeliveryFee(0);
      }
    }
  };

  // Função para obter coordenadas geográficas a partir do CEP (Google Maps Geocoding API)
  const getCoordinatesFromCep = async (cep) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${cep},+BR&key=YOUR_GOOGLE_MAPS_API_KEY`
      );
      if (response.data.results.length > 0) {
        const location = response.data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      } else {
        throw new Error("Não foi possível obter coordenadas para este CEP.");
      }
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
      return null;
    }
  };

  // Função para calcular a distância entre dois pontos geográficos
  const calculateDistance = (coords1, coords2) => {
    const R = 6371; // Raio da Terra em km
    const dLat = (coords2.lat - coords1.lat) * (Math.PI / 180);
    const dLng = (coords2.lng - coords1.lng) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coords1.lat * (Math.PI / 180)) *
        Math.cos(coords2.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distância em km
    return distance;
  };

  const navigate = useNavigate();

  useEffect(() => {
    setCartItemCount(cart.length);
  }, [cart]);

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="logo-container">
        <img
          src="./img/LOGORELO.png"
          alt="Logo"
          className="logo"
          onClick={() => navigate("/")}
        />
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/pizzas">Pizzas</Link>
        </li>
        <li>
          <Link to="/burguers">Pastéis</Link>
        </li>
        <li>
          <Link to="/calzones">Calzones</Link>
        </li>
        <li>
          <Link to="/bebidas">Bebidas</Link>
        </li>
        <li>
          <Link to="/MaisVendidos">+Vendidos</Link>
        </li>
        <div>
          <SocialMedia />
        </div>
      </ul>
      <div className="boxCar" onClick={handleCartToggle}>
        <img src="./img/sacola.png" alt="Cart" className="cart-icon" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </div>
      <section className={`carinho_compras ${isCartOpen ? "open" : ""}`}>
        <h2 id="titleCar">Sacola</h2>
        <div className="carrinho-itens" id="carrinho-tbody">
          {cart.length === 0 ? (
            <p className="priceCar">Sua sacola está vazia</p>
          ) : (
            cart.map((item, index) => (
              <div className="car-itens" key={index}>
                <span className="priceCar">
                  {item.name}
                  {item.selectedVariant && <span> (Cor: {item.selectedVariant.color})</span>} {/* Exibindo a cor */}
                  - R${item.price.toFixed(2)}
                </span>
                <button id="removerCar" onClick={() => removeFromCart(index)}>
                  X
                </button>
                <hr />
              </div>
            ))
          )}
        </div>
        <div className="total-carrinho">
          <label>
            <strong className="car-tl">Digite o CEP:</strong>
            <input
              type="text"
              maxLength="8"
              value={cepInput}
              onChange={handleCepChange}
              className="cep-input"
              placeholder="CEP"
            />
          </label>
          <div className="car-box">
            <p className="car-taxa">
              <strong>{freteMessage}</strong>
            </p>
            <div className="car-total">
              <strong>Total:</strong>
              <span id="total-carrinho">
                {" R$" + (Number(total) + deliveryFee).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
        <button className="btnCar" type="button" onClick={handleFinalizePurchase}>
          Finalizar Compra
        </button>
      </section>
      <div className="menu-icon" onClick={handleMenuToggle}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
};

export default NavBar;
