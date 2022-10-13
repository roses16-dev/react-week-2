import { useRef } from "react";
import { useDispatch } from "react-redux"
import { addTodo } from "../../redux/modules/todoList"
import { DivSection } from "./styled"

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

