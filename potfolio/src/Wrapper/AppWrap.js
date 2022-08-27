import React from 'react';
import {Socialmedia, Navigationdots} from '../Components';

const AppWrap = (Component, idName, className) => function IOC() {
  return (
    <div id={idName} className={`app_continer ${className}`}>
        <Socialmedia/>
        <div className='app__flex app__wrapper'>
            <Component/>
        </div>
        <Navigationdots active={idName}/>
    </div>
  )
}

export default AppWrap;