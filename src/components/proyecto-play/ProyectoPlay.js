import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import './ProyectoPlay.css';
import Footer from '../footer/Footer.js';
// import '../press/Press.css'
import { ReactComponent as ProyectoPlayLogo } from '../../assets/navigation-assets/ProyectoPlayLogo.svg';

import { ReactComponent as MissingImage } from '../../assets/navigation-assets/MissingImage.svg';

import { ReactComponent as FamilyDay } from '../../assets/navigation-assets/FamilyDay.svg';
import { ReactComponent as FamilyDay1 } from '../../assets/navigation-assets/FamilyDay1.svg';
import { ReactComponent as FamilyDay2 } from '../../assets/navigation-assets/FamilyDay2.svg';
import { ReactComponent as FamilyDay3 } from '../../assets/navigation-assets/FamilyDay3.svg';

import { ReactComponent as CounselingCenter } from '../../assets/navigation-assets/CounselingCenter.svg';
import { ReactComponent as CounselingCenter1 } from '../../assets/navigation-assets/CounselingCenter1.svg';
import { ReactComponent as CounselingCenter2 } from '../../assets/navigation-assets/CounselingCenter2.svg';
import { ReactComponent as CounselingCenter3 } from '../../assets/navigation-assets/CounselingCenter3.svg';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const ProyectoPlay = () => {

    const pastEventsRef = useRef(null);

    const [seePhotosFamilyDay, setSeePhotosFamilyDay] = useState(false);
    const [seePhotosCounselingCenter, setSeePhotosCounselingCenter] = useState(false);

    const scrollToPastEvents = () => {
        scrollToRef(pastEventsRef);
    }

    return (
        <div className='cream unconstrained-portion'>
            <div id="content">
                <ProyectoPlayLogo id="proyecto-play-logo"/>
                <div className='horizontal-stack'>
                    <div className='orange-title'>WHAT IS IT</div>
                </div>
                <div className='horizontal-stack'>
                    <div id="what-is-it-text">
                        This project focuses on hosting large scale
                        community events for parents and children to
                        get together and play traditional games.
                    </div>
                    <div className='lead-stack'>
                        <div id='class-type-parent'>
                            <button onClick={()  => { window.open('mailto:theraspanishplay@gmail.com?subject=Partner%20Request&body=')}} class="button purple">
                                <p>partner with proyecto play</p>
                            </button>
                            <button onClick={scrollToPastEvents} class="button green">
                                <p>see events</p>
                            </button>
                        </div>
                        <p id="paragraph">
                            In the age of electronics we live in, video games
                            can take over a child’s free time. This is the
                            reason why it is so important to be intentional
                            about creating opportunities where children can
                            play freely, use their imaginations, and have fun.
                            Proyecto Play main goal is to create those moments
                            where kids can interact with their parents playing
                            traditional games and spending quality time free
                            of any electronic distraction.
                        </p>
                    </div>
                </div>
                <div id="events-container">
                    <h1 ref={pastEventsRef} className="press-title">UPCOMING EVENTS</h1>
                    <div className="press-releases-container">
                         <div className="press-article">
                            <div className="press-core">
                                <MissingImage className="press-image"/>
                                <div className="press-info-container">
                                    <h4 className="press-date">
                                        <b>COMING SOON</b>
                                    </h4>
                                    <h4 className="press-info">
                                        KUWAIT NATIONAL LIBRARY
                                    </h4>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <h1 className="press-title">PAST EVENTS</h1>
                    <div className="press-releases-container">
                        <div className="press-article">
                            <div className="press-core">
                                <FamilyDay className="press-image"/>
                                <div className="press-info-container">
                                    <h4 className="press-date">
                                        <b>January, 2020</b>
                                    </h4>
                                    <h4 className="press-info">
                                        DAI KUWAIT, KUWAIT CITY
                                    </h4>
                                    <h4 className="press-info">
                                        FAMILY DAY
                                    </h4>
                                </div>
                            </div>
                            <button onClick={() => {setSeePhotosFamilyDay(!seePhotosFamilyDay)}} className="see-photos-button">
                                {seePhotosFamilyDay ? "x close photos" : "> see photos"}
                            </button>
                           
                        </div>
                        {
                                seePhotosFamilyDay &&
                                    <div className='photos'>
                                        <FamilyDay1 className='collection-image'/>
                                        <FamilyDay2 className='collection-image'/>
                                        <FamilyDay3 className='collection-image'/>
                                    </div>
                            }

                        <div className="press-article">
                            <div className="press-core">
                                <CounselingCenter className="press-image"/>
                                <div className="press-info-container">
                                    <h4 className="press-date">
                                        <b>March, 2019</b>
                                    </h4>
                                    <h4 className="press-info">
                                        AL HAMRA, KUWAIT CITY
                                    </h4>
                                    <h4 className="press-info">
                                        KUWAIT COUNSELING CENTER
                                    </h4>
                                </div>
                            </div>
                            <button onClick={() => {setSeePhotosCounselingCenter(!seePhotosCounselingCenter)}} className="see-photos-button">
                                {seePhotosFamilyDay ? "x close photos" : "> see photos"}
                            </button>
                        </div>
                            {
                                seePhotosCounselingCenter &&
                                    <div className='photos'>
                                        <CounselingCenter1 className='collection-image'/>
                                        <CounselingCenter2 className='collection-image'/>
                                        <CounselingCenter3 className='collection-image'/>
                                    </div>
                            }








                    </div>
                </div>
               
                <Footer/>   
            </div>
        </div>
    )
}

export default ProyectoPlay;