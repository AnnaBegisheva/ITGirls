import React, { useState } from "react";
// import Carousel from 'react-material-ui-carousel'
import styles from "../assets/styles/modules/training-page.module.scss";
import data from "../assets/data.json";
import Card from "./Card";

function TrainingPage() {
  const [translated, setTranslated] = useState();
  console.log(translated);

  const handleClick = (i) => {
    if (translated != null) {
        setTranslated(null);    
    } else {
        setTranslated(i);
    }
}

  return (
    <div className={styles.container}>  
      {data.map((card, i) => (
        <Card
          className={styles.row}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
          translated={translated === i}
          onClick={() => handleClick(i)}
        ></Card>
      ))}   
    </div>
  );
}

export default TrainingPage;
