import React from 'react'
import { TransactionContext } from '../Context/TransactionControl'
const style = {
    colorText: "text-slate-300 text-md px-3 font-medium cursor-pointer hidden md:block",
    wrapper: `p-4 w-screen flex justify-between items-center`,
    headerLogo: `flex w-1/4 items-center justify-start`,
    nav: `flex-1 flex justfy-center items-center`,
    navItemsContainer: `flex bg-[#191B1F] rounded-3xl`,
    navItem: `px-4 py-2 m-1 flex items-center text-lg font-semibold text-[0.9rem] cursor-pointer rounded-3xl`,
    activeNavItem: `bg-[#20242A]`,
    buttonsContainer: `flex w-1/4 justify-end items-center`,
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center bg-[#2d2f36] px-10 py-5 hover:bg-[#41444f] rounded-md`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`, 
    buttonAccent: `bg-[#172A42] border border-[#163256] hover"border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Header = () => {
    
    const {connectWallet, currentAccount } = React.useContext(TransactionContext);
  return (
      
    <div className="headerContainor w-full h-16 bg-[#19181f] flex justify-around items-center">
        <div className="containorLogo px-10 mx-2 h-fit flex justify-center items-center">
            <img className='h-8 w-fit md:h-10' src="https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_48,q_auto/https://app.sushi.com/images/logo.svg" alt="" />
        </div>
        <div className="containorNavs flex w-fit px-3 justify-center items-center">
            <h3 className={style.colorText}>Trade</h3>
            <h3 className={style.colorText}>Liquidity</h3>
            <h3 className={style.colorText}>Farm</h3>
            <h3 className={style.colorText}>Kashi</h3>
            <h3 className={style.colorText}>MISO</h3>
            <h3 className={style.colorText}>Explore</h3>
            <h3 className={style.colorText}>Analytics</h3>
        </div>
        
        {currentAccount 
          ? 
          <div className={`${style.button} ${style.buttonPadding}`}>
            <div className={style.buttonTextContainer}>
              <h1>0x54...9cd</h1>
            </div>
          </div>
        : 
        <div className="containorConnectToWallet flex justify-center items-center w-fit">
        <button onClick={()=>
        {
            connectWallet()
        }} className='text-white h-9 w-36  font-medium rounded-sm linearGradient'>Connect Wallet</button>

    </div>
        }
        
    </div>
  )
}

export default Header