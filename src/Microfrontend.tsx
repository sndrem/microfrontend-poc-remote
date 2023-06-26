import {Alert} from "@navikt/ds-react";
import styles from "./App.module.css";

const MicroFrontend = () => {
  return (
    <>
      <h2 className={styles.hotpink}>Microfrontend - Poc</h2>
      <p>Jeg er en liten mikrofrontend</p>
      <Alert variant="info">Jeg er en alert fra Aksel 👋</Alert>
      <ul>
        <li>Deltaker 1</li>
        <li>Deltaker 2</li>
        <li>Deltaker 3</li>
        <li>Deltaker 4</li>
        <li>Deltaker 5</li>
        <li>Deltaker 5</li>
      </ul>
    </>
  );
};

const Deltakerliste = () => {
  return <MicroFrontend />;
};

export default Deltakerliste;
