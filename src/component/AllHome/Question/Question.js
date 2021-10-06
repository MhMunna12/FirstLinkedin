import React from 'react';
require('./Question.css')
// require('./toggle')

const Question = () => {

    function collapsible(e){
        this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.visibility = "hidden";
      content.style.margin = "0 2%";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.visibility = "visible";
      content.style.margin = "12px 2%";
    }
    }
    return (
        <section class="main-section mt-5">
        <div id="faqs" class="container">
            <h2 class=" text-center">Frequently Asked Questions <br />Questions</h2>
            <p class=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Officia sunt ipsa
                excepturi perspiciatis autem corporis<br /> nisi facilis? Minima, sit ratione.</p>
            
            <div id="faqSection" class="fullwidth-container row">
                <div class="col-md-6">
                    <button class="collapsible" onclick={collapsible}>Do you work full time as a developer?</button>
                    <div class="faq-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan. Maecenas
                            tincidunt diam odio, sit amet tincidunt est tincidunt at. Suspendisse luctus dolor quis
                            aliquam pulvinar. Ut non neque in lorem ullamcorper faucibus. In et neque in sem ultrices
                            mattis. Duis eu mauris urna. Suspendisse vitae suscipit odio, suscipit convallis odio.
                            Integer at consectetur sapien. Mauris ex tortor, gravida vel diam sit amet, congue
                            ullamcorper enim. Curabitur viverra bibendum leo, et condimentum enim efficitur eu. Ut
                            euismod finibus ligula at volutpat. Nulla sit amet sem non elit posuere fringilla in eu
                            justo.</p>
                    </div>
                    <button class="collapsible" onclick={collapsible}>Do you require a deposit before working?</button>
                    <div class="faq-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan. Maecenas
                            tincidunt diam odio, sit amet tincidunt est tincidunt at. Suspendisse luctus dolor quis
                            aliquam pulvinar. Ut non neque in lorem ullamcorper faucibus. In et neque in sem ultrices
                            mattis. Duis eu mauris urna. Suspendisse vitae suscipit odio, suscipit convallis odio.
                            Integer at consectetur sapien. Mauris ex tortor, gravida vel diam sit amet, congue
                            ullamcorper enim. Curabitur viverra bibendum leo, et condimentum enim efficitur eu. Ut
                            euismod finibus ligula at volutpat. Nulla sit amet sem non elit posuere fringilla in eu
                            justo.</p>
                    </div>
                    <button class="collapsible" onclick={collapsible}>Will I own the website?</button>
                    <div class="faq-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan. Maecenas
                            tincidunt diam odio, sit amet tincidunt est tincidunt at. Suspendisse luctus dolor quis
                            aliquam pulvinar. Ut non neque in lorem ullamcorper faucibus. In et neque in sem ultrices
                            mattis. Duis eu mauris urna. Suspendisse vitae suscipit odio, suscipit convallis odio.
                            Integer at consectetur sapien. Mauris ex tortor, gravida vel diam sit amet, congue
                            ullamcorper enim. Curabitur viverra bibendum leo, et condimentum enim efficitur eu. Ut
                            euismod finibus ligula at volutpat. Nulla sit amet sem non elit posuere fringilla in eu
                            justo.</p>
                    </div>
                    <button class="collapsible" onclick={collapsible}>Are there other costs involved?</button>
                    <div class="faq-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan. Maecenas
                            tincidunt diam odio, sit amet tincidunt est tincidunt at. Suspendisse luctus dolor quis
                            aliquam pulvinar. Ut non neque in lorem ullamcorper faucibus. In et neque in sem ultrices
                            mattis. Duis eu mauris urna. Suspendisse vitae suscipit odio, suscipit convallis odio.
                            Integer at consectetur sapien. Mauris ex tortor, gravida vel diam sit amet, congue
                            ullamcorper enim. Curabitur viverra bibendum leo, et condimentum enim efficitur eu. Ut
                            euismod finibus ligula at volutpat. Nulla sit amet sem non elit posuere fringilla in eu
                            justo.</p>
                        <ul>
                            <li>Custom LI</li>
                            <li>Custom LI</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan.Contact me
                            via <a href="mailto:#" target="_blank">EMAIL</a> and I will be more than happy to answer
                            your queries.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <button class="collapsible" onclick={collapsible}>What is hosting? Will I need it?</button>
                    <div class="faq-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan.</p>

                    </div>
                    <button class="collapsible" onclick={collapsible}>Will you work for equity on a new idea I have?</button>
                    <div class="faq-content ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan.</p>

                    </div>
                    <button class="collapsible" onclick={collapsible}>How much experience do you have?</button>
                    <div class="faq-content ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan.</p>
                    </div>
                    <button class="collapsible" onclick={collapsible}>What if I need changes. Can I edit it myself?</button>
                    <div class="faq-content ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat neque eu odio
                            convallis, porta consequat erat rhoncus. Curabitur vulputate porttitor lectus, vitae
                            tincidunt dolor eleifend vitae. Praesent sollicitudin eros in finibus posuere. Quisque at
                            turpis arcu. Sed condimentum elit ac elit rhoncus, volutpat feugiat orci accumsan.</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Question;