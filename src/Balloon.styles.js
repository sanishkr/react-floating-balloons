import styled from "styled-components";

const colorMaps = {
  yellow: 'rgba(150, 150, 0, .45)',
  blue: 'rgba(0, 0, 150, .45)',
  purple: 'rgba(77, 0, 150, 0.45)',
  green: 'rgba(0, 150, 0, .45)',
  orange: 'rgba(150, 47, 0, 0.45)',
  red: 'rgba(150, 0, 0, .45)',
}

export const Balloon = styled.div`
  background-color: ${props => colorMaps[props.color]}
  --balloonDimension: 15vmax; /* 15% of min(viewport width, height) */
  width: var(--balloonDimension);
  height: var(--balloonDimension);
  border-radius: 100% 100% 15% 100%;
  margin: 0 0 0 25px;
  transform: rotateZ(45deg);
  position: fixed;
  bottom: calc(-1 * var(--balloonDimension));
  left: 0;
  display: none;
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

