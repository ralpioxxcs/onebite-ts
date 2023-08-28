import { prependOnceListener } from "process";
import { Todo } from "../types";

interface Props extends Todo {
  onClickDelete: (id: number) => void;
  extra?: string;
}

export default function TodoItem(props: Props) {

  const onClickButton = () => {
    props.onClickDelete(props.id);
  }

  return (<div>
    {props.id}번: {props.content}
    <button onClick={onClickButton}>Delete</button>
  </div>
  );
}