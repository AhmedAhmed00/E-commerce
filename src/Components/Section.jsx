import React from 'react'

export default function Section({ children, bg }) {
    return (
        <section className={`py-4  ` + bg}>
            {children}

        </section>
    )
}
