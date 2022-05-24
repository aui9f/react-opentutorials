import React, { useEffect, useState } from "react";
import Article from "./Article";
import Nav from "./Nav";
function Index(){
    const [status, setStatus] = useState({title: 'Welcom', desc: 'Hello, React & Ajax'});

    const [list, setList] = useState([]);
    
    
    const navClick = (id) => {
        
        fetch(`${id}.json`).then(res=>{
            return res.json();
        }).then((json)=>{
            setStatus({
                title: json.title,
                desc: json.desc
            })
        })
    }

    const test = async () => {
        const result = await fetch('list.json');
        // const json = ;
        setList([...await result.json()]);
        
    }
useEffect(()=>{
    test();
}, [])
    return(
        <div>
            
            <Nav list={list} onClick={navClick}/>
            <Article title={status.title} desc={status.desc}/>
        </div>
    )

}

export default Index