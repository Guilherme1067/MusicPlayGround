import React, {Component} from 'react';
import {Link, useParams} from 'react-router-dom';

import Header from '../../components/pageHeader'

import racionais from '../../assets/images/racionais.jpg'
import scorpion from '../../assets/images/drake-scorpion.jpg'
import noRoleModelz from '../../assets/images/J-Cole-No-Role-Models.jpg'
import Kendrick from '../../assets/images/kendrickDamm.jpg'
import rihannaAnti from '../../assets/images/rihanna-anti.jpg'
import theCarters from '../../assets/images/the-carters.jpg'
import sidoka from '../../assets/images/sidokaLanguage.jpg'
import youngThug from '../../assets/images/young-thug.jpg'
import vintageCulture from '../../assets/images/vintage-culture.jpg'
import vintageCultureAutumn from '../../assets/images/vintageAutumn.jpg'
import trench from '../../assets/images/Trench.jpg'
import uzi from '../../assets/images/uzi.png'

import './styles.css'

const albums = [{
        id:1,
        name:racionais,
    },
    {
        id:2,
        name:scorpion,
    },
    {
        id:3,
        name: noRoleModelz,
    },
    {
        id:4,
        name:Kendrick,
    },
    {
        id:5,
        name:rihannaAnti,
    },
    {
        id:6,
        name:theCarters,
    },
    {
        id:7,
        name:sidoka,
    },
    {
        id:8,
        name:youngThug,
    },
    {
        id:9,
        name:vintageCulture,
    },
    {
        id:10,
        name:vintageCultureAutumn,
    },
    {
        id:11,
        name:trench,
    },
    {
        id:12,
        name:uzi,
    }
]
 

function Landing(){

            return (   
                <div>
                    <h1>
                        <Header />
                    </h1>
        
                <section className="albums">
                    {
                        albums.map(album => {
                        return <Link key={album.id} to={`/playlist${album.id}`}><div><img src={album.name} alt={album.name}></img></div></Link>
                        })
                    }
                              
                </section>      
                </div>
            )
        }

export default Landing;
