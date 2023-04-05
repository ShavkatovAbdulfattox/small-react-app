import React from 'react'
import style from "./style.module.css"

function ListItem(props) {

    return (
        <>
            {
                props.list.map(({ item, id }) => {
                    return <div className={style.wrapper} key={id}>
                        <div className={style.text}>
                            <input type="checkbox" className={style.inputCheckbox} />
                            <h3>{item}</h3>
                        </div>

                        <div className={style["wrapper-button"]}>
                            <button>Edit</button>
                            <button>Remove</button>
                        </div>
                    </div>
                })
            }
        </>
    )



}

export default ListItem