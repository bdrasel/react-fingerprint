import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from "./InfoSection.elements";

const InfoSection = ({
  lightBig,
  imgStart,
  primary,
  loghtTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  topLine,
  buttonLabel,
  imgSource,
  alt,
  start
}) => {
  return (
    <>
      <InfoSec lightBig={lightBig}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine loghtTopLine={loghtTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button Big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>

            <InfoColumn start={start}>
              <ImgWrapper>
                <Img src={imgSource} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
