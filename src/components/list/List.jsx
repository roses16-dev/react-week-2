import { DivWrap } from "./styled";
import Todo from "../todo/Todo";

export default function List( {title, todoList} ){

    return  <>
            <DivWrap>
                <h3>{title}</h3>
                <div className="itemWrap">{todoList.map(todo => <Todo todo={todo} key={todo.id}/>)}</div>
            </DivWrap>
            </>

}

