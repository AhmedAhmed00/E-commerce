import React from 'react'

export default function Section({ children, bg }) {
    return (
        <section className={`py-3 ` + bg}>
            {children}

        </section>
    )
}
