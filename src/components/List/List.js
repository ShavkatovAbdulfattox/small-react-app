import React, { useRef, useState } from 'react'
import style from "./style.module.css"
import ListItem from './ListItem'

function List() {
    const [item, setItem] = useState("")
    const [list, setList] = useState([])
    const addToList = (e) => {
        e.preventDefault()
        if (!item) return

        // CREATING NEW ITEM
        const newItem = {
            id: new Date().getTime(),
            item
        }
        // setting value
        setList([...list, newItem])
        // resetting item value
        setItem("")
    }


    return (
        <div className='wrapper'>
            <h2 className={style.title}>Grocery List</h2>
            <form onSubmit={addToList}>
                <input type="text" name='list' className={style.inputLabel} value={item} onChange={(e) => setItem(e.target.value)} />
                <button className={style.submitBtn} type='submit'>Add</button>
            </form>
            <ListItem list={list} />
            {list.length > 0 && <div className={style.center}>
                <button className={style.clear} onClick={() => setList([])}>clear all</button>
            </div>}
        </div >
    )
}

export default List