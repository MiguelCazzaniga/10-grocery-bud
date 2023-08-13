import { useState } from "react"
import { toast } from "react-toastify"

const Carga = ({addOne}) => {

  const[articulo,setArticulo]=useState("")

  const cargaArticulo=(e)=>{
      e.preventDefault()
      if (articulo){
        addOne(articulo)
        setArticulo("")
      }
  }
  return (
    <form onClick={cargaArticulo} className="formCarga">
      <h5 className="formCargaTitulo">Grocery Bud</h5>
      <div className="formCargaButton">
      <input
        type='text'
        value={articulo}
        onChange={(e) => setArticulo(e.target.value)}
      ></input>
      <button type='submit' className="btn">Add Item</button>
      </div>
    </form>
  )
}
export default Carga