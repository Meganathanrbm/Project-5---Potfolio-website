import React from 'react';
import {Socialmedia} from '../Components';

const AppWrap = (Component, idName, className) => function IOC() {
  return (
    <div id={idName} className={`app_continer ${className}`}>
        <Socialmedia/>
        <div className='app__flex app__wrapper'>
            <Component/>
        </div>

    </div>
  )
}

export default AppWrap;