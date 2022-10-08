import styled from "styled-components"

export default function Header () {

    

    return <DivHeader><h1>Todo List</h1><span>React</span></DivHeader>
}


const DivHeader = styled.div `
    width: 100%;
    height: 200px;
    background-color: #000000;
    color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    h1{
        margin: 0px;
    }

`