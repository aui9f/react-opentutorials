import React, { useState } from "react";
import Article from "./Article";
import Nav from "./Nav";
function Index(){
    const [status, setStatus] = useState({title: 'Welcom', desc: 'Hello, React & Ajax'});

    
        
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
    

    return(
        <div>
            <Nav onClick={navClick}/>
            <Article title={status.title} desc={status.desc}/>
        </div>
    )

}

export default Index