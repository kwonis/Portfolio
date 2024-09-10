import React from 'react';
import { FooterWrapper, IconContainer, IconLink } from './FooterStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <IconContainer>
                <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </IconLink>
                <IconLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </IconLink>
                <IconLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </IconLink>
                <IconLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </IconLink>
            </IconContainer>
        </FooterWrapper>
    );
};

export default Footer;
