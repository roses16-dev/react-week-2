import styled from "styled-components";

export const DivTodoWrap = styled.div `
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