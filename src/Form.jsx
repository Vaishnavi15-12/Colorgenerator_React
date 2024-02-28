import React, { useState } from 'react'

const Form = ({addColor}) => {

    const [color,setColor] = useState('#656b95');

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color);

    }

  return (
    <section className='container'>
        <h4>Color Generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
           <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type='text' value={color} placeholder='#656b95' onChange={(e) => setColor(e.target.value) }></input>
            <button type='submit' className='btn' style={{background:color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form
