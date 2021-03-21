import React,{useEffect,useState} from 'react';
import axios from  'axios';
import { Link } from 'react-router-dom';
import './feedback.css'

const Feedback = (props) =>
(
 <>    
    <div className="feedback-container">
        <img className="user-icon" src={"https://robohash.org/test="+props.feedback.review} alt="userpic"></img>
        <Link to="/" className="Login"><i class="fa fa-fw fa-user"></i> User</Link>
        {/* <div className="username-feedback">
            user
        </div> */}
        <div className="review-feedback">
            <p>Review: {props.feedback.review}</p>
        </div>
        <div className="rating-feedback">
        <i class="fa fa-star fa_custom fa"></i>
        <span>Rating:{props.feedback.rating}/5</span>
            
        </div>
    </div>
 </>
);

export default Feedback;

