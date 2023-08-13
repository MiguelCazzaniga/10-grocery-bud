const ListaUno = ({lista,delArt,done}) => {
    
    return (
    <div className="listaUno">
        <input type="checkbox" checked={lista.done} onChange={()=>done(lista.id)}></input>
        <p>{lista.description}</p>
        <button type="button" 
                onClick={()=>delArt(lista.id)}
                className="listaUnoBtn">
                    Delete
        </button>
      
    </div>
  )
}
export default ListaUno