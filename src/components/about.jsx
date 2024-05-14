import React from 'react'

export function About( props ) {

    console.log( props )
    let { aboutData } = props

    let { title } = aboutData
    return (
        <div className={`bg-dark text-light p-5`}>
            <h1 className='text-center mb-5 text-warning'>{aboutData.title || 'Default Title'}</h1>
            <div className="container">
                <h1 className='mb-3 text-success'>{'Default Description'}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita officiis harum sit quisquam voluptate rem tempore! Repudiandae quod magnam, iusto perferendis laborum omnis nemo quam dolor delectus officia et.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis expedita officiis harum sit quisquam voluptate rem tempore! Repudiandae quod magnam, iusto perferendis laborum omnis nemo quam dolor delectus officia et.</p>
            </div>

        </div>
    )
}
