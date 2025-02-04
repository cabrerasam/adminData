import { useState, useEffect } from 'react'
import './App.css'
import { URL } from './helpers/config'

function App () {
  const [areas, setAreas] = useState([])
  const [area, setArea] = useState('')
  const [roles, setRoles] = useState([])
  const [role, setRole] = useState('')
  const [regions, setRegions] = useState([])
  const [region, setRegion] = useState('')
  const [user, setUser] = useState('')

  useEffect(() => {
    fetch(`${URL}/areas`)
      .then((res) => res.json())
      .then((data) => {
        setAreas(data)
      })
      .catch((err) => console.log(err))
  }, [area])

  useEffect(() => {
    fetch(`${URL}/roles`)
      .then((res) => res.json())
      .then((data) => {
        setRoles(data)
      })
      .catch((err) => console.log(err))
  }, [role])

  useEffect(() => {
    fetch(`${URL}/regions`)
      .then((res) => res.json())
      .then((data) => {
        setRegions(data)
      })
      .catch((err) => console.log(err))
  }, [region])

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
        setArea(data[0].name_area)
      })
      .catch((err) => console.log(err))
  }

  const submitRole = (e) => {
    e.preventDefault()

    const body = {
      nameRole: e.target.role.value
    }

    fetch(`${URL}/roles`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setRole(data[0].name_role)
      })
      .catch((err) => console.log(err))
  }

  const submitRegion = (e) => {
    e.preventDefault()

    const body = {
      nameRegion: e.target.region.value
    }

    fetch(`${URL}/regions`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setRegion(data[0].name_region)
      })
      .catch((err) => console.log(err))
  }

  const submitUser = (e) => {
    e.preventDefault()

    const body = {
      userName: e.target.name.value,
      userNick: e.target.nick.value,
      passwordUser: e.target.password.value,
      idArea: e.target.area.value,
      idRole: e.target.role.value,
      idRegion: e.target.region.value
    }

    fetch(`${URL}/users`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].user_nick)
        setUser(data[0].user_nick)
      })
      .catch((err) => console.log(err))
  }

  return (
    <main className='w-full flex flex-col justify-center items-center py-8'>
      <h1 className='text-3xl text-gray-400'>ADMIN DATA</h1>
      <section className='grid grid-cols-2 gap-4 mt-4'>
        <section className='flex flex-col justify-between gap-4'>
          <form onSubmit={submitArea} className='w-[450px] border border-gray-600 px-4 py-4'>
            <label className='text-gray-400 flex gap-2'>
              <p className='size-10 grow-2 flex justify-center items-center'>Área</p>
              <input className='size-10 grow-6 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' type='text' name='area' />
              <button className='size-10 grow-2 rounded border border-gray-800 hover:border-gray-700 transition-colors duration-200' type='submit'>Enviar</button>
            </label>
            <p className='text-sky-600 text-sm mt-2 text-center'>
              {
                area !== '' ? `Área: ${area} creada` : 'Debe crear el área'
              }
            </p>
          </form>
          <form onSubmit={submitRole} className='w-[450px] border border-gray-600 px-4 py-4'>
            <label className='text-gray-400 flex gap-2'>
              <p className='size-10 grow-2 flex justify-center items-center'>Rol</p>
              <input className='size-10 grow-6 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' type='text' name='role' />
              <button className='size-10 grow-2 rounded border border-gray-800 hover:border-gray-700 transition-colors duration-200' type='submit'>Enviar</button>
            </label>
            <p className='text-gray-400 text-sm mt-2 text-center'>
              {
                role ? `Rol: ${role} creado` : 'Debe crear el rol'
              }
            </p>
          </form>
          <form onSubmit={submitRegion} className='w-[450px] border border-gray-600 px-4 py-4'>
            <label className='text-gray-400 flex gap-2'>
              <p className='size-10 grow-2 flex justify-center items-center'>Región</p>
              <input className='size-10 grow-6 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' type='text' name='region' />
              <button className='size-10 grow-2 rounded border border-gray-800 hover:border-gray-700 transition-colors duration-200' type='submit'>Enviar</button>
            </label>
            <p className='text-gray-400 text-sm mt-2 text-center'>
              {
                region ? `Region: ${region} creada` : 'Debe crear la region'
              }
            </p>
          </form>
        </section>
        <form onSubmit={submitUser} className='w-[450px] border border-gray-600 px-4 py-2 flex flex-col gap-4'>
          <h2 className='text-gray-400 mt-2 text-center'>Usuario</h2>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Nombre</p>
            <input type='text' name='name' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' />
          </label>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Nick</p>
            <input type='text' name='nick' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' />
          </label>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Password</p>
            <input type='password' name='password' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4' />
          </label>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Área</p>
            <select name='area' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4'>
              <option value=''>Seleccione</option>
              {
                areas.map((area, index) => {
                  return (
                    <option key={index + area.id_area} value={area.id_area}>{area.name_area}</option>
                  )
                })
              }
            </select>
          </label>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Role</p>
            <select name='role' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4'>
              <option value=''>Seleccione</option>
              {
                roles.map((role, index) => {
                  return (
                    <option key={index + role.id_role} value={role.id_role}>{role.name_role}</option>
                  )
                })
              }
            </select>
          </label>
          <label className='flex gap-2'>
            <p className='text-gray-400 text-sm mt-2 size-10 grow-2'>Region</p>
            <select name='region' className='size-10 grow-8 rounded text-gray-400 font-extralight border border-gray-600 bg-gray-600 outline-none px-4'>
              <option value=''>Seleccione</option>
              {
                regions.map((region, index) => {
                  return (
                    <option key={index + region.id_region} value={region.id_region}>{region.name_region}</option>
                  )
                })
              }
            </select>
          </label>
          <button className='text-gray-400 rounded border border-gray-800 hover:border-gray-700 transition-colors duration-200'>Enviar</button>
          <p className='text-gray-400 text-sm mt-2 text-center'>
            {
              user ? `Usuario: ${user} creado` : 'Debe crear el usuario'
            }
          </p>
        </form>
      </section>
    </main>
  )
}

export default App
