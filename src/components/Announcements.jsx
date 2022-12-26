import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
	height: 30px;
	background-color: #9649cb;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	font-weight: 500;
`;

function Announcements() {
	const currentUser = useSelector((state) => state.user.currentUser?.username);
	return (
		!currentUser && (
			<Container>
				<span>
					You're not logged in, <Link to="/login">{"Sign in "}</Link> {" Or "}
					<Link to="/register">Register</Link>
				</span>
			</Container>
		)
	);
}

export default Announcements;
