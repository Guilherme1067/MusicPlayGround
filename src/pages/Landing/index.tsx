import React from 'react';

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



import './styles.css'

function Landing(){
    return (   
        <div>
            <h1>
                <Header />
            </h1>

        <section className="albums">

            <div>
                <img src={racionais} alt="racionais"/>
            </div>
         
            <div>
                <img src={theCarters} alt="the carters"/>
            </div>
            
            <div>
                <img src={noRoleModelz} alt="no role modelz"/>
            </div>

            <div>
                <img src={Kendrick} alt="Kendrick"/>
            </div>

            <div>
                <img src={rihannaAnti} alt="rihanna Anti"/>
            </div>

            <div>
                <img src={scorpion} alt="Scorpion"/>
            </div>
            <div>
                <img src={sidoka} alt="Scorpion"/>
            </div>
            <div>
                <img src={vintageCultureAutumn} alt="Scorpion"/>
            </div>
            <div>
                <img src={youngThug} alt="Scorpion"/>
            </div>
            <div>
                <img src={vintageCulture} alt="Scorpion"/>
            </div>
            
        </section>      
        </div>
    )
}

export default Landing;
