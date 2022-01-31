import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'

function Footer() {
    return (
        <div className="footer_container">
            <section className="footer_subscription">
                <p className="footer_subscription_heading">
                    Join the Adventure newsletter to recieve our best vacation deals!!!
                </p>
                <p className="footer_subscription_text">
                    You can unsubscribe anytime
                </p>
                <div className="input_areas">
                    <form>
                        <input type="email" name="email" placeholder="Input your email" className="footer_input" />
                        <Button buttonStyle="btn_outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer_links'>
                <div className='footer_link_wrapper'>
                    <div className='footer_link_items'>
                        <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer_link_items'>
                        <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                    </div>
                </div>
                <div className='footer_link_wrapper'>
                    <div class='footer_link_items'>
                        <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer_link_items'>
                        <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social_media">
                <div className="social_media_wrap">
                    <div className="footer_logo">
                        <Link className="social_logo">
                            TRAVEL <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website_rights">TRAVEL 2021</small>
                    <div className="social_icons">
                        <Link className="social_link_icon_facebook" to="/" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link className="social_link_icon_instagram" to="/" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link className="social_link_icon_linkedin" to="/" target="_blank" aria-label="Linkedin">
                            <i className="fab fa-linkedin" />
                        </Link>
                        <Link className="social_link_icon_youtube" to="/" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer
