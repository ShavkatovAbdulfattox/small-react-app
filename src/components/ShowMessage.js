import React from 'react'
import style from "./List/style.module.css"

function ShowMessage({ children, errorBg }) {

    return (
        <div className={style.center}>
            <h3 className={`${style.message} ${errorBg ? style["message-success"] : ""}`}>
                {
                    children
                }
            </h3>
        </div>

    )
}

export default ShowMessage