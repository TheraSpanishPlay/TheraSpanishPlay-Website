import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import './Resources.css';
import Footer from '../footer/Footer.js';

import { ReactComponent as AbstractShape } from '../../assets/navigation-assets/AbstractShape.svg';

const Resources = () => {
    return (
        <div>
            <div className='portion purple'> 
                <AbstractShape id='abstract-shape'/>
                <div id='prompt-and-description-parent'>
                    <div id='prompt'>
                        <span className='yellow-text'>PLAY</span> IS EVERY CHILD'S RIGHT.
                    </div>
                    <div id='prompt-description'>
                        The United Nation’s convention applies to all children and teenagers,
                        whoever they are, wherever they live and whatever they believe. So as
                        parents and carers, it is important to make sure your child has the
                        space, time and company of others to play. Playing is your child’s
                        right wherever they are – at home, in childcare and at school.
                    </div>
                </div>
            </div>
            <div className='unconstrained-portion bright-yellow'>
                <div className='content'>
                    <div className='list-block start'>
                        <h1 className='list-title'>BOOKS TO SHARE</h1>
                        <div className='item-on-list first-on-list'>
                            <p className='item-title'>PLAY = LEARNING: How Play Motivates and Enhances Children's Cognitive and Social-Emotional Growth</p>
                            <p className='item-authors'>Dorothy Singer, Roberta Michnick Golinkoff and Kathy Hirsh-Pasek</p>
                        </div>
                        <div className='item-on-list'>
                            <p className='item-title'>Play: The Pathway from Theory to Practice</p>
                            <p className='item-authors'>Sandra Heidemann, Deborah Hewitt</p>
                        </div>
                        <div className='item-on-list'>
                            <p className='item-title'>Play: How It Shapes the Brain, Opens the Imagination, and Invigorates the Soul</p>
                            <p className='item-authors'>Stuart Brown, Christopher Vaughan MD, et al.</p>
                        </div>
                        <div className='item-on-list'>
                            <p className='item-title'>The Interpersonal Neurobiology of Play: Brain-Building Interventions for Emotional Well-Being</p>
                            <p className='item-authors'>Theresa A. Kestly</p>
                        </div>
                        <div className='item-on-list'>
                            <p className='item-title'>Theraplay: Helping Parents and Children Build Better Relationships Through Attachment-Based Play</p>
                            <p className='item-authors'>Phyllis B. Booth and Ann M. Jernberg</p>
                        </div>
                    </div>

                    <div className='list-block end'>
                        <h1 className='list-title'>ARTICLES TO SHARE</h1>
                        <div className='item-on-list first-on-list'>
                            <p className='item-title'>Theraplay: Helping Parents and Children Build Better Relationships Through Attachment-Based Play</p>
                            <p className='item-authors'>Phyllis B. Booth and Ann M. Jernberg</p>
                        </div>
                    </div>
                    <div id='resources-footer'>
                        <Footer />
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Resources;