import React from 'react'
import "./contact.scss"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {

    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };

    return(
        <div className="contact" id="contact"> 
            <div className ="background">
                <img src="assets/pattern1.png" alt=""/>
            </div>
            <div className="main">
                <span>Contact</span>
                <form name="contact v1" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="form_name" value="contact" />
                    <input required type="text" name="email" placeholder=" Your Email" />
                    <textarea required name="message" placeholder= "Message"></textarea>
                    <button type= "submit"> Submit </button>
                </form>
            </div>
            <div className="bottom-bar">
                <span>Made by Michael Ward</span>
                <div id="socials">
                    <div className="itemContainer">
                        <a href="https://github.com/mikeRobWard?tab=repositories" target="_blank" rel="noreferrer">
                        <GitHubIcon className="github" /></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://twitter.com/MWard_GIS" target="_blank" rel="noreferrer">
                        <TwitterIcon className="twitter" /></a>
                    </div>
                    <div className="itemContainer">
                        <Mailto email="michaelward94@gmail.com" subject="I love your website" body="Hi Mike,">
                        <MailOutlineIcon className="mail" /></Mailto>
                    </div>
                </div>
            </div>
        </div>
    )
}