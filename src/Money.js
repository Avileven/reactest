import {useState} from 'react'

const Money = () => {
  const [name,setName ] =useState('avi');
  const [age,setAge] =useState(20); 
    const handClick=(name,age)=>{
     setAge(40);
     setName('ran') ;   
    } 
    return ( 
        
        <div className="money">
            <p> {name} is {age}</p>
            <button onClick={ handClick}  >click </button>
        </div>
     );
}
 
export default Money;