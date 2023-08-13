import { ToastContainer, toast } from "react-toastify"

import Carga from "./Carga"
import Lista from "./Lista"
import { useState } from "react"
import { nanoid } from "nanoid"

const defaultList = JSON.parse(localStorage.getItem("lista") || "[]")

const App = () => {

  const [lista, setLista] = useState(defaultList)

  const guardaLocal=(lista)=>{
    localStorage.setItem("lista",JSON.stringify(lista))
  }

  const addOne=(articulo)=>{
    const newArticulo={
      id:nanoid(),
      description:articulo,
      done:false
    }
    const newLista=[...lista,newArticulo]
    setLista(newLista)
    guardaLocal(newLista)
    toast.success("Articulo Agregado")
  }

  const delArt=(id)=>{
   let newLista = []
   lista.forEach((item) => {
     if (id !== item.id) {
       newLista.push(item)
     }
   })
   setLista(newLista)
    guardaLocal(newLista)
    toast.success("Articulo Eliminado")
  }

  const done=(id)=>{
    let newLista=[...lista]
    newLista.forEach((item)=>{
      if (id===item.id){item.done=!item.done}
    })
    setLista(newLista)
     guardaLocal(newLista)
    
  }

  return(
  <main>
   
    <Carga addOne={addOne}></Carga>
    <Lista 
    lista={lista}
    delArt={delArt}
    done={done}
    ></Lista>
    <ToastContainer position="top-center" />

  </main>
  )
}

export default App
