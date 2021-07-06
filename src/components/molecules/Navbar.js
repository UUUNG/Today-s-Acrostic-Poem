import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton'

/* 리액트 라우터 추가 */
import {
  Link
} from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <Link to="/"><PrimaryButton name={"공지사항"}/></Link>
      <Link to="/HOFPage"><PrimaryButton name={"명예의 전당"}/></Link>
      <Link to="/"><PrimaryButton name={"일간/주간/월간/연간 랭킹"}/></Link>
    </div>
    
  )
}
export default Navbar;