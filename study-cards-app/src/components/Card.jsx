import React, { useEffect, useRef } from "react";
import styles from "../assets/styles/modules/card.module.scss";

function TranslateButton(props) {
  const inputReference = useRef(null);
  useEffect(() => {
    inputReference.current.focus();
  }, []);
  return (
    <button onClick={props.onClick} className={styles.button} ref={inputReference}>
      Translate
    </button>
  );
}

function Translation(props) {
  return (
    <div onClick={props.onClick} className={styles.translation}>
      {props.russian}
    </div>
  );
}

function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.english}>{props.english}</div>
      <div className={styles.transcription}>{props.transcription}</div>
      {props.translated ? (
        <Translation russian={props.russian} onClick={props.onClick} />
      ) : (
        <TranslateButton onClick={props.onClick} />
      )}
    </div>
  );
}

export default Card;
