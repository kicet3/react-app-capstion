import React,{useState} from 'react';

function Test(){
    const [ID,setID]= useState("")
    const [PASSWORD,setPASSWORD] = useState("")

    const onIDHandler = (event)=>{
        setID(event.currentTarget.value)
    }
    const onPasswordHandler = (event)=>{
        setPASSWORD(event.currentTarget.value)
    }
    const onSubmitHandler = (event) =>{
        //event.preventDefault()
        console.log('id',ID)
    }
    return (
        <div style={{
            display:'flex',justifyContent:'center',alignItems:'center', width:'100%',height:'100vh'
        }}>
            <form style={{ display:'flex',flexDirection:'column'}}
                onSubmit={onSubmitHandler}>
                    <div>
                    <label>Email</label>
                    <input></input>
                    <br />
                    <button type="submit">
                        로그인
                    </button>
            </div>
            </form>
        </div>
    )
}

export default Test