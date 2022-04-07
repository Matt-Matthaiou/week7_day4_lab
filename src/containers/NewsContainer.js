import React, {useState, useEffect} from 'react';
import NewsList from '../components/NewsList'
import NewsForm from '../components/NewsForm';

const NewsContainer = ()=>
{
    const [news, setNews] = useState([]);
    const [filtered, setFiltered] = useState([])
    
    

    useEffect(()=>
    {
        getUrl()
        
        
    
    },[])

    const getUrl = function()
    {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(res => buildNews(res))
            
            
            
    }
    
    const buildNews = function(ids)
    {
        
        Promise.all(ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)))
        .then(responses => Promise.all(responses.map(response=>response.json())))
        .then(results => setNews(results))
        .then(setFiltered(news))
        
    }

    const onFormChange = (filter)=>
    {
        if (filter === "no")
        {
            setFiltered(news)
        }
        else
        {
            const newFitlered = news.filter(item=> item.type === filter)
            setFiltered(newFitlered)

        }
            

    }

    return(
        <>
            <h1>Hacker News</h1>
            <NewsForm onFormChange={onFormChange}/>
            <NewsList news={filtered}/>
        </>
    )
}

export default NewsContainer;