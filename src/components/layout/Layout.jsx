import List from '../list/List'

import { useSelector } from 'react-redux' 

export default function Layout(){

    const todoList = useSelector(state => state.todoList.todoList)

    return <>
    <List title = 'WORKING...🤩' todoList = {todoList.filter( todo => !todo.isDone)} />
    <List title = 'DONE...😎' todoList = {todoList.filter( todo => todo.isDone)} />
    </>
}