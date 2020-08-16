import React, { Component } from 'react'

import {useParams} from 'react-router-dom'

import Header from '../../components/pageHeader';

import './styles.css'
function Playlist(){

    const musics = [{
        id:1,
        url: 'https://www.youtube.com/embed/eRUa-1kTvT4'
  },
  {
    id:2,
    url: 'https://www.youtube.com/watch?v=pzAIhjxEemw'
},
  {
    id:3,
    url: 'https://www.youtube.com/watch?v=ue5oHmUGiMM'
},
{
    id:4,
    url: 'https://www.youtube.com/watch?v=B5YNiCfWC3A'
},
{
    id:5,
    url: 'https://www.youtube.com/watch?v=wfN4PVaOU5Q'
},
{
    id:6,
    url: 'https://www.youtube.com/watch?v=kbMqWXnpXcA'
},
{
    id:7,
    url: 'https://www.youtube.com/watch?v=IPZYid3SfMQ'
},
{
    id:8,
    url: 'https://www.youtube.com/watch?v=rQcDVL15GIo'
},
{
    id:9,
    url: 'https://www.youtube.com/watch?v=xslPDHq-yog'
},
{
    id:10,
    url: 'https://www.youtube.com/watch?v=gprAWYQ47uY'
},
{
    id:11,
    url: 'https://www.youtube.com/watch?v=eJnQBXmZ7Ek'
},
{
    id:12,
    url: 'https://www.youtube.com/watch?v=x0fFzqX_Xgo'
}
]


  
     let {id} = useParams();

     let changeUrl = (url: string) => url.replace('watch?v=', 'embed/')
    
    const [url]= musics.filter(playlist => playlist.id == id).map(linkUrl => changeUrl(linkUrl.url))
    return (
        <div>
            
            <Header/>
            <main>
            
                <iframe src={`${url}`}></iframe>
            </main>
        </div>
        
    )
}
export default Playlist;