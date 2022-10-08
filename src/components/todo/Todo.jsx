import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleIsDone } from "../../redux/modules/todoList";
import { useNavigate } from "react-router-dom"

export default function Todo({ todo }){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const clickToggle = (event) => {
        event.stopPropagation()
        console.log('toggle')
        dispatch(toggleIsDone(todo.id))
        
    }

    const clickDelete = (event) => {
        event.stopPropagation()
        console.log('delete')
        dispatch(deleteTodo(todo.id))
    }

    const clickDetail = (event) => {
        navigate(`/detail/${todo.id}`)
    }

    return <>
        <DivBox onClick={clickDetail}>
            <div className="textwrap">
                <h4>{todo.title}</h4>
                <p>{todo.subtitle}</p>
            </div>
            <div className="buttonwrap">
                <input type="button" value={todo.isDone ? "취소" : "완료"} onClick={clickToggle}></input>
                <input type="button" value="삭제" onClick={clickDelete}></input>
            </div>
        </DivBox>
    </>
}


const DivBox = styled.div `
    width: 200px;
    height: 200px;
    border: 1px dashed;
    margin: 5px;

    h4, p{
        margin: 5px;
        color: #000000;
    }

    .textwrap{
        width: 100%;
        height: 150px;
        overflow: hidden;
    }
    .buttonwrap {
        width:100%;
        height:50px;
        text-align:center;
    }

    input{
        height: 25px;
        border: 1px dashed;
        background-color: transparent;
        margin: 5px;
    }

`