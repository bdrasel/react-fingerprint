import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin
} from "react-icons/fa";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubscrption,
  FooterSubHeading,
  FooterSubText,
  Form,
  FromInput,
  FooterLinksContainer,
  FooterLinksWrpper,
  FooterLinsItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink,
  SocialIcon
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscrption>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>

        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FromInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscibe</Button>
        </Form>
      </FooterSubscrption>
      <FooterLinksContainer>
        <FooterLinksWrpper>
          <FooterLinsItems>
            <FooterLinksTitle>About Us</FooterLinksTitle>
            <FooterLink to="/signup">How it works</FooterLink>
            <FooterLink to="/">Testtimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinsItems>
          <FooterLinsItems>
            <FooterLinksTitle>Contact Us</FooterLinksTitle>
            <FooterLink to="/signup">How it works</FooterLink>
            <FooterLink to="/">Testtimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinsItems>
        </FooterLinksWrpper>
        <FooterLinksWrpper>
          <FooterLinsItems>
            <FooterLinksTitle>Videos</FooterLinksTitle>
            <FooterLink to="/signup">How it works</FooterLink>
            <FooterLink to="/">Testtimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinsItems>
          <FooterLinsItems>
            <FooterLinksTitle>Social Media</FooterLinksTitle>
            <FooterLink to="/signup">How it works</FooterLink>
            <FooterLink to="/">Testtimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinsItems>
        </FooterLinksWrpper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Fingerprint
          </SocialLogo>
          <WebsiteRight>ULTRA @ 2021</WebsiteRight>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};
export default Footer;
