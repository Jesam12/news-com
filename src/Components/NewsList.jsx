import React from 'react'
import Card from "react-bootstrap/Card"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col"
import { useState, useEffect } from 'react';


const NewsList = (props) => {
    const {category, searchTerm } = props;

    const {news, setNews} = useState
 //fetching news 
    useEffect(() =>{
        const fetchNews = async () =>{
            let url = `https://gnews.io/api/v4/top-headlines?lang=en`

            if (category) {
                url += `&topic=${category}`
            }

            if (searchTerm){
                url += `&q=${searchTerm}`
            }
            url += `&token=${process.env.REACT_APP_GNEWS_API_KEY}`

            const response = await fetch (url);
            const data = await response.json()
            console.log(data)
            setNews(data.articles)
        }
        fetchNews()
    })
  return (
    <div>
      
    </div>
  )
}

export default NewsList
