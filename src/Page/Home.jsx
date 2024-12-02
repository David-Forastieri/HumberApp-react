import { useEffect, useState } from "react"
import List from "../componentes/List"
import { conexionAPi } from "../conexionApi"

function Home() {
    const [list, setList] = useState([])
    useEffect(()=>{
        (async ()=>{
            const civilList = await conexionAPi()
            setList(civilList)
        })()
    }, [])
    
    return (
        <List civilList={list} />
    )
}

export default Home