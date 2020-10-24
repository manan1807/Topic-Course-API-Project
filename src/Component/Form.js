import React,{useState} from 'react'


function Form(){

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [city,setCity] = useState("");
       
    function showData(){
        let data = {name,age,city};
        //<FormTable tableData = {data}/>
       alert("Details has been added to the Users List");
        console.log(data);

      }
    return(
        <div>
        <h1>Form Component</h1>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
        <br/><br/>
        <input type="text" onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age"/>
        <br/><br/>
        <input type="text" onChange={(e)=>setCity(e.target.value)} placeholder="Enter City"/>
        <br/><br/>
        <button onClick={showData}>ShowData</button>
        </div>
    )
}

export default Form;