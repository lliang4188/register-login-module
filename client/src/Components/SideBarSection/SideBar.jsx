import React from "react"
import './sidebar.css'
import logo from '../../assets/images/logo.png'

import {IoMdSpeedometer} from 'react-icons/io'
import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md'
import {BsTrophy, BsCreditCard2Front} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
const SideBar   = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3>QUICK MENU</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className='icon' />
              <span className="smallText">Dash borad</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className='icon' />
              <span className="smallText">My Orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className='icon' />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className='icon' />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3>Settings</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlinePieChart className='icon' />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className='icon' />
              <span className="smallText">Trends</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className='icon' />
              <span className="smallText">Contact</span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsCreditCard2Front className='icon' />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar 
