import * as React from 'react';
import { createPortal } from 'react-dom';

import {Balloons} from './Balloons';

const ReactFloatingBalloons = ({
	count = 7,
	msgText = 'Happy Birthday.',
	colors = ['yellow', 'green', 'blue', 'red', 'orange', 'purple'],
	popVolumeLevel = 0.5,
	loop = true,
	hangOnTop = false,
	// duration = 10000,
	// delay = 100,
	// name,
}) => {
	const [CSR, setCSR] = React.useState(false)
	React.useEffect(() => {
		setCSR(true)
	}, []);
	if(hangOnTop && loop) {
		return new Error('`loop` has to be `false` for `hangOnTop` feature.');
	}
	return createPortal(
		<div id='portal-balloons'>
			{CSR ? <Balloons {...{count, msgText, colors, popVolumeLevel, loop, hangOnTop}}/> : null}
		</div>,
		document.body
	);
};

export { ReactFloatingBalloons };