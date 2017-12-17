import styled from 'styled-components';

const DialCancelButton = styled.div`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	border: black;
	border-style: solid;
	border-width: 1px;
	background: #EEEEEE;
	text-align: center;
	border-radius: 8px;
	width: 20px;
	height: 20px;
	right: 3px;
	cursor: pointer;
	user-select: none;
	box-shadow: 1px 1px 1px #888888;
		:active {
			background: #999999;
			color: #FFFFFF;
			box-shadow: 0px 0px 0px #FFFFFF;
		}
`;

export default DialCancelButton;
