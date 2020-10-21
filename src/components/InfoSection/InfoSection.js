import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import RaisedButton from 'material-ui/RaisedButton';
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
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
      <MuiThemeProvider>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/hoursCompleted'>
                <RaisedButton
                  label= "View Hours"
                  primary= {true}
                  style={styles.button}
                  />
                </Link>
                <Link to='/userForms'>
                  <RaisedButton
                  label= "Fill Out Form"
                  primary= {true}
                  style={styles.button}
                  />
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
        </MuiThemeProvider>
      </InfoSec>
    </>
  );
}

const styles ={
  button: {
      margin: 10,
  }

}

export default InfoSection;