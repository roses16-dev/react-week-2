import { useDispatch } from "react-redux";
import { deleteTodo, toggleIsDone } from "../../redux/modules/todoList";
import { useNavigate } from "react-router-dom"
import { DivTodoWrap } from "./styled";

export default function Todo({ todo }){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const clickToggle = (event) => {
        event.stopPropagation()
        dispatch(toggleIsDone(todo.id))
        
    }

    const clickDelete = (event) => {
        event.stopPropagation()
        dispatch(deleteTodo(todo.id))
    }

    const clickDetail = (event) => {
        navigate(`/details/${todo.id}`)
    }

    return <>
        <DivTodoWrap onClick={clickDetail}>
            <div className="textwrap">
                <h4>{todo.title}</h4>
                <p>{todo.subtitle}</p>
            </div>
            <div className="buttonwrap">
                <input type="button" value={todo.isDone ? "취소" : "완료"} onClick={clickToggle}></input>
                <input type="button" value="삭제" onClick={clickDelete}></input>
            </div>
        </DivTodoWrap>
    </>
}
