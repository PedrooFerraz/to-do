import React, { useEffect, useState } from "react";
import List from "./components/List";
import Item from "./components/Item";
import "./To-do.css"
import Header from "./components/Header";
import Modal from "./components/Modal"
import TodoForm from "./components/TodoForm";

const SAVED_ITEMS = "saveditems"

function Todo() {

    const [items, setItems] = useState(()=>{
        if(localStorage.getItem(SAVED_ITEMS)){
            return JSON.parse(localStorage.getItem(SAVED_ITEMS))
        }
        else{
            return [];
        }

    })

    const [showModal, setShowModal] = useState(false)

    useEffect(()=>{

        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))

        if(savedItems){
            setItems(savedItems)
        }

    }, [])

    useEffect(()=>{

        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))

    }, [items])

    function onAddItem(text){

        let item = new Item(text)

        setItems([...items, item])
        onHideModal()
    }

    function onItemDeleted(item){

        let filteredItems = items.filter((it) => it.id !== item.id)
        setItems(filteredItems)

    }

    function onDone(item){
    
        let updateditems = items.map(it => {
            if(it.id === item.id){
                it.done = !it.done
            }
            return it;
        })

        setItems(updateditems)
    }

    function onHideModal(){
        setShowModal(false)
    }

    function onButtonClick(){
        setShowModal(true)
    }

    return (

        <div className="container">
            <Header onButtonClick={onButtonClick}></Header>
            <List onDone={onDone} items={items} onItemDeleted={onItemDeleted}></List>
            <Modal onHideModal={onHideModal} show={showModal} onAddItem={onAddItem}><TodoForm onAddItem={onAddItem} formTitle = "Adicionar Tarefa"></TodoForm></Modal>
        </div>

    );
}



export default Todo

