import React, { Component } from "react";

// import React: 리액트 코딩할 때 필수
// import { Component } from "react"; -- react 라이브러리에서 Component 클래스를 로딩

class TOC extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JS</a></li>
                </ul>
            </nav>
        )
    }
}

export default TOC;
// TOC.js에는 여러 변수, 함수가 존재할 수 있는데, 이것을 외부에서 사용할 수 있게 허용할 것인지를 코드로 표현