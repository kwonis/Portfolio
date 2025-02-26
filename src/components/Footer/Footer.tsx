import React from 'react';
import { FooterWrapper, IconContainer, IconLink, Email, Divider } from './FooterStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <Divider />
            <IconContainer>
                {/* GitHub */}
                <IconLink href="https://github.com/kwonis?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </IconLink>
                {/* Email */}
                <IconLink href="mailto:oninseoung@naver.com">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </IconLink>
            </IconContainer>
            {/* Email Address */}
            <Email>Contact: oninseoung@naver.com</Email>
        </FooterWrapper>
    );
};

export default Footer;
