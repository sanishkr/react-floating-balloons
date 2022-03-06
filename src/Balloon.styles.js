import styled, {keyframes} from "styled-components";
import { random } from "./utils";

const balloonsLeftUpKFAnimation = ({x,y, left, rotate}) => {
  // console.log({x,y, left, rotate});
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    15%{ 
      top: ${`${random(70,80)}vh`};
      left: ${`${left-random(10,20)}vw`};
    }
    25%{
      top: ${`${random(45,55)}vh`};
      left: ${`${left+random(15,20)}vw`};
    }
    45%{
      top: ${`${random(25,40)}vh`};
      left: ${`${left-random(20,30)}vw`};
    }
    80%{
      top: ${`${random(5,15)}vh`};
      left: ${`${left+random(20,30)}vw`};
    }
    100%{
      top: ${`${random(-60,-70)}vh`};
      left: ${`${left-random(30,50)}vw`};
    }
  }
`
};
const balloonsRightUpKFAnimation = ({x,y, left, rotate}) => {
  // console.log({x,y, left, rotate});
  return keyframes`
  {
    0%{ 
      top: 100vh;
      left: ${`${left}vw`};
    }
    30%{ 
      top: ${`${random(60,70)}vh`};
      left: ${`${left-random(10,30)}vw`};
    }
    55%{
      top: ${`${random(30,40)}vh`};
      left: ${`${left+random(5,20)}vw`};
    }
    70%{
      top: ${`${random(10,20)}vh`};
      left: ${`${left-random(20,30)}vw`};
    }
    100%{
      top: ${`${random(-60,-70)}vh`};
      left: ${`${left+random(30,50)}vw`};
    }
  }
`
};

const colorMaps = {
  yellow: 'rgba(150, 150, 0, .75)',
  blue: 'rgba(0, 0, 150, .75)',
  purple: 'rgba(77, 0, 150, 0.75)',
  green: 'rgba(0, 150, 0, .75)',
  orange: 'rgba(150, 47, 0, 0.75)',
  red: 'rgba(150, 0, 0, .75)',
}

export const StyledBalloon = styled.div`
  // top: 100px;
  background-color: ${props => colorMaps[props.color]};
  display: ${props => props.show ? 'block' : 'none'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  left: ${props => `${props.animate.left}vw`};
  transition: transform 0.5s ease;
  z-index: 10;
  animation: ${props => props.animate.left > 50 ? balloonsRightUpKFAnimation(props.animate): balloonsLeftUpKFAnimation(props.animate)} ease-in-out ${props => props.animate.loop ? 'infinite' : '1'};
  // animation-duration: 3s;
  animation-duration: ${props => `${props.animate.duration}s`};
  animation-delay ${props => `${props.animate.delay}s`};
  transform-origin:bottom center;
  --balloonDimension: 15vmax; /* 15% of min(viewport width, height) */
  width: var(--balloonDimension);
  height: var(--balloonDimension);
  border-radius: 100% 100% 15% 100%;
  margin: 0 0 0 25px;
  transform: rotateZ(45deg);
  position: fixed;
  bottom: calc(-1 * var(--balloonDimension));
  &::before {
    content: "";
    width: 10%;
    height: 25%;
    background: radial-gradient(circle, rgba(255,255,255,.7) 0%, rgba(255,255,255,.1) 100%);
    position: absolute;
    left: 15%;
    top: 45%;
    border-radius: 100%;
  }
  &::after {
    content: "";
    width: 13%;
    height: 5%;
    background-color: inherit;
    position: absolute;
    left: 90%;
    top: 94%;
    border-radius: 22%;
    transform: rotateZ(-45deg);
  }
  .string {
    position: absolute;
    background-color: #e2e204;
    border-radius: 50%/100px 100px 0 0;
    width: 4px;
    height: calc(var(--balloonDimension) * .6);
    transform-origin: top center;
    transform: rotateZ(-45deg);
    top: calc(var(--balloonDimension) - 6px);
    left: calc(var(--balloonDimension) - 8px);
  }
  .msg {
    color: #fff;
    font-family: cursive;
    position: absolute;
    top: 30%;
    left: 28%;
    transform: rotate(302deg);
  }
  .show {
    display: block;
    visibility: visible;
  }
`;

