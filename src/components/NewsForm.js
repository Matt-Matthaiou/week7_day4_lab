import React from 'react';

const NewsForm = ({onFormChange})=>
{

    const handleChange = (event)=>
    {
        onFormChange(event.target.value)
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
    </form>
   ) 
}

export default NewsForm