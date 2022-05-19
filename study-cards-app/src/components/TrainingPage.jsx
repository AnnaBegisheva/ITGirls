import React, { useState } from "react";
// import Carousel from 'react-material-ui-carousel'
import styles from "../assets/styles/modules/training-page.module.scss";
import Card from "./Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TrainingPage(props) {
  const [translated, setTranslated] = useState(0);
  const [count, setCount] = useState(props.count || 0);
  const data = props.data;

  const handleClick = (i) => {
    if (translated != null) {
      setTranslated(null);
    } else {
      setTranslated(i);
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => setCount(count - 1)}>
        <ArrowBackIosIcon className={styles.icon} />
      </button>
      {data.map((card, count) => (
        <Card
          key={count}
          className={styles.row}
          english={card.english}
          transcription={card.transcription}
          russian={card.russian}
          translated={translated === count}
          onClick={() => handleClick(count)}
        ></Card>
      ))[count]}
      <button className={styles.button} onClick={() => setCount(count + 1)}>
        <ArrowForwardIosIcon className={styles.icon} />
      </button>
    </div>
  );
}

export default TrainingPage;
