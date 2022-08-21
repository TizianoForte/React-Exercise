import { useEffect, useRef, } from "react";

export function CarDetails({ initialData }) {
  const formRef = useRef();
 
  useEffect(()=>{
    formRef.current.reset();
  }, [initialData])

  function handleInputForm  (event){
    const brand = event.target.elements.brand.value
    const model = event.target.elements.model.value
    const year = event.target.elements.year.value
    const color = event.target.elements.color.value
    console.log({
        brand,
        model,
        year,
        color,
    })
  }


  return (
    <div>
      <form ref={formRef} onSubmit={handleInputForm}>
        <input name="brand" defaultValue={initialData.brand} />
        <input name="model" defaultValue={initialData.model} />
        <input name="year" type="number" defaultValue={initialData.year} />
        <input name="color" defaultValue={initialData.color} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}