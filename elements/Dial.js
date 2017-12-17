import styled from 'styled-components';

const Dial = styled.div`
	flex: 0 0 auto;
	text-align: center;
	line-height: 35px;
	color: #6A6B6C;
	width: ${props => props.callButton ? '114px' : '35px'};
	height: 35px;
	cursor: pointer;
	background: ${props => props.callButton ? 'limegreen' : '#EEEEEE'};
	border: 1px;
	border-color: black;
	border-style: solid;
	border-radius: 8px;
	margin: 2px;
	user-select: none;
	box-shadow: 1px 1px 1px #888888;
	:active {
		background: ${props => props.callButton ? '#43A942' : '#999999'};
		color: #FFFFFF;
		box-shadow: 0px 0px 0px #FFFFFF;
	}
	visibility: ${props => props.hidden ? 'hidden' : 'visible'};
`;

export default Dial;
