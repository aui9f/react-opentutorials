import React, { Component } from "react";

// import React: 리액트 코딩할 때 필수
// import { Component } from "react"; -- react 라이브러리에서 Component 클래스를 로딩

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
        console.log("TOC render shouldComponentUpdate")
        return this.props.data === newProps.data ? false:true;
    }
    render(){
        let lists = [];
        let data = this.props.data;
        let i = 0;
        while(i<data.length){
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/"+data[i].id}
                    data-id={data[i].id}
                    onClick={function(e){
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}>{data[i].title}</a>
                </li>
            );
            i=i+1;
        }
        return(
            <nav>
                <ul>
                    {lists}
                    {/* {data.map(x=>{
                        return <li key={x.id}><a href={`/content/${x.id}`}>{x.title}</a></li>
                    })} */}
                    {/* <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JS</a></li> */}
                </ul>
            </nav>
        )
    }
}

export default TOC;
// TOC.js에는 여러 변수, 함수가 존재할 수 있는데, 이것을 외부에서 사용할 수 있게 허용할 것인지를 코드로 표현