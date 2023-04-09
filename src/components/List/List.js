import React, { useState } from 'react'
import style from "./style.module.css"
import ListItem from './ListItem'
import ShowMessage from '../ShowMessage'

function List() {
    const [list, setList] = useState([])
    const [item, setItem] = useState("")
    const [isEdited, setIsEdited] = useState(false)
    const [itemId, setItemId] = useState(0)

    const [isExist, setIsExist] = useState(false)
    const [message, setMessage] = useState("")
    const [errorBg, setErrorBg] = useState(false)



    const addToList = (e) => {
        setTimeout(() => {
            setIsExist(false)
        }, 1500);
        e.preventDefault()

        // checking for isEdit true or false
        if (!isEdited) {
            if (!item) {
                setErrorBg(false)
                setIsExist(true)
                setMessage("Please fill the blank")
                return
            }

            // CREATING NEW ITEM
            const newItem = {
                id: new Date().getTime(),
                checked: false,
                item,
            }
            // setting value
            setList([...list, newItem])
            // resetting item value
            setItem("")
            setIsExist(true)
            setMessage("added successfully to the list!")
            setErrorBg(true)
        } else {
            const clickedEditedItem = list.filter((listItem) => {
                return listItem.id === itemId
            })
            clickedEditedItem[0].item = item
            clickedEditedItem[0].changed = true
            setIsEdited(false)
            setIsExist(true)
            setItem("")
            setMessage("Edited successfully !")
            console.log(list);
        }

    }
    const removeItem = (id) => {
        if (isEdited) {
            setIsExist(true)
            setErrorBg(false)
            setMessage("please edit !")
            return
        }
        const newList = list.filter(list => list.id !== id)
        setList(newList)
        setIsExist(true)
        setMessage("removed from the list!")
        setErrorBg(false)

        // ! setting is exist to false
        setTimeout(() => {
            setIsExist(false)
        }, 1500);

    }
    const clearList = () => {
        if (isEdited) {
            return
        }
        setList([])
        setIsExist(true)
        setMessage("removed from the list!")
        setErrorBg(false)

        // ! setting is exist to false
        setTimeout(() => {
            setIsExist(false)
        }, 1500);

    }
    const editItem = (id) => {
        const matchEditItemId = list.find((item) => item.id === id)
        setItem(matchEditItemId.item)
        setIsEdited(true)
        setErrorBg(true)

        setItemId(id)
        // ! setting is exist to false
        setTimeout(() => {
            setIsExist(false)
        }, 1500);
    }
    const checkActive = (id) => {
        const cloneData = [...list]
        setList(
            cloneData.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
        )
    }



    return (
        <div className='wrapper'>
            <h2 className={style.title}>Grocery List</h2>
            {isExist && <ShowMessage errorBg={errorBg}>{message}</ShowMessage>}
            <form >
                <input type="text" name='list' className={style.inputLabel} value={item} onChange={(e) => setItem(e.target.value)} />
                <button className={style.submitBtn} type='submit' onClick={addToList}>{isEdited ? "Edit" : "Add"}</button>
            </form>
            <ListItem list={list} removeItem={removeItem} editItem={editItem} checkActive={checkActive} />
            {list.length > 0 && <div className={style.center}>
                <button className={style.clear} onClick={() => clearList()}>clear all</button>
            </div>}
        </div >
    )
}

export default List