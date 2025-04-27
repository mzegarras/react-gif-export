import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One punch')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault();

        
        if(inputValue.trim().length<=1)return;

        //setCategories(categories=>[inputValue,...categories]);

        onNewCategory(inputValue.trim());

        setInputValue('');
    }

    return (

        <form onSubmit={ onSubmitForm }>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                onChange={onInputChange} />
        </form>


    )
}
