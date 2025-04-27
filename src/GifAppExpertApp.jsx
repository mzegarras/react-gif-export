import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifAppExpertApp = () => {

  const [categories, setCategories] = useState(['One punch'])

  const addCategory = (value) => {
    //console.log(categories)
    //categories.push("ss")

    const categoryExists = categories.find(p => p === value);

    if (!categoryExists) {
      setCategories([...categories, value]);
    }


    //setCategories( cat=>[...cat,'Valorant']);
    //console.log(categories)
  }

  return (
    <>
      {/*titulo*/}
      <h1>Gift App Expert</h1>
      {/*input*/}
      <AddCategory
        //setCategories={ setCategories } 
        onNewCategory={addCategory}
      />

      {/*listado de gif*/}


      {
        categories.map(category =>
        (
          <GifGrid
            key={category}
            category={category} />
        )
        )

      }


      {/*listado-->gif item*/}
    </>

  )
}
