import React from 'react';
import FlexContainer from './elements/FlexContainer';
import FlexColumn from './elements/FlexColumn';
import FlexRow from './elements/FlexRow';
import DialDisplay from './elements/DialDisplay';
import DialCancelButton from './elements/DialCancelButton';
import DialPad from './DialPad';

const DialPadComponent = (props) => (
	<FlexContainer>
		<FlexColumn>
			<FlexRow>
				<DialDisplay value={props.dialPadNumber} readOnly />
				<DialCancelButton onClick={props.removeDigit}>{'<'}</DialCancelButton>
			</FlexRow>
			<DialPad {...props} />
		</FlexColumn>
	</FlexContainer>
);

const EnhancedDialPadComponent = compose(
	withStateHandlers(
		({ initialNumber = '' }) => ({
			dialPadNumber: initialNumber
		}),
		{
			addDigit: ({ dialPadNumber, maximumDigits = 11 }) => event => ({
				dialPadNumber: dialPadNumber.length <= maximumDigits
					? `${dialPadNumber}${event.target.innerText}`
					: dialPadNumber
			}),
			removeDigit: ({ dialPadNumber }) => () => ({
				dialPadNumber: dialPadNumber.substring(0, dialPadNumber.length - 1)
			})
		}
	)
)(DialPadComponent);

export default EnhancedDialPadComponent;
