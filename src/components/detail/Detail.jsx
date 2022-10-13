import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTodoByID } from "../../redux/modules/todoList";

import { DivDetailSection } from "./styled";


export default function Detail ({ id }) {
    
    
    const dispatch = useDispatch();
    dispatch(getTodoByID(+id))
    console.log(id)
    const todo = useSelector(state => state.todoList.todo);

    return <>
            <DivDetailSection>
                <div>
                    <h4>Id : {todo.id}</h4>
                    <h2>Title : {todo.title}</h2>
                    <h4>Subtitle : {todo.subtitle}</h4>
                </div>
                <div>
                    <Link to="/"><h4>↪ 이전으로</h4></Link>
                </div>
            </DivDetailSection>
            
        </>

}