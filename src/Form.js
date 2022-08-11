import React,{useState} from 'react'

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const newUser = ()=> {
    let data ={name,email,phone}
    let url = "http://localhost:3000/user";
    fetch(url,{
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    }).then((result)=>{
        result.json().then((resp)=>{
            console.warn(resp)
        })
    })
  }

    return (
    <>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="name"/>
    <input type="email" onChange={(e)=>setEmail(e.target.value)} name="email"/>
    <input type="number" onChange={(e)=>setPhone(e.target.value)}  name="phone"/>
    <input type="button" value="Enter a New User" onClick={newUser}/>
    </>
  )
}

export default Form