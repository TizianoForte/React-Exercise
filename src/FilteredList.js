

import { useMemo } from "react";

const person = [
    { id: 0, name: "Tiziano", age: 34 },
    { id: 1, name: "Giovanni", age: 20 },
    { id: 2, name: "Gabbo", age: 15 },
    { id: 3, name: "Tommy", age: 18 }
]
function filterPerson (){
    const personFilterd = person.filter(someone => someone.age >= 18);
    console.log(personFilterd);
}


export function FilteredList() {
   const result = useMemo (()=> filterPerson(),[])
    return(
        <>
        </>
     
       
    )
}