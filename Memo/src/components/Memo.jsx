import { useMemo } from "react";
import { useState } from "react";

 
const Memo = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [count, setCount] = useState(0);
    
    const items =[ "Apple", 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes','Watermelon',
         'Strawberry', 'Blueberry', 'Kiwi', 'Papaya', 'Lemon'];

      const filteredItems = useMemo(()=>{
        
        return items.filter(item =>item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));


      },[items,searchTerm])
  return (
    <div>
      <input type="text" 
      placeholder="Add items" 
      value={searchTerm}
       onChange={(e)=>setSearchTerm(e.target.value)}/>

       <button onClick={()=>setCount(count+1)}>
        increment Count:{count}
       </button>

       {filteredItems.map((item,index)=>(
         <h2 key={index}>{item}</h2>
       ))}
    </div>
  )
}

export default Memo



 