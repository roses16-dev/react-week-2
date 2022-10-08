import Form from '../form/Form'
import List from '../list/List'

import { useSelector } from 'react-redux' 

export default function Layout(){

    const todoList = useSelector(state => state.todoList.todoList)

    return <>
    <Form/>
    <List title = 'WORKING...🤩' todoList = {todoList.filter( todo => !todo.isDone)} />
    <List title = 'DONE...😎' todoList = {todoList.filter( todo => todo.isDone)} />
    </>
}