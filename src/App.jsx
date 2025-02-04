import { useState } from 'react'
import './App.css'
import { URL } from './helpers/config'

function App () {
  const [area, setArea] = useState('')

  const submitArea = (e) => {
    e.preventDefault()

    const body = {
      nameArea: e.target.area.value
    }

    fetch(`${URL}/areas`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setArea(data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='w-full flex flex-col justify-center items-center py-8'>
      <h1 className='text-3xl text-gray-400'>ADMIN DATA</h1>
      <section className='grid grid-cols-2 gap-4 mt-4'>
        <section>
          <form onSubmit={submitArea} className='w-[550px] border border-gray-600 px-4 py-2'>
            <label className='text-gray-400'>
              Área
              <input type='text' name='area' id='' />
            </label>
          </form>
          <form className='w-[550px] border border-gray-600 px-4 py-2'>
            <label>
              Input
              <input type='text' name='' id='' />
            </label>
          </form>
          <form className='w-[550px] border border-gray-600 px-4 py-2'>
            <label>
              Input
              <input type='text' name='' id='' />
            </label>
          </form>
        </section>
        <form className='w-[550px] h-[500px] border border-gray-600 px-4 py-2'>
          <label>
            Input
            <input type='text' name='' id='' />
          </label>
        </form>
      </section>
    </main>
  )
}

export default App
