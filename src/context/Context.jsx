import { createContext , useState } from "react";
const Context = createContext();
function Provider({children}) {
    const [id, setId] = useState(0)
    return(
        <>
            <Context.Provider value={{id,setId}}>{children}</Context.Provider>
        </>
    )
}
export {
    Provider,
    Context
}


