import image from './image.jpg';
import Title from './Title';
import Description from './Description';
import Image from './Image';
import './simple-react.css';

import React, { Component } from 'react';

class SimpleCard extends Component {
    render() {
        
        return (
            <div className="cardBody">
                
                <header className="simple-card">
                    <Image imgUrl={image}/>
                
                    <Title title="Simple React Card"/>
                    
                    <Description description="React is an open-source front-end JavaScript library for building user interfaces or UI components."/>
                </header>
                
            </div>
        );
    }
}

export default SimpleCard;
