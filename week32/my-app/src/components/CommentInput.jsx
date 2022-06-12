import "../App.css";
import { useState } from "react";
import Comment from "./Comment";

function Input() {
  const [input, setInput] = useState();
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      alert('Add some text to comment');
      return;
    }

    const validComment = input.replace(/viagra|xxx/gi, "***");
    const newComment = [validComment, ...comments];
    setComments(newComment);
    setInput("");
  };

  return (
    <div className="container">
        {comments.map((comment, i) => (
        <Comment
          key={i}
          comment={comment}
        ></Comment>
      ))}
      <form className="form">
        <label className="label">
          Add comment:
          <textarea
            rows="5"
            cols="50"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </label>
        <button type="submit" className="button" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
}

export default Input;
