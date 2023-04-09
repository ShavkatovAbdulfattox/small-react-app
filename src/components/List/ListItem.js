import React from 'react'
import style from "./style.module.css"

function ListItem(props) {


    return (
        <>
            {
                props.list.map(({ item, id, changed, checked: isChecked }) => {
                    return <div className={`${style.wrapper} ${isChecked ? style["wrapper-active"] : ""}`} key={id}>
                        <div className={style.text}>
                            <input type="checkbox" className={`${style.inputCheckbox}`} onClick={() => props.checkActive(id)} />
                            <div className={style["wrapper-desc"]}>
                                <h3 className={isChecked ? style["note-active"] : ""}>{item}</h3>
                                {changed && <p>Edited</p>}
                            </div>

                        </div>

                        <div className={style["wrapper-button"]}>
                            <button onClick={() => props.editItem(id)}>Edit</button>
                            <button onClick={() => props.removeItem(id)}>Remove</button>
                        </div>
                    </div>
                })
            }
        </>
    )



}

export default ListItem