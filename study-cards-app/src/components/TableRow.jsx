import styles from "../assets/styles/modules/table-row.module.scss";
import Icon from '@mui/material/Icon';

function TableRow(props) {
  return (
      <tr className={styles.row}>
        <td className={styles.cell}>{props.english}</td>
        <td className={styles.cell}>{props.transcription}</td>
        <td className={styles.cell}>{props.russian}</td>
        <td className={styles.cell}>{props.tags}</td>
        <td className={styles.icons}>
        <Icon fontSize="small" className={styles.icon}>edit</Icon>
        <Icon fontSize="small" className={styles.icon}>delete</Icon>
        </td>
      </tr>
  );
}

export default TableRow;
