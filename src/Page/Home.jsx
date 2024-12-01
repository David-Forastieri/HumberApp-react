import { useEffect, useState } from "react"
import { dataBase } from "../dataB"
import List from "../componentes/List"
//import { conexionAPi } from "./api2"
import { GetApi } from './../api';

function Home() {
    const [list, setList] = useState([])
    useEffect(()=>{
        // if (list.length === 0) setList(dataBase)
        GetApi()
        //conexionAPi()
    }, [])
    
    return (
        <List civilList={list} />
    )
}

export default Home