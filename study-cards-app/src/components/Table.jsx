import React, { useState } from "react";
import styles from "../assets/styles/modules/table.module.scss";
import NewWord from "./NewWord";
import TableRow from "./TableRow";
// import words from '../assets/data.json'

function Table() {
  const [editable, setEditable] = useState();
  // localStorage.setItem('JSON', JSON.stringify(words));
  let dataArr = JSON.parse(localStorage.getItem("JSON"));
  const [data, setData] = useState(dataArr);

  const handleDelete = (i) => {
    const newData = [...data];
    newData.splice(i, 1);
    setData(newData);
    localStorage.setItem("JSON", JSON.stringify(newData));
  };

  const handleSave = (state) => {
    const newData = [...data];
    newData.forEach((element) => {
      if (element.id === state.id) {
        for (const key in element) {
          if (Object.hasOwnProperty.call(element, key)) {
            element[key] = state[key];
          }
        }
      }
    });
    localStorage.setItem("JSON", JSON.stringify(newData));
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr className={styles.row}>
            <th className={styles.cell}>Word</th>
            <th className={styles.cell}>Transcription</th>
            <th className={styles.cell}>Translation</th>
            <th className={styles.cell}>Tags</th>
            <th className={styles.cell}>Edit</th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          <NewWord
            className={styles.row}
            english={""}
            transcription={""}
            russian={""}
            tags={""}
            addWord={(newData) => setData(newData)}
          />
          {data.map((tr, i) => (
            <TableRow
              key={tr.id}
              id={tr.id}
              className={styles.row}
              english={tr.english}
              transcription={tr.transcription}
              russian={tr.russian}
              tags={tr.tags}
              isEditable={editable === i}
              edit={() => setEditable(i)}
              cancel={() => setEditable(!editable)}
              delete={() => handleDelete(i)}
              save={(state) => handleSave(state, setEditable)}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
