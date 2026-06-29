import styled from "styled-components";

/* ========== CARD ========== */
const CardContainer = styled.div`
  border-radius: 12px;
  background: none;

  color: gray;
  display: grid;
  padding: 1.25rem;
  align-content: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.115);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  grid-row: span 3;
  height: 100%;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }
`;

const Titulo = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  color: #e2e8f0;
`;

/* ========== COMPONENTE ========== */
function Card({ card }) {
  return (
    <CardContainer>
      <Titulo>
        Clase {card.id}: {card.titulo}
      </Titulo>
    </CardContainer>
  );
}

export default Card;
