import React,{useEffect,useState} from 'react';
import axios from  'axios';
import './feedback.css'

const Feedback = (props) => 
(
 <>
    <div className="feedback-container">
        <div className="username-feedback">
            user
        </div>
        <div className="review-feedback">
            {props.feedback.review}
        </div>
        <div className="rating-feedback">
            {props.feedback.rating}
        </div>

    </div>
 </>
);

export default Feedback;