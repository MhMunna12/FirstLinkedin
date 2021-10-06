import React from 'react';
import './Comment.css';
import asa from '../../../images/aba.jpg';
import hafsa from '../../../images/hafsa.jpg';
import rahim from '../../../images/rahim.jpeg';
import CommentDetail from '../CommentDetail/CommentDetail';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const C_data =[
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum s',
    img:asa
  },
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum',
    img:hafsa
  },
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum at ',
    img:rahim
  }
];
const Comment = () => {
    return (
        <div className="container">
            <div className='text-center p-5 comment-main'>
                <h1>Comment on <span className="text-primary">your <br /> experience</span>  </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quo aliquam numquam exercitationem consequatur, quod est facilis, sed ullam ipsa iure quas fuga sunt cupiditate. Sit expedita earum obcaecati ab eius! Expedita iure obcaecati exercitationem illum eveniet et consequatur praesentium fugiat inventore, earum, nemo consequuntur.</p>
            </div>
            <div className='row'>
            <div className='col-md-7'>
                {
                    C_data.map(data => <CommentDetail data={data} />)
                }
            </div> 
            <div className='col-md-4 sec-right'>
                <h4 className='mt-3'>Leave a Comment</h4>
                <div className='d-flex justify-content-center'>
                <hr className='comment-br  ' />
                </div>
                <h6 className='rating'><FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  /> <FontAwesomeIcon  icon={faStar}  />  <span style={{color:'skyblue', marginLeft:'13px'}}>4.5</span></h6><br />
                <input type="text" name="" className="input form-control" placeholder='Enter Your Name' id="" />
              
                <br />
                <input type="text" name="" className="input form-control" placeholder='Enter Your Email' id="" />
                
                <br />
                <textarea name="" id="" cols="23" className="text-area form-control" placeholder='Enter Your Message' rows="4"></textarea>
                <br />
                <button>Submit</button>
            </div>
            </div> 
        </div>
    );
};

export default Comment;