import { prependOnceListener } from "process";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props extends Todo {
  //onClickDelete: (id: number) => void;
  //extra?: string;
}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();

  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  }

  return (<div>
    {props.id}번: {props.content}
    <button onClick={onClickButton}>Delete</button>
  </div>
  );
}