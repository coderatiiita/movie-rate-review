import React,{useEffect,useState} from 'react';
import axios from  'axios';
import './feedback.css'

const Feedback = ({user,review,rating}) => 
(
 <>
    <div className="feedback-container">
        <div className="username-feedback">
            user
        </div>
        <div className="review-feedback">
            {review}
        </div>
        <div className="rating-feedback">
            {rating}
        </div>

    </div>
 </>
);

export default Feedback;