import styles from "../assets/styles/modules/table-row.module.scss";
import Icon from "@mui/material/Icon";

function TableRow(props) {
  const isEditable = props.isEditable;
  if (isEditable) {
    return (
      <tr className={styles.row}>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            defaultValue={props.english}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            defaultValue={props.transcription}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            defaultValue={props.russian}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            defaultValue={props.tags}
          ></input>
        </td>
        <td className={styles.icons}>
          <button className={styles.iconBtn}>
            <Icon fontSize="small" className={styles.iconAccent} onClick={props.save}>
              save
            </Icon>
          </button>
          <button className={styles.iconBtn}>
            <Icon fontSize="small" className={styles.icon} onClick={props.cancel}>
              cancel
            </Icon>
          </button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr className={styles.row}>
        <td className={styles.cell}>{props.english}</td>
        <td className={styles.cell}>{props.transcription}</td>
        <td className={styles.cell}>{props.russian}</td>
        <td className={styles.cell}>{props.tags}</td>
        <td className={styles.icons}>
          <button className={styles.iconBtn}>
            <Icon fontSize="small" className={styles.iconAccent} onClick={props.edit}>
              edit
            </Icon>
          </button>
          <button className={styles.iconBtn}>
            <Icon fontSize="small" className={styles.icon} onClick={props.delete}>
              delete
            </Icon>
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
