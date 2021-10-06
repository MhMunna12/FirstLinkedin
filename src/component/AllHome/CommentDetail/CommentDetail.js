import React from "react";
import "./CommentDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const CommentDetail = (props) => {
  const { img, name, desc } = props.data;
  console.log(props);
  return (
    <div className="container">
      <div className="comment-sec">
      <div className="d-flex">
          <div className='image'>
            <img src={img} alt="" />
          </div>
          <div className='content'>
            <h4>{name}</h4>
            <p className='content-p'>{desc} <br /> <span className="span">Read more</span> </p>
            <h6 className='rating'><FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  />  <span style={{color:'skyblue', marginLeft:'13px'}}>5.0</span></h6>
            <hr  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
