import "../App.css";

function Comment(props) {
  return (
    <div className="comment">
      <p>{props.comment}</p>
    </div>
  );
}

export default Comment;
