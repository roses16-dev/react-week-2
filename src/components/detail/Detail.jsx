import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { DivSection } from "./styled";

export default function Detail ({id}) {
    
    const todo = useSelector(state => state.todoList.todoList.find(element => element.id === +id));

    return <>
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