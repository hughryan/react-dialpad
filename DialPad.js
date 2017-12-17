import React from 'react';
import styled from 'styled-components';
import Dial from './elements/Dial';
import DialCancelButton from './elements/DialCancelButton';
import DialDisplay from './elements/DialDisplay';
import FlexColumn from './elements/FlexColumn';
import FlexContainer from './elements/FlexContainer';
import FlexRow from './elements/FlexRow';

const DialPad = ({ addDigit, dialPadNumber, toggleDialPad, onCall }) => (
	<FlexColumn>
		<FlexRow>
			<Dial onClick={addDigit}>1</Dial>
			<Dial onClick={addDigit}>2</Dial>
			<Dial onClick={addDigit}>3</Dial>
		</FlexRow>
		<FlexRow>
			<Dial onClick={addDigit}>4</Dial>
			<Dial onClick={addDigit}>5</Dial>
			<Dial onClick={addDigit}>6</Dial>
		</FlexRow>
		<FlexRow>
			<Dial onClick={addDigit}>7</Dial>
			<Dial onClick={addDigit}>8</Dial>
			<Dial onClick={addDigit}>9</Dial>
		</FlexRow>
		<FlexRow>
			<Dial onClick={addDigit}>*</Dial>
			<Dial onClick={addDigit}>0</Dial>
			<Dial onClick={addDigit}>#</Dial>
		</FlexRow>
		<FlexRow>
			<Dial callButton onClick={() => onCall(dialPadNumber)}>
				CALL
			</Dial>
		</FlexRow>
	</FlexColumn>
);

export default DialPad;
