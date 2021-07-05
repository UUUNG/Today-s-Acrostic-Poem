import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton'
const Navbar = () => {

  return (
    <div style={{display:'flex', backgroundColor:'#87ceeb',justifyContent:'center'}}>
      <PrimaryButton name={"공지사항"}/>
      <PrimaryButton name={"명예의 전당"}/>
      <PrimaryButton name={"일간 랭킹"}/>
      <PrimaryButton name={"주간 랭킹"}/>
      <PrimaryButton name={"월간 랭킹"}/>
    </div>
    
  )
}
export default Navbar;