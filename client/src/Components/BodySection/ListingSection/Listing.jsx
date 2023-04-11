import React from "react"
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './listing.css'
import user from '../../../assets/images/user.jpg'
import img from '../../../assets/images/img-01.png'
const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>
      <div className="secContainer flex">
        <div className="signleItem">
            <AiFillHeart className="icon"/>
            <img src={img} alt="Image Name" />
            <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
            <AiOutlineHeart className="icon"/>
            <img src={img} alt="Image Name" />
            <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
            <AiOutlineHeart className="icon"/>
            <img src={img} alt="Image Name" />
            <h3>Annual Vince</h3>
        </div>
        <div className="signleItem">
            <AiOutlineHeart className="icon"/>
            <img src={img} alt="Image Name" />
            <h3>Annual Vince</h3>
        </div>

      </div>
    
        <div className="sellers flex">
          <div className="topSellers">
            <div className="heading flex">
              <h3>Top Sellers</h3>
              <button className="btn flex">
                See All <BsArrowRightShort className="icon"/>
              </button>
            </div>
            <div className="card flex">
              <div className="users">
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
              </div>
              <div className="cardText">
                <span>
                  14.556 Plant sold <br/>
                  <small>
                    21 Sellers <span className="date">7 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>
          <div className="featuredSellers">
            <div className="heading flex">
              <h3>Featured Sellers</h3>
              <button className="btn flex">
                See All <BsArrowRightShort className="icon"/>
              </button>
            </div>
            <div className="card flex">
              <div className="users">
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
                <img src={user} alt="User Images" />
              </div>
              <div className="cardText">
                <span>
                  28,556 Plant sold <br/>
                  <small>
                    26 Sellers <span className="date">30 Days</span>
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Listing
