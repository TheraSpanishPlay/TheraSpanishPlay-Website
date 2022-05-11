import { React, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import '../../App.css';
import './Home.css'
import { ReactComponent as Logo } from '../../assets/navigation-assets/Logo.svg';
import { ReactComponent as PrivateClasses } from '../../assets/navigation-assets/PrivateClasses.svg';
import { ReactComponent as ProyectoPlay } from '../../assets/navigation-assets/ProyectoPlay.svg';
import { ReactComponent as Illustration } from '../../assets/navigation-assets/Illustration.svg';
import { ReactComponent as Rectangle } from '../../assets/navigation-assets/Rectangle.svg';
import { ReactComponent as Ovalo } from '../../assets/navigation-assets/Ovalo.svg';
import { ReactComponent as Rayon } from '../../assets/navigation-assets/Rayon.svg';
import Footer from '../footer/Footer.js';
import $ from 'jquery';

const Home = () => {

    useEffect(() => {
        $('div.portion').css('height', $('div.portion').height());
        $('div.portion').css('width', $('div.portion').width());
    });

    return (
        <div>
            <div className='cream portion'>
                <div id="slogan">
                    <p className='huge-title'><span className='teal-text'>PLAY</span> IS NOT A BREAK FROM LEARNING.</p>
                    <p className='huge-title'>IT'S HOW WE <span className='teal-text'>LEARN.</span></p>
                </div>
                <div id="buttons-under-slogan">
                    <button class="button purple">
                        <Link to="/program"  title="Home">
                            <p className='black-text'>see our program</p>
                        </Link>
                    </button>
                    <button id="get-to-know-us" className="button green">
                        <Link to="/about"  title="Home">
                            <p className='black-text'>get to know us</p>
                        </Link>
                    </button>
                </div>
                <Illustration id="illustration"/>
            </div>
            <div id="brief" className='teal'>
                <div className='info-portion'>
                    <div id="top-section" className='info-section'>
                        <PrivateClasses className='boxy-image'/>
                        <button className='button orange'>
                            <p>sign up</p>
                        </button>
                        <p className="paragraph">
                        Play is an essential part of every child’s life. TheraSpanishPlay
                        uses a unique teaching method of high quality planned experiences
                        to teach kids Spanish, while also enhacing positive relationships
                        and self-esteem.
                        </p>
                    </div>
                    <div id="bottom-section" className='info-section'>
                        <ProyectoPlay className='boxy-image'/>
                        <button  onClick={()  => { window.open('mailto:theraspanishplay@gmail.com?subject=Partner%20Request&body=')}} className='button dark-green'>
                            <p>partner with us</p>
                        </button>
                        <p id="partner-text" className="paragraph">
                        Proyecto Play focuses on hosting large scale community events for
                        parents and children to get together, and play traditional games
                        spending quality time free of any electronic distraction.
                        </p>
                    </div>
                </div>
            </div>
            <div id='reviews' className='cream'>
                <div id="container">
                    <Rectangle id="rectangle"/>
                    <p id="paragraph-one">
                        “We have been fortunate to work with Ms. Ileana for the past couple of years.
                        She’s very creative and has an exciting style that makes learning Spanish fun.
                        The children look forward to the class always, due to her commitment, joy and
                        passion in learning the language and in that they have been able to progress
                        very well.”
                        <h3>- Mona Seraj Saleh</h3>
                    </p>
                    <Ovalo id="ovalo"/>
                    <p id="paragraph-two">
                        “Ms. Ileana is a wonderful teacher.  My daughter has been with her since she
                        was 3 years old, and now she is 9 years old and fluent in Spanish. She looks
                        forward to every lesson as they are play-based. I remember once, three years
                        ago, we were in Switzerland and my daughter talked to a waiter in English. He  
                        didn’t understand, so she switched to Spanish and he understood! I’m so proud
                        of her and so happy that we have chosen Ms. Ileana.”
                        <h3>- Aysha</h3>
                    </p>
                    <Rayon id="rayon"/>
                    <p id="paragraph-three">
                        “I have been having Spanish lessons with Ileana for several enjoyable years.
                        As an older person, who had not undertaken any formal study for many years,
                        I was afraid I would be unable to cope with weekly classes. However, Ileana’s
                        professional approach, with each lesson tailored to the student’s individual
                        needs and development, has ensured my steady progress and nurtured my love for
                        the Spanish language. I am pleased to say that now my son is also taking lessons
                        with Ileana.”
                        <h3>- Madeleine Gurney</h3>
                    </p>
                </div>
            </div>
            <div className="bright-yellow portion">
                <div id="follow-us-container">
                    <h2>Follow Us</h2>
                    <h1>@THERASPANISHPLAY</h1>
                </div>
            </div>
            <div className='unconstrained-portion bright-yellow'>
                <div style={{'width':'90%'}}>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;