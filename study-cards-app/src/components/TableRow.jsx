import React, { useState } from "react";
import styles from "../assets/styles/modules/table-row.module.scss";
import Icon from "@mui/material/Icon";

function TableRow(props) {
  let isEditable = props.isEditable;
  const [state, setState] = useState(props);

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.dataset.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    setState({
      ...props,
    });
    props.cancel();
  };

  const handleSave = () => {
    props.save(state)
    props.cancel();
  };

  if (isEditable) {
    return (
      <tr className={styles.row}>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={state.english}
            data-name={"english"}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={state.transcription}
            data-name={"transcription"}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={state.russian}
            data-name={"russian"}
          ></input>
        </td>
        <td className={styles.cell}>
          <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={state.tags}
            data-name={"tags"}
          ></input>
        </td>
        <td className={styles.icons}>
          <button className={styles.iconBtn}>
            <Icon
              fontSize="small"
              className={styles.iconAccent}
              onClick={handleSave}
            >
              save
            </Icon>
          </button>
          <button className={styles.iconBtn}>
            <Icon
              fontSize="small"
              className={styles.icon}
              onClick={handleCancel}
            >
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
            <Icon
              fontSize="small"
              className={styles.iconAccent}
              onClick={props.edit}
            >
              edit
            </Icon>
          </button>
          <button className={styles.iconBtn}>
            <Icon
              fontSize="small"
              className={styles.icon}
              onClick={props.delete}
            >
              delete
            </Icon>
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
