import css from "./styles.module.css";
import { Container } from "..";
import { FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className={css.nav}>
      <Container sx={css.items}>
        <h3>Giffy</h3>
      </Container>
    </div>
  );
};
