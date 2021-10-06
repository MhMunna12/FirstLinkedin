import React from 'react';
import './Comment.css';
import asa from '../../../images/aba.jpg';
import hafsa from '../../../images/hafsa.jpg';
import rahim from '../../../images/rahim.jpeg';
import CommentDetail from '../CommentDetail/CommentDetail';

const C_data =[
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum at minus voluptates deleniti ipsa dolores',
    img:asa
  },
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum at minus voluptates deleniti ipsa dolores',
    img:hafsa
  },
  {
    name:'Niloy Kumar',
    desc:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitaequas reprehenderit harum at minus voluptates deleniti ipsa dolores',
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
            <div className='col-md-6'>
                {
                    C_data.map(data => <CommentDetail data={data} />)
                }
            </div> 
            <div className='col-md-4 sec-right'>
                <h5>Leave a Comment</h5>
                <div className='d-flex justify-content-center'>
                <hr className='comment-br  ' />
                </div>
            </div>
            </div> 
        </div>
    );
};

export default Comment;