import Header from "../components/header/Header";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux";

export default function Detail () {


    const todo = useSelector(state => state.todoList.todoList.filter(element => element.id === +(useParams().id)))[0]
    console.log(todo)
    return <>
            <Header />
            <DivSection>
                <div>
                    <h4>Id : {todo.id}</h4>
                    <h2>Title : {todo.title}</h2>
                    <h4>Subtitle : {todo.subtitle}</h4>
                </div>
                <div>
                    <Link to="/"><h4>↪ 이전으로</h4></Link>
                </div>
            </DivSection>
            
        </>

}

const DivSection = styled.div `
    width: 350px;
    height: 350px;
    margin: 15px auto;

    h2, h4{
        margin: 15px 5px;
        color: #000000;
    }
`