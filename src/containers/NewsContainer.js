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

    useEffect(()=>
    {
        setFiltered(news)
    },[news])

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

    const searchByAuthor = (author)=>
    {
        if (author === false)
        {
            setFiltered(news)
        }
        else
        {
            const authorFiltered = news.filter(item => {
                return item.by.includes(author)})
            setFiltered(authorFiltered)
        }
    }

    return(
        <>
            <h1>Hacker News</h1>
            <NewsForm onFormChange={onFormChange} searchByAuthor={searchByAuthor}/>
            <NewsList news={filtered}/>
        </>
    )
}

export default NewsContainer;