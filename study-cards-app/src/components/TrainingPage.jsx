import React, { useState, useEffect } from "react";
import styles from "../assets/styles/modules/training-page.module.scss";
import Card from "./Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function TrainingPage(props) {
  const data = props.data;
  const [translated, setTranslated] = useState(null);
  const [count, setCount] = useState(props.count || 0);
  const [learned, setLearned] = useState(0);
  const [learnedWords, setLearnedWords] = useState(new Set())

  useEffect(() => {
    if(learnedWords.size){
      setLearned(learnedWords.size);  
    }
  }, [learnedWords]);

  const handleClick = (i) => {
    setLearnedWords(prev => new Set(prev.add(i)))
    if (translated != null) {
      setTranslated(null);
    } else {
      setTranslated(i);
    }
  };

  const handleCount = (i) => {
    setTranslated(null);
    if (i<0) {
      setCount(data.length-1);
    } else if (i>data.length-1) {
      setCount(0);
    } else {
      setCount(i);
    }
  } 

  return (
    <div className={styles.container}>
      <div className={styles.card}>
      <button className={styles.button} onClick={() => handleCount(count - 1)}>
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
      <button className={styles.button} onClick={() => handleCount(count + 1)}>
        <ArrowForwardIosIcon className={styles.icon} />
      </button>
      </div>
      <div className={styles.vocabulary}>
        <p>You increased your vocabulary by <span className={styles.vocabularyNumber}>{learned}</span> words</p>
      </div>
    </div>
  );
}

export default TrainingPage;
