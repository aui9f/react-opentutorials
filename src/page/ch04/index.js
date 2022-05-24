import React, { useEffect, useState } from "react";
import Article from "./Article";
import Nav from "./Nav";
import NowLoading from "./NowLoading";
function Index(){
    const [status, setStatus] = useState({title: 'Welcom', desc: 'Hello, React & Ajax'});

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    
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
        setIsLoading(true);
        setTimeout(async()=>{
            const result = await fetch('list.json');
            setList([...await result.json()]);
            setIsLoading(false);
        },2000)
        
        
    }
useEffect(()=>{
    test();
}, [])
    return(
        <div>
            {isLoading?<NowLoading/>:<div> 
                <Nav list={list} onClick={navClick}/>
                <Article title={status.title} desc={status.desc}/>
        </div>}
            
           
        </div>
    )

}

export default Index