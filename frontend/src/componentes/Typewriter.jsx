import React from 'react';
import './Typewriter.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function TypewriterEffect() {

    const [ text ] = useTypewriter({
        words: ['Python', 'Django', 'JavaScript', 'React js.', 'CSS'],
        loop: true,
        typeSpeed: 200,
        deleteSpeed: 150,
    });

    return (
        <div className='text-container'>
            <h2 className='text'>Desarrollador Junior</h2>
            <h3 className='text'>{text}<span className='cursor'><Cursor cursorSpeed={1000} /></span></h3>
        </div>
    );
}

export default TypewriterEffect;