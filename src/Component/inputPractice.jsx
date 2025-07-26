import {useState} from 'react'
// in  react name function name is started with capital letter not small letter



function InputPractice() {
     const [inputname, setInputname] =useState("");
      const [name, setname] = useState("");
      const displayname =(e) =>{
          setInputname(e.target.value);
    
      }
    
      const handleSubmit =()=>{
        setname(inputname);
      }
  return (
    <div>
      <h1>Hello My name is {(name)?name:"Lokesh"}  </h1>
      <input type="text" placeholder="Enter the name"
      value={inputname}
      onChange={displayname} // there is pass the referece not call 
      />
      <button  onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default InputPractice;
