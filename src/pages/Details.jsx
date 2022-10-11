import Header from "../components/header/Header";
import Detail from "../components/detail/Detail"
import { useParams } from "react-router-dom";

export default function Details () {

    const id = useParams().id

    return <>
            <Header />
            <Detail id={id}/> 
        </>
}
