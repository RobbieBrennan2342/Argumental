import ReactDOM from "react-dom";
import classes from "../styling/Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes.modalBackdrop}></div>;
};

const Modalbox = (props) => {
  return <div className={classes.modalContent}>{props.children}</div>;
};
function Modal(props) {
  return ReactDOM.render(<BackDrop />, document.getElementById("overlay"));
}

export default Modal;
