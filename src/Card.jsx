import styled from "styled-components";

/* ========== TOKENS ========== */
const space = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
};

const radius = {
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
};

const transition = "all 0.2s ease";

const colors = {
  text: "#f8fafc",
  textSoft: "#cbd5e1",
  textStrong: "#e2e8f0",
};

const gradients = {
  card: `
    linear-gradient(145deg, hsl(221, 47%, 30%), hsl(221, 47%, 20%))
  `,
  bloque: `
    linear-gradient(135deg, hsl(161, 93%, 25%), hsl(161, 93%, 20%))
  `,
  diapositiva: `
    linear-gradient(135deg, hsl(221, 80%, 50%), hsl(221, 80%, 40%))
  `,
  formulario: `
    linear-gradient(135deg, hsl(0, 50%, 50%), hsl(0, 50%, 40%))
  `,
};

const margen = space.md;

/* ========== CARD BASE ========== */
const CardContainer = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
  overflow: hidden;

  padding: ${margen};
  gap: ${space.md};

  border-radius: ${radius.lg};
  border: 1px solid rgba(255, 255, 255, 0.08);

  background: ${gradients.card};
  color: ${colors.text};

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
  }
`;

/* ========== HEADER ========== */
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  gap: ${space.md};

  margin: -${margen};
  margin-bottom: 0;
  padding: ${margen};

  background: #00000086;
`;

const Titulo = styled.h3`
  margin: 0;

  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.3;

  color: ${colors.textStrong};
`;

const Icono = styled.img`
  height: 2.75rem;

  border-radius: ${radius.sm};
  background: rgba(255, 255, 255, 0.05);
`;

/* ========== STATS ========== */
const Stats = styled.div`
  display: grid;
  gap: ${space.xs};

  padding: ${space.sm};

  border-radius: ${radius.md};
  background: rgba(255, 255, 255, 0.03);
`;

const Dato = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.85rem;
  color: ${colors.textSoft};
`;

const Label = styled.span`
  opacity: 0.7;
`;

const Valor = styled.span`
  font-weight: 500;
  color: ${colors.text};
`;

/* ========== BLOQUES ========== */
const Bloques = styled.div`
  display: grid;
  gap: ${space.sm};
`;

const Sub = styled.div`
  display: flex;
  gap: ${space.sm};
`;

/* ========== BASE CHIP ========== */
const BaseChip = styled.a`
  flex: 1;

  padding: 0.45rem 0.7rem;

  border-radius: ${radius.sm};
  border: 1px solid rgba(255, 255, 255, 0.12);

  font-size: 0.75rem;
  font-weight: 600;

  text-decoration: none;
  color: white;

  cursor: pointer;
  transition: ${transition};

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
`;

/* ========== VARIANTES ========== */
const Bloque = styled(BaseChip).attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  background: ${gradients.bloque};
`;

const Diapositiva = styled(BaseChip)`
  background: ${gradients.diapositiva};
`;

const Formulario = styled(BaseChip)`
  background: ${gradients.formulario};
`;

/* ========== COMPONENTE ========== */
function Card({ card }) {
  return (
    <CardContainer>
      <Header>
        <Titulo>
          Clase {card.id}: {card.titulo}
        </Titulo>
        <Icono src={`/img/${card.icono}`} alt="" />
      </Header>

      <Stats>
        <Dato>
          <Label>Fecha</Label>
          <Valor>{card.fecha}</Valor>
        </Dato>

        <Dato>
          <Label>Modalidad</Label>
          <Valor>{card.modalidad}</Valor>
        </Dato>
      </Stats>

      <Bloques>
        <Sub>
          {card.bloques?.map((bloque, i) => (
            <Bloque key={i} href={bloque}>
              Bloque {i + 1}
            </Bloque>
          ))}

          {card.ayudantia && <Bloque href={card.ayudantia}>Ayudantía</Bloque>}
        </Sub>

        <Sub>
          <Diapositiva href={card.diapositiva}>Diapositiva</Diapositiva>

          <Formulario href={card.formulario}>Entregar tarea</Formulario>
        </Sub>
      </Bloques>
    </CardContainer>
  );
}

export default Card;
