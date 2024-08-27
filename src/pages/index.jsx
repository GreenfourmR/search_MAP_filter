
import { useState } from "react";

export default function Home() {

//   const fruits =["apple", "banana", "pineapple", "mango", "orange","cherry"];
//  const [val, setVal]= useState("");
//  const change = (event) =>{
//   setVal(event.target.value);
//  };
//  const filterredArray = fruits.filter((fruit)=> fruit === val);
// return <div className="">
//   <input className="border-[2px] placeholder:"
//   onChange={change} />
//   <div> {filterredArray.map((fruit)=>{
//     return <div>{fruit}</div>
//   })}</div>
//   </div>
const objectList = [
  { title: "HTML Article 6", tag: "html" },
  { title: "CSS Basics 6", tag: "css" },
  { title: "HTML Article 2", tag: "html" },
  { title: "CSS Basics 3", tag: "css" },
  { title: "HTML Article 3", tag: "html" },
  { title: "JavaScript Guide 3", tag: "javascript" },
  { title: "CSS Basics 4", tag: "css" },
  { title: "JavaScript Guide 1", tag: "javascript" },
  { title: "HTML Article 4", tag: "html" },
  { title: "CSS Basics 1", tag: "css" },
  { title: "JavaScript Guide 4", tag: "javascript" },
  { title: "HTML Article 1", tag: "html" },
  { title: "CSS Basics 2", tag: "css" },
  { title: "HTML Article 5", tag: "html" },
  { title: "JavaScript Guide 2", tag: "javascript" },
  { title: "CSS Basics 5", tag: "css" },
  { title: "JavaScript Guide 6", tag: "javascript" },
  { title: "HTML Article 7", tag: "html" },
  { title: "CSS Basics 7", tag: "css" },
  { title: "JavaScript Guide 5", tag: "javascript" },
];
const [searchValue, setSearchValue]= useState("");
const handeledchange = (e) => {
  setSearchValue(e.target.value);
};
const filtereditems = objectList.filter((item)=> item.tag == searchValue);
return <main className="flex justify-center items-center w-full h-screen">
<div>
  <select className="border border-solid w-[200px] h-[30px]"onChange={handeledchange}>
    <option value="" selected hidden>select tag..</option>
    <option value="css">css</option>
    <option value="html">html</option>
    <option value="javascript">javascript</option>
  </select>
  <div>
    {filtereditems.map((item, index)=>(
      <h3 key={index}>{item.title}</h3>
    ))}
  </div>
</div>
</main>

}
