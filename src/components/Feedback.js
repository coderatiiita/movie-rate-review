import React,{useEffect,useState} from 'react';
import axios from  'axios';
import { Link } from 'react-router-dom';
import './feedback.css'

const Feedback = (props) =>
(
 <>    
    <div className="feedback-container">
        <div className="feedback-text">
            {/* <img className="user-icon" src="../user.png" alt="userpic"></img> */}
            <Link to="/" className="Login"><i class="fa fa-fw fa-user"></i> User</Link>
            {/* <div className="username-feedback">
                user
            </div> */}
            <div className="review-feedback">
                <p className="review-title">Review : {props.feedback.review}</p>
            </div>
            <div className="rating-feedback">
            <i class="fa fa-star fa_custom fa"></i>
            <span className="rating-title">Rating :{props.feedback.rating}/5</span>
                
            </div>

        </div>
    </div>
 </>
);

export default Feedback;

