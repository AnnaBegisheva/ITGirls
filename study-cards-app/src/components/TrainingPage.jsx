import React, { useState } from "react";
import styles from "../assets/styles/modules/training-page.module.scss";
import data from "../assets/data.json";
import Card from "./Card";

function TrainingPage() {
  const [translated, setTranslated] = useState();

//   const handleClick = () => {
//     setTranslated(!translated);
//   }

  return (
    <div className={styles.container}>
      {data.map((card, i) => (
        <Card
          className={styles.row}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
          translated={translated === i}
          onClick={() => setTranslated(i)}
        ></Card>
      ))}
    </div>
  );
}

export default TrainingPage;
