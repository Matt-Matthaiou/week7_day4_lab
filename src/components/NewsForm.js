import React, {useState} from 'react';



const NewsForm = ({onFormChange, searchByAuthor})=>
{
    const [userInput, setUserInput] = useState('')

    const handleChange = (event)=>
    {
        onFormChange(event.target.value)
    }

    const handleInputChange = (event)=>
    {
        setUserInput(event.target.value);
        // searchByAuthor(event.target.value)
        searchByAuthor(userInput);
    }

   return(
        <form>
        <select onChange={handleChange}>
            <option value='no'>All news</option>
            <option value='job'>Job</option>
            <option value='story'>Story</option>
            <option value='comment'>Comment</option>
            <option value='poll'>Poll</option>
            <option value='pollpot'>Pollpot</option>
        </select>
       
        <input id='filter-by-name' value={userInput} onChange={handleInputChange} type='text'/>
        </form>
   ) 
}

export default NewsForm