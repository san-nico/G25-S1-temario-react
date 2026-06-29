import styled from "styled-components";
import "./App.css";

import contenido from "./contenido/contenido.json";
import Card from "./components/Card/Card";
import CardNull from "./CardNull";
import procesarClase from "./utils/procesarClases";

import Navbar from "./Navbar";

/* ========== LAYOUT PRINCIPAL ========== */
const AppWrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(
    circle at top,
    #0b1220 0%,
    #070a12 60%,
    #05060a 100%
  );
  color: white;
`;
/* ========== GRID ========== */
const CardHolder = styled.section`
  display: grid;
  gap: 1.25rem;

  grid-template-columns: repeat(auto-fit, minmax(min-content, 21rem));

  align-items: start;
  width: min(100%, 100rem);
  justify-self: center;
  margin: auto;

  justify-content: center;
`;

/* ========== CONTENIDO ========== */
const Main = styled.main`
  padding: 2rem 1.5rem;
  display: grid;
  gap: 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar metadata={contenido.metadata} />

      <Main>
        <CardHolder>
          {contenido.clases.map((item, index) =>
            item.vigente ? (
              <Card key={item.id ?? index} card={procesarClase(item)} />
            ) : (
              <CardNull key={item.id ?? index} card={procesarClase(item)} />
            ),
          )}
        </CardHolder>
      </Main>
    </AppWrapper>
  );
}

export default App;
