import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import './Program.css';
import Footer from '../footer/Footer.js';

import { ReactComponent as SpanishAction } from '../../assets/navigation-assets/SpanishAction.svg';
import { ReactComponent as SpanishActionPhone } from '../../assets/navigation-assets/SpanishActionPhone.svg';
import { ReactComponent as ImagesShape } from '../../assets/navigation-assets/ImagesShape.svg';
import { ReactComponent as SoundsShape } from '../../assets/navigation-assets/SoundsShape.svg';
import { ReactComponent as GamesShape } from '../../assets/navigation-assets/GamesShape.svg';
import { ReactComponent as ActivitiesShape } from '../../assets/navigation-assets/ActivitiesShape.svg';
import { ReactComponent as InPersonImage } from '../../assets/navigation-assets/InPerson.svg';
import { ReactComponent as OnlineImage } from '../../assets/navigation-assets/Online.svg';
import { ReactComponent as GroupImage } from '../../assets/navigation-assets/Group.svg';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Program = () => {

    const inPersonRef = useRef(null);
    const onlineRef = useRef(null);
    const groupRef = useRef(null);

    const scrollToInPerson = () => {
        scrollToRef(inPersonRef);
    }

    const scrollToOnline = () => {
        scrollToRef(onlineRef);
    }

    const scrollToGroup = () => {
        scrollToRef(groupRef);
    }

    return (
        <div className='bright-yellow unconstrained-portion'>
            <div id="content">
                <SpanishAction id="spanish-action"/> 
                <SpanishActionPhone id="spanish-action-phone"/>       
                <div id='our-classes-parent'>
                    <div className='orange-title'>OUR CLASSES</div>
                    <div id='our-classes-description'>
                        Classes at TheraSpanishPlay, whether online or in person,
                        are designed around each child, taking into account their
                        strengths in terms of learning style.
                    </div>
                    <div id='types-of-classes' className='orange-title'>TYPES OF CLASSES</div>
                    <div id="black-line"></div>
                    <div id='class-type-parent'>
                        <button onClick={scrollToInPerson} class="button purple">
                            <p>in person</p>
                        </button>
                        <button onClick={scrollToOnline} class="button green">
                            <p>online</p>
                        </button>
                        <button onClick={scrollToGroup} class="button teal">
                            <p>group (&gt;1 kid)</p>
                        </button>
                    </div>
                    <p id="under-types">
                        TheraSpanishPlay classes have been designed with the purpose of maximizing
                        kids’ attention. This is key to facilitate learning and language retention.
                        We do this through different ways like images, sounds, games and interactive
                        activitivies.
                    </p>
                    <div id='shapes-parent'>
                        <ImagesShape className='shape' id="images-shape"/>
                        <SoundsShape className='shape' id="sounds-shape"/>
                        <GamesShape className='shape' id="games-shape"/>
                        <ActivitiesShape className='shape' id="activities-shape"/>
                    </div>
                    <div id="info-parent">
                        <div ref={inPersonRef} className="info-block">
                            <InPersonImage className="info-image"/>
                            <div className="title-and-description">
                                <button class="button purple button-margin">
                                    <p>in person</p>
                                </button>
                                <p className='description-text'>
                                    Our classes in person are uniquely tailored around each child’s learning style.
                                    The more classes, the stronger the relationship between the tutor and child, hence
                                    the better learning.<br/><br/>What all classes have in common are the playful teaching
                                    methods that facilitate the child’s learning. Based on the theraplay research and
                                    child development psychology, these activities aid to fortify the cognitive, social
                                    and emotionals skills of each child.
                                </p>
                            </div>
                        </div>
                        <div ref={onlineRef} id="reversed" className="info-block">
                            <OnlineImage id="reveserd-image" className="info-image"/>
                            <div id="reversed-text"className="title-and-description">
                                <button class="button green button-margin">
                                    <p>online</p>
                                </button>
                                <p className='description-text'>
                                    Online classes are also available for kids. These use the same model of the in
                                    person classes but are modified for the screen.<br/><br/>Note: good internet connection
                                    is key to make the most of these type of classes and maintain the high quality
                                    level of the class. It is the parents’ or supervisor’s responsability to make
                                    sure the kid is able to use the equipment correctly and is a learning friendly
                                    environment to take the class.
                                </p>
                            </div> 
                        </div>
                        <div ref={groupRef} className="info-block">
                            <GroupImage className="info-image"/>
                            <div className="title-and-description">
                                <button class="button teal button-margin">
                                    <p>group (&gt;1 kid)</p>
                                </button>
                                <p className='description-text'>
                                    Group classes are those that have more than 1 child. These are quite common for
                                    families with siblings or cousings who want to learn Spanish together. This usually
                                    works better if the child are in the same age group.
                                </p>
                            </div>
                        </div>
                       
                    </div>
                    <Footer id="progran-footer"/>   
                </div>
            </div>
        </div>
       
    )
}

export default Program;