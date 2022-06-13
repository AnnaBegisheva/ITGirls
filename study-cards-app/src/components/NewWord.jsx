import React, { useState, useEffect } from "react";
import styles from "../assets/styles/modules/table-row.module.scss";
import Icon from "@mui/material/Icon";
import useLocalStorage from "../hooks/useLocalStorage";

function NewWord(props) {
  const [state, setState] = useState(props);
  let dataArr = JSON.parse(localStorage.getItem("JSON"));
  const [data, setData] = useLocalStorage("JSON", dataArr);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState();

  useEffect(() => {
    if (disabled === false) {
      setDisabled(undefined);
      let newWord = {
        english: state.english,
        id: data.length > 0 ? +data[data.length - 1].id + 1 : 1,
        russian: state.russian,
        tags: state.tags,
        transcription: state.transcription,
      };
      const newData = [...data];
      setData([...newData, newWord]);
      setState(props);

      console.log("New word data:", newWord);
    }
  }, [disabled]);

  useEffect(() => {
    props.addWord(data);
  }, [data]);

  const handleChange = (event) => {
    event.stopPropagation();
    let value = event.target.value.trim().replace(/ +/g, " ");
    setState({
      ...state,
      [event.target.dataset.name]: value,
    });
  };

  const handleCancel = () => {
    setState(props);
  };

  const checkValidation = () => {
    const checkEnglish = (item) => {
      let arrWord = [];
      dataArr.forEach((element) => {
        arrWord.push(element["english"]);
      });

      if (state[item].length === 0) {
        return "The field is empty";
      } else if (arrWord.includes(state[item])) {
        return "The word is already in the dictionary";
      } else if (!/^[a-zA-Z]+$/.test(state[item])) {
        return "Only latin letters";
      } else {
        return undefined;
      }
    };

    const checkTranscription = (item) => {
      const length = state[item].length;
      if (length === 0) {
        return "The field is empty";
      } else if (state[item][length - 1] !== "]" || state[item][0] !== "[") {
        return "Use parentheses for transcription";
      } else {
        return undefined;
      }
    };

    const checkRussian = (item) => {
      if (state[item].length === 0) {
        return "The field is empty";
      } else if (!/^[а-яА-Я]+$/.test(state[item])) {
        return "Use only cyrillic letters";
      } else {
        return undefined;
      }
    };

    const newErrors = Object.keys(state).reduce((account, item) => {
      switch (item) {
        case "english":
          account = {
            ...account,
            [item]: checkEnglish(item),
          };
          break;
        case "transcription":
          account = {
            ...account,
            [item]: checkTranscription(item),
          };
          break;
        case "russian":
        case "tags":
          account = {
            ...account,
            [item]: checkRussian(item),
          };
          break;
        default:
          break;
      }
      return account;
    }, {});

    let d = false;
    Object.keys(newErrors).forEach((item) => {
      if (newErrors[item] !== undefined) {
        d = true;
      }
    });
    if (d !== disabled) {
      setDisabled(d);
    }
    setErrors(newErrors);
  };

  const handleSave = () => {
    checkValidation();
  };

  return (
    <tr className={styles.row}>
      <td className={styles.cell}>
        <input
          className={`${styles.input} ${
            errors.english === undefined ? "" : `${styles.error}`
          }`}
          type="text"
          onChange={handleChange}
          value={state.english}
          data-name={"english"}
        ></input>
      </td>
      <td className={styles.cell}>
        <input
          className={`${styles.input} ${
            errors.transcription === undefined ? "" : `${styles.error}`
          }`}
          type="text"
          onChange={handleChange}
          value={state.transcription}
          data-name={"transcription"}
        ></input>
      </td>
      <td className={styles.cell}>
        <input
          className={`${styles.input} ${
            errors.russian === undefined ? "" : `${styles.error}`
          }`}
          type="text"
          onChange={handleChange}
          value={state.russian}
          data-name={"russian"}
        ></input>
      </td>
      <td className={styles.cell}>
        <input
          className={`${styles.input} ${
            errors.tags === undefined ? "" : `${styles.error}`
          }`}
          type="text"
          onChange={handleChange}
          value={state.tags}
          data-name={"tags"}
        ></input>
      </td>
      <td className={styles.icons}>
        <button className={styles.iconBtn} disabled={disabled}>
          <Icon
            fontSize="small"
            className={styles.iconAccent}
            onClick={handleSave}
          >
            save
          </Icon>
        </button>
        <button className={styles.iconBtn}>
          <Icon fontSize="small" className={styles.icon} onClick={handleCancel}>
            cancel
          </Icon>
        </button>
      </td>
    </tr>
  );
}

export default NewWord;
