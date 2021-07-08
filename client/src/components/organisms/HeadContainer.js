import React from 'react';
import Navbar from '../molecules/Navbar'
import Title from '../atoms/Title'
const HeadContainer = () => {

  return (
    <div 
      style={{
        background:'linear-gradient(315deg, #20bf55 0%, #01baef 74%)', 
        height: 60, 
      }}
    >
      <div style={{maxWidth: 1080, margin: '0px auto', height: '100%', padding:'0px 20px'}}>
        <div style={{display: 'flex', alignItems:'center', height: '100%'}}>
          <div>
            <Title/>
          </div>
          <div style={{flexGrow: 1}} />
          <div>
            <Navbar/>
          </div>
        </div>
      </div>
      
    </div>
  )
}
export default HeadContainer;