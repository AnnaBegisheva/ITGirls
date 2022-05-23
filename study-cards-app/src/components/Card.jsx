import styles from "../assets/styles/modules/card.module.scss";

function TranslateButton(props) {
  return (
    <button onClick={props.onClick} className={styles.button}>
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
