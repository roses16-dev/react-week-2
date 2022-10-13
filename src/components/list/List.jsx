import Todo from "../todo/Todo";
import { DivListWrap } from "./styled";

export default function List( {title, todoList} ){

    return  <>
            <DivListWrap>
                <h3>{title}</h3>
                <div className="itemWrap">{todoList.map(todo => <Todo todo={todo} key={todo.id}/>)}</div>
            </DivListWrap>
            </>

}

