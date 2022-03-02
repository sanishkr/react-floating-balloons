import styled, {keyframes} from "styled-components";

const balloons = ({x,y, left, rotate}) => {
  console.log({x,y, left, rotate});
  return keyframes`
  {
    0%{ 
      // offset: ${y / -200};
      // bottom: -100px;
      top: 100vh;
      left: ${`${left}vw`};
      transform: rotateZ(0);
      // transform: ${`rotateZ(45deg) translate(0, 0)`};
    }
    25%{ 
      // offset: ${(x + y) / -200};
      top: 65vh;
      left: ${`${left-20}vw`};
      transform: ${`rotate(${45}deg)`};
      // transform: ${`rotateZ(45deg) translate(${30}vw, ${70}vh)`};
    }
    50%{
      // offset: ${(-100 + x) / -200};
      top: 40vh;
      left: ${`${left+40}vw`};
      // transform: ${`rotate(${-4}deg)`};
			// transform: ${`rotateZ(45deg) translate(${70}vw, 30vh)`};
    }
    75%{
      // offset: ${(-100 + x) / -200};
      top: 20vh;
      left: ${`${left-30}vw`};
      transform: ${`rotate(${45}deg)`};
			// transform: ${`rotateZ(45deg) translate(${70}vw, 30vh)`};
    }
    100%{
      // offset: 1;
      top: -40vh;
      left: ${`${left+50}vw`};
      // transform: ${`rotate(${-4}deg)`};
			// transform: ${`rotateZ(45deg) translate(-100vw, -100vh)`};
    }
  }
`
};

const colorMaps = {
  yellow: 'rgba(150, 150, 0, .45)',
  blue: 'rgba(0, 0, 150, .45)',
  purple: 'rgba(77, 0, 150, 0.45)',
  green: 'rgba(0, 150, 0, .45)',
  orange: 'rgba(150, 47, 0, 0.45)',
  red: 'rgba(150, 0, 0, .45)',
}

export const Balloon = styled.div`
  // top: 100px;
  background-color: ${props => colorMaps[props.color]};
  display: ${props => props.show ? 'block' : 'none'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  left: ${props => `${props.animate.left}vw`};
  transition: transform 0.5s ease;
  z-index: 10;
  animation: ${props => balloons(props.animate)} ease-in-out infinite;
  // animation-duration: 3s;
  animation-duration: ${props => `${props.animate.duration/1000}s`};
  animation-delay ${props => `${props.animate.delay/1000}s`};
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
    background-color: #990;
    border-radius: 50%/100px 100px 0 0;
    width: 2px;
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
`;

