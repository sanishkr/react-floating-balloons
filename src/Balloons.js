import React from "react";

import {random, randomColor} from './utils';
import {Balloon} from './Balloon.styles';

// export const Balloon = () => {
// 	const msgText = 'Happy Birthday.'
// 	const colors = ['yellow', 'green', 'blue', 'red'];

//   const stringElement = document.createElement('div');
// 	stringElement.classList.add('string');

//   const msgElement = document.createElement('span');
// 	msgElement.innerText = msgText;
// 	msgElement.classList.add('msg');

//   const balloon = document.createElement('div');
//   balloon.classList.add('balloon', 'show');
//   balloon.classList.add(randomColor(colors))
//   // balloon.addEventListener('dblclick', popBalloon);
//   balloon.append(stringElement.cloneNode());
//   balloon.append(msgElement.cloneNode(random(0,2)===0));

//   function releaseBalloon(balloon) {
// 		const delay = random(100, 1000);
// 		const x = random(-99, -30); // random x value to fly
//     const y = random(-99, -30); // random y value to fly
// 		// const x = random(-59, -10); // random x value to fly
// 		// const y = random(-99, 0); // random y value to fly

// 		const sequence = [
// 			{
// 				offset: 0,
// 				transform: `rotateZ(45deg) translate(0, 0)`,
// 			},
// 		];

// 		// random fly direction
// 		if (random(0, 2) === 0) {
// 			// first fly up to top left

// 			// left distance to keep balloon in view
// 			balloon.style.left = `${-1 * x}vw`;

// 			sequence.push({
// 				offset: x / -200,
// 				transform: `rotateZ(45deg) translate(${x}vw, 0)`,
// 			});
// 			sequence.push({
// 				offset: (x + y) / -200,
// 				transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
// 			});
// 			sequence.push({
// 				offset: (-100 + y) / -200,
// 				transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`,
// 			});
// 		} else {
// 			// fist fly up to right top

// 			sequence.push({
// 				offset: y / -200,
// 				transform: `rotateZ(45deg) translate(0, ${y}vh)`,
// 			});
// 			sequence.push({
// 				offset: (x + y) / -200,
// 				transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
// 			});
// 			sequence.push({
// 				offset: (-100 + x) / -200,
// 				transform: `rotateZ(45deg) translate(${x}vw, -100vh)`,
// 			});
// 		}

// 		// last move is common
// 		sequence.push({
// 			offset: 1,
// 			transform: `rotateZ(45deg) translate(-100vw, -100vh)`,
// 		});

// 		const balloonAnimation = balloon.animate(sequence, {
// 			duration: 10000,
// 			delay: delay,
// 		});

// 		balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
// 	}

//   setTimeout(() => {
//     releaseBalloon(balloon);
//   }, 1 * 2000 + random(500, 1000));

//   return balloon;
// }

export const Balloons = ({count, msgText, colors, popVolumeLevel}) => {
  const density = count; // concurrent balloon count
	let audio = new Audio('https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');
	audio.volume = 0.2;

  const popBalloon = (e) => {
		let t = e.currentTarget;
		const burst = new mojs.Burst({
			radius: { 30: 100 },
			parent: t,
			count: 10,
			className: 'show',
			children: {
				fill: [t.classList[2]],
				angle: { 0: 180 },
				delay: 'stagger(0, 25)',
				shape: [ 'circle', 'polygon' ],
			}
		});
		if(t.classList.contains('balloon')) {
			audio.play();
			t.style.visibility = 'hidden';
			// burst.style.visibility = 'visible'
			// t.classList.toggle('show');
			// t.append(burst.cloneNode())
			// console.log(t.classList)
		} else {
			audio.play();
			t.parentElement.classList.toggle('show');
			console.log(t.parentElement.classList, '------')
		}
		burst.replay();
	};

  function releaseBalloon(balloon) {
		const delay = random(100, 1000);
		const x = random(-99, -30); // random x value to fly
    const y = random(-99, -30); // random y value to fly
		// const x = random(-59, -10); // random x value to fly
		// const y = random(-99, 0); // random y value to fly

		const sequence = [
			{
				offset: 0,
				transform: `rotateZ(45deg) translate(0, 0)`,
			},
		];

		// random fly direction
		if (random(0, 2) === 0) {
			// first fly up to top left

			// left distance to keep balloon in view
			balloon.style.left = `${-1 * x}vw`;

			sequence.push({
				offset: x / -200,
				transform: `rotateZ(45deg) translate(${x}vw, 0)`,
			});
			sequence.push({
				offset: (x + y) / -200,
				transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
			});
			sequence.push({
				offset: (-100 + y) / -200,
				transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`,
			});
		} else {
			// fist fly up to right top

			sequence.push({
				offset: y / -200,
				transform: `rotateZ(45deg) translate(0, ${y}vh)`,
			});
			sequence.push({
				offset: (x + y) / -200,
				transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`,
			});
			sequence.push({
				offset: (-100 + x) / -200,
				transform: `rotateZ(45deg) translate(${x}vw, -100vh)`,
			});
		}

		// last move is common
		sequence.push({
			offset: 1,
			transform: `rotateZ(45deg) translate(-100vw, -100vh)`,
		});

		const balloonAnimation = balloon.animate(sequence, {
			duration: 10000,
			delay: delay,
		});

		balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
	}

  const createBalooon = (i) => {
		const delay = random(100, 3000);
		const duration = 6000 + random(1000, 4000);
		const left = random(20, 80); // random init left value to fly
		const x = random(-90, -90); // random x value to fly
    const y = random(-90, -90); // random y value to fly

    const b = <Balloon
			key={`ballon-${i+1}`}
			color={randomColor(colors)}
			animate={{
				x,
				y,
				delay,
				duration,
				rotate: random(20, 25),
				left,
			}}
			show
		>
			<div className="string"></div>
			<span className="msg">{msgText}</span>
		</Balloon>

    // setTimeout(() => {
    //   releaseBalloon(b);
    // }, i * 2000 + random(500, 1000));
    return b;
  }

  return <div className="set-of-balloons">
		{
			new Array(density).fill(null).map((b, i) => createBalooon(i))
		}
    {/* {createBalooon()} */}
  </div>
}