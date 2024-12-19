import classes from './Card.Module.css';

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;