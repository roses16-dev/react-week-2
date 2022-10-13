import styled from "styled-components"
import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/modules/todoList"

export default function Form() {

    const dispatch = useDispatch();

    const titleInput = useRef();
    const subtitleInput = useRef();


    const addList = () => {

        if( ! /^.{1,11}$/.test(titleInput.current.value) ) {
            alert('⛔제목은 최소 1자, 최대 11자만 입력할 수 있어요.')
            return 
        }

        if( ! /^.{1,50}$/.test(subtitleInput.current.value) ) {
            alert('⛔내용은 최소 1자, 50자만 입력할 수 있어요.')
            return 
        }

        dispatch(addTodo({
            title: titleInput.current.value,
            subtitle: subtitleInput.current.value
        }))

        titleInput.current.value = subtitleInput.current.value = ''
    }

    return <><DivSection>
    <input type="text" ref={titleInput}></input>
    <input type="text" ref={subtitleInput}></input>
    <input type="button" value="추가하기" onClick={addList}></input>
    </DivSection></>
 
}


const DivSection = styled.div`
    width:100%;
    height: 80px;

    background-color: #000000;
    border: 1px dashed #555555;

    color: #ffffff;

    text-align: center;
    vertical-align: center;
    line-height: 80px;

    input{
        height: 25px;
        border: 1px solid #ffffff;
        background-color: transparent;
        color: #ffffff;
        margin: 5px;
    }

`