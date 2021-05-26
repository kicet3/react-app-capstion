import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import './css/login.css';


function Login(){
//    var a;
    const [ID,setID]= useState("")
    const [PASSWORD,setPASSWORD] = useState("")
    const history = useHistory()

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value)
    }
    const onPasswordHandler = (event)=>{
        setPASSWORD(event.currentTarget.value)
    }
    const onSubmitHandler = (event) =>{
        event.preventDefault()
        let body={
            username:ID,
            password: PASSWORD
        }
        const login_info = {
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        };

        fetch("http://localhost/users/login",login_info)
        //인증 결과로 페이지 이동 or 에러 메시지 출력 시켜야함
        .then(response => response.json())
        .then(data=> {
            if(data.success){
                history.push('/dashboard');
            }else{
                alert('error')
            }
        })
    }
    return (
        <form id="container" onSubmit={onSubmitHandler}>
            <div className="login_container">
                <div className="wrap_login">
                    <div className="login_form">
                        <span className="Lato_font_30 bold welcome">로그인</span>
                            <div className="Wrap">
                                <input className="id" type="text" value={ID} onChange={onIDHandler}/>
                                <span  className="input_wrap" data-placeholder="Email">Email</span>
                            </div>
                            <div className="Wrap">
                                <input className="id" type="password" value={PASSWORD} onChange={onPasswordHandler}/>
                                <span className="input_wrap" data-placeholder="Password">Password</span>
                            </div>
                            <div className="Loginbutton">
                              <button type="submit">로그인</button>
                            </div> 
                            <p className="Lato_font_15 sign">Don't have an account? <a className="no_underline bold" href="../register">Register</a></p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login