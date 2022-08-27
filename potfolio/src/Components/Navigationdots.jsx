import React from 'react'

const Navigationdots = (props) => {
  return (
    <div className='app_navigation'>
         {['Home','About','Skill','Projects','Contact'].map((link,index)=>(
         
            <a href={`#${link}`}
            key={link + index}
            className="app_navigation-dots"
            style={link===props.active?{backgroundColor:'#0096ff'}:{ }}
            />
         
        ))}

    </div>
  )
}

export default Navigationdots;