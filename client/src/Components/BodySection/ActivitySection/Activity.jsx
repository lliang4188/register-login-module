import React from "react"
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../assets/images/user.jpg'
const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="signleCustomer flex">
          <img src={user} alt="Curstom Image" />
          <div className="curstomDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="signleCustomer flex">
          <img src={user} alt="Curstom Image" />
          <div className="curstomDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="signleCustomer flex">
          <img src={user} alt="Curstom Image" />
          <div className="curstomDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="signleCustomer flex">
          <img src={user} alt="Curstom Image" />
          <div className="curstomDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="signleCustomer flex">
          <img src={user} alt="Curstom Image" />
          <div className="curstomDetails">
            <span className="name">Ola Martha</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Activity
