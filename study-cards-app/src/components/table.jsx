import styles from "../assets/styles/modules/table.module.scss";
import TableRow from "./TableRow";
import data from "../assets/data.json";

function Table() {
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
          {data.map((tr) => (
            <TableRow className={styles.row}
              english={tr.english}
              transcription={tr.transcription}
              russian={tr.russian}
              tags={tr.tags}
            ></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
