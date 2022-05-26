import React from "react";
import Image from "next/image";
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import newLogo from "../Assets/newLogo.webp"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const style = {
  wrapper: "w-screen items-center flex justify-center mt-14 p-8",
  content: "bg-[#19181f] w-[40rem] rounded-2xl p-4",
  formHeader: "px-2 flex items-center justify-between font-semibold text-xl",
  transferPropContainor:
    "bg-[#20242a] my-3 rounded-2xl p-6 text-3xl border border-[#20242a] hover:border-[#42644f] flex justify-between",
  transferPropInput:
    "bg-transparent placeholder:text-[#b2b9d2] outline-none <mb-4</mb-5> w-full text-2xl",
  currencySelector: "flex w-1.5/4 md:w-1/4",
  currencySelectorContent:
    "w-full h-min flex justify-between items-center bg-[#2d2f36] hover:bg-[#41444f] rounded-2xl text-xl font-medium cursor-pointer p-2 at-[-0.2rem]",
  currencySelectorIcon: "flex items-center",
  currencySelectorTicker: "mx-2 text-white text-md",
  currencySelectorArrow: "text-lg text-white",
  confirmButton:
    "bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]",
};
const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div className="text-slate-300">Swap</div>
          {/* Containor for icon expectd  */}
          <div><RiSettings3Fill className="cursor-pointer" /></div>          
        </div>
        <div className={style.transferPropContainor}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.00"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => {
              handleChange(e, "amount");
            }}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                {/* <img
                  className="h-9 w-9"
                  src="https://res.cloudinary.com/sushi-cdn/image/fetch/f_auto,c_limit,w_48,q_auto/https://app.sushi.com/images/logo.svg"
                  alt=""
                /> */}
                <Image src={newLogo} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow}/>
              {/* DropDown Icon with class currencySelector arrow */} 
              
            </div>
          </div>
        </div>
        <div className={style.transferPropContainor}>
        <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => {
              handleChange(e, "amount");
            }}
          />
          <div className={style.currencySelector}></div>
        </div>
        <div className={style.confirmButton} onClick={(e)=>
        {
            handleSubmit(e)
        }}>Confirm</div>
      </div>
    </div>
  );
};

export default Main;
