import React,{useState} from 'react';
import './css/register.css';

function Register(){
    const [ID,setID]= useState("")
    const [PASSWORD,setPASSWORD] = useState("")
    const [PASSWORD_Check,setPASSWORD_Check] = useState("")

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value)
    }
    const onPasswordHandler = (event)=>{
        setPASSWORD(event.currentTarget.value)
    }
    const onPasswordHandler_check = (event)=>{
        setPASSWORD_Check(event.currentTarget.value)
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        let body={
            username:ID,
            password: PASSWORD
        }
        const regist_info = {
            method:"POST",
            body:JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        };

        fetch("http://localhost/api/users/create",regist_info)
    }
    return (
        <form id="container" onSubmit={onSubmitHandler}>
            <div className="login_container">
                <div className="wrap_login Lato_font_15">
                    <div className="login_form">
                        <span className="Lato_font_30 bold welcome">회원가입</span>
                            <div className="Wrap">
                                <input className="id" type="text" value={ID} onChange={onIDHandler}/>
                                <span className="input_wrap" data-placeholder="ID">ID</span>
                            </div>
							<div className="Wrap">
                                <input className="id" type="password" value={PASSWORD} onChange={onPasswordHandler}/>
                                <span className="input_wrap" data-placeholder="Password">Password</span>
                            </div>
							<div className="Wrap">
                                <input className="id" type="password" value={PASSWORD_Check} onChange={onPasswordHandler_check} />
                                <span className="input_wrap" data-placeholder="Password">Confirm Password</span>
                            </div>
                            <div className="Loginbutton">
                              <input type="submit" value="회원가입"/> 
                            </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Register