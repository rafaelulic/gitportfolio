import React from 'react';
import PageHeader from './PageHeader';

const Contact = () => {
    return (            
            <div className="contact container" id="contact">
                <PageHeader title="Contact Me" />
                
                <div className="row">
                    <div className="col">
                        <p><a href="mailto:raf.tutorials@gmail.com">Mail</a></p>
                        <p><a href="https://twitter.com/raftutorials">Twitter</a></p>
                        <p><a href="https://youtube.com/raftutorials">YouTube</a></p>
                        <p><a href="https://github.com/raftutorials">Github</a></p>
                    </div>
                    <div className="col">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Email</label>
                                <input type="email" name="email" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Message</label>
                                <textarea name="message" id="" cols="30" rows="10" placeholder="Enter your message">
                                </textarea>
                            </div>                      
                            
                            
                            <input type="submit" value="Send message" />
                        </form>
                    </div>
                </div>















                {/* <div className="row">
                    <div className="col">
                        <h3>New Business?</h3>
                        <p>Let's build something awesome.</p>
                        <a href="mailto:rafael.ulic@gmail.com">rafael.ulic@gmail.com</a>
                    </div>
                    <div className="col">
                        <h3>Learn Something?</h3>
                        <p>Subscribe to my channel.</p>
                        <a href="mailto:rafael.ulic@gmail.com">YouTube</a>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="row">
                    <div className="col">
                        <h3>High Five?</h3>
                        <p>Plain talk, no worries.</p>
                        <a href="mailto:rafael.ulic@gmail.com">Twitter</a>
                    </div>
                    <div className="col">
                        <h3>Git it?</h3>
                        <p>Clone, pull, push.</p>
                        <a href="mailto:rafael.ulic@gmail.com">Github</a>
                    </div>
                </div> */}
            </div>
    );
}

export default Contact;