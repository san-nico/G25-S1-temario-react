import styled from "styled-components";
import logo from "./assets/logo.png";

/* ========== NAVBAR ========== */
const NavbarWrapper = styled.nav`
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  display: flex;
  background: rgba(15, 23, 42, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: #e2e8f0;
  margin: 0;
`;
const Link = styled.a``;
const Fecha = styled.p``;
const Imagen = styled.img``;
const Contenido = styled.div`
  display: grid;
  gap: 0.5rem;
  align-items: left;

  align-content: center;
`;

function Navbar({ metadata }) {
  return (
    <NavbarWrapper>
      <Imagen src={logo}></Imagen>
      <Contenido>
        <Title>{metadata.titulo}</Title>
        <Link href={metadata.url}>{metadata.url}</Link>
        <Fecha>Última Actualización: {metadata.fecha}</Fecha>
      </Contenido>
    </NavbarWrapper>
  );
}

export default Navbar;
