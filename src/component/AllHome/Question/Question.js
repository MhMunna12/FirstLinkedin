// import React from 'react';
// import './Question.css';
// {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous"></link> */}

// const Question = () => {
//     return (
//         <div>
//         {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-kQtW33rZJAHjgefvhyyzcGF3C5TFyBQBA13V1RKPf4uH+bwyzQxZ6CmMZHmNBEfJ" crossorigin="anonymous"></script> */}
//             <section className="container">
//             <h2 className='h2'>Monwar Hossain</h2>
//             <div className="row">
//             <div className="col-md-6">
//                 <div className="accordion" id="accordionExample">
//                     <div className="accordion-item m-3">
//                         <h2 className="accordion-header" id="headingOne">
//                             <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                                 Accordion Item #1
//                             </button>
//                         </h2>
//                         <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
//                             data-bs-parent="#accordionExample">
//                             <div class="accordion-body">
//                                 <strong>This is the first item's accordion body.</strong> It is shown by default, until
//                                 the
//                                 collapse plugin adds the appropriate classes that we use to style each element. These
//                                 classes control the overall appearance, as well as the showing and hiding via CSS
//                                 transitions. You can modify any of this with custom CSS or overriding our default
//                                 variables.
//                                 It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item m-3">
//                         <h2 className="accordion-header" id="headingTwo">
//                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                                 Accordion Item #2
//                             </button>
//                         </h2>
//                         <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
//                             data-bs-parent="#accordionExample">
//                             <div className="accordion-body">
//                                 <strong>This is the second item's accordion body.</strong> It is hidden by default,
//                                 until
//                                 the collapse plugin adds the appropriate classes that we use to style each element.
//                                 These
//                                 classes control the overall appearance, as well as the showing and hiding via CSS
//                                 transitions. You can modify any of this with custom CSS or overriding our default
//                                 variables.
//                                 It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item m-3">
//                         <h2 class="accordion-header" id="headingThree">
//                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                                 Accordion Item #3
//                             </button>
//                         </h2>
//                         <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
//                             data-bs-parent="#accordionExample">
//                             <div class="accordion-body">
//                                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until
//                                 the
//                                 collapse plugin adds the appropriate classes that we use to style each element. These
//                                 classes control the overall appearance, as well as the showing and hiding via CSS
//                                 transitions. You can modify any of this with custom CSS or overriding our default
//                                 variables.
//                                 It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-6">
//                 <div className="accordion" id="accordionExample2">
//                     <div className="accordion-item m-3">
//                         <h2 className="accordion-header" id="headingFour">
//                             <button className="accordion-button" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
//                                 Accordion Item #4
//                             </button>
//                         </h2>
//                         <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
//                             data-bs-parent="#accordionExample2">
//                             <div className="accordion-body">
//                                 <strong>This is the first item's accordion body.</strong> It is shown by default, until
//                                 the collapse plugin adds the appropriate classes that we use to style each element.
//                                 These classes control the overall appearance, as well as the showing and hiding via CSS
//                                 transitions. You can modify any of this with custom CSS or overriding our default
//                                 variables. It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item m-3">
//                         <h2 className="accordion-header" id="headingFive">
//                             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
//                                 Accordion Item #2
//                             </button>
//                         </h2>
//                         <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
//                             data-bs-parent="#accordionExample2">
//                             <div className="accordion-body">
//                                 <strong>This is the second item's accordion body.</strong> It is hidden by default,
//                                 until the collapse plugin adds the appropriate classes that we use to style each
//                                 element. These classes control the overall appearance, as well as the showing and hiding
//                                 via CSS transitions. You can modify any of this with custom CSS or overriding our
//                                 default variables. It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                     <div className="accordion-item m-3">
//                         <h2 className="accordion-header" id="headingSix">
//                             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
//                                 data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
//                                 Accordion Item #3
//                             </button>
//                         </h2>
//                         <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
//                             data-bs-parent="#accordionExample2">
//                             <div class="accordion-body">
//                                 <strong>This is the third item's accordion body.</strong> It is hidden by default, until
//                                 the collapse plugin adds the appropriate classes that we use to style each element.
//                                 These classes control the overall appearance, as well as the showing and hiding via CSS
//                                 transitions. You can modify any of this with custom CSS or overriding our default
//                                 variables. It's also worth noting that just about any HTML can go within the
//                                 <code>.accordion-body</code>, though the transition does limit overflow.
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//         </div>
//     );
// };

// export default Question;