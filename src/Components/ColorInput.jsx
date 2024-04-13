import React from 'react'

export default function ColorInput({ fakeColor, changeProductColor, color }) {
    return (
        <span


            onClick={(e) => {
                changeProductColor(color)
            }}
            style={{ backgroundColor: color }}
            className={`color-styling  ${fakeColor === color ? "activeColor" : ""}`}>
        </span>


    )
}
