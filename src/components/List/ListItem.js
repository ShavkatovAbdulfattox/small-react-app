import React, { useId } from 'react'
import style from "./style.module.css"

function ListItem(props) {
    const editId = useId()

    return (
        <>
            {
                props.list.map(({ item, id, changed, checked: isChecked }) => {
                    return <div className={`${style.wrapper} ${isChecked ? style["wrapper-active"] : ""}`} key={id}>
                        <div className={style.text}>
                            <input type="checkbox" className={`${style.inputCheckbox}`} onClick={() => props.checkActive(id)} id={`done-${editId}`} />
                            <div className={style["wrapper-desc"]}>
                                <h3 className={isChecked ? style["note-active"] : ""}>{item}</h3>
                                {changed && <p>Edited</p>}
                            </div>

                        </div>

                        <div className={style["wrapper-button"]}>
                            <button onClick={() => props.editItem(id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg></button>
                            <button onClick={() => props.removeItem(id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg></button>
                        </div>
                    </div>
                })
            }
        </>
    )



}

export default ListItem