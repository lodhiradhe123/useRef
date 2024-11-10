import React, { useRef } from 'react'

function App() {
  const name= useRef(null)
  const age= useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name.current.value, age.current.value)
    
  }
  return (
  <form action="" className='w-full h-screen bg-zinc-400 flex items-center justify-center' onSubmit={handleSubmit}>
    <div className='w-96 flex-col items-start justify-between gap-10'>
      <h1 className='capitalize font-bold'>form handling</h1>
    <input ref={name} type="text"  id=""  placeholder='enter your name' className='w-72  bg-zinc-100 mb-5 rounded-md px-2 py-1'/>
    <input ref={age} type="text" id="" placeholder='enter your age ' className='w-72 bg-zinc-100 mb-5 rounded-md px-2 py-1' />
    <input type="submit" name="" id="" className='w-32 bg-blue-300 mb-5 rounded-md px-2 py-1 ml-16' />
    </div>
  </form>
  )
}

export default App