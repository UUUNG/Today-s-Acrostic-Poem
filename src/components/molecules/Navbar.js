import React from 'react';
import PrimaryButton from '../atoms/PrimaryButton'

import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div>
      <Link to="/HOFPage"><PrimaryButton name={"명예의 전당"}/></Link>
      <Link to="/RankingPage"><PrimaryButton name={"일간/주간/월간/연간 랭킹"}/></Link>
    </div>
    
  )
}
export default Navbar;