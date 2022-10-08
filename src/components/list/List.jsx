import styled from "styled-components";
// import { useSelector } from "react-redux";
import Todo from "../todo/Todo";


export default function List( {title, todoList} ){

    // const todoList = useSelector((state) => state.todoList.todoList) 
    return  <>
            <DivWrap>
                <h3>{title}</h3>
                <div className="itemWrap">{todoList.map(todo => <Todo todo={todo} key={todo.id}/>)}</div>
            </DivWrap>
            </>

}

const DivWrap = styled.div `

    h3{
        margin-bottom: 0px;
    }
    .itemWrap {
        display: flex;
        flex-wrap: wrap;
    }
`