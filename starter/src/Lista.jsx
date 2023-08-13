import ListaUno from "./ListaUno"


const Lista = ({lista,delArt,done}) => {
    
    return(
    <div className="lista">
    {lista.map((item)=>{
        return(
            <ListaUno key={item.id}
                    lista={item}
                    delArt={delArt}
                    done={done}
                    
            ></ListaUno>
        )
    })}
    </div>
    )
}
export default Lista