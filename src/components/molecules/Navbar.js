import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton'
const Navbar = () => {

  return (
    <div>
      <PrimaryButton name={"공지사항"}/>
      <PrimaryButton name={"명예의 전당"}/>
      <PrimaryButton name={"일간/주간/월간/연간 랭킹"}/>
    </div>
    
  )
}
export default Navbar;