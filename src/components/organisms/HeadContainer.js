import React from 'react';
import Navbar from '../molecules/Navbar'
import Title from '../atoms/Title'
const HeadContainer = () => {

  return (

    <div style={{display:'flex', backgroundColor:'#87ceeb'}}>
      <div style={{flexGrow:2, flexBasis:0}}>
        <Title/>
      </div>
      <div style={{display:'flex',flexGrow:8, flexBasis:0}}>
        <Navbar/>
      </div>
      
    </div>
  )
}
export default HeadContainer;