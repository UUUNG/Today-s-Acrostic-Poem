import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton'
const Navbar = () => {

  return (
    <div style={{display:'flex', backgroundColor:'#87ceeb',justifyContent:'center'}}>
      <PrimaryButton name={"공지사항"}/>
      <PrimaryButton name={"명예의 전당"}/>
    </div>
    
  )
}
export default Navbar;