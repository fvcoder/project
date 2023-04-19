import {
	HiOutlineChevronDown,
	HiOutlineChevronLeft,
	HiOutlineChevronRight,
	HiOutlineUser,
} from "react-icons/hi";

import { styled } from "../lib/style";

const Header = styled("header", {
	padding: "16px 32px",
	display: "flex",
	alignItems: "center",
	gap: 16,
	position: "relative",
	zIndex: 10,
});

const Button = styled("button", {
	display: "inline-flex",
	justifyContent: "center",
	alignItems: "center",

	minWidth: 32,
	color: "$gray1",

	border: "1px solid $gray8",
	borderRadius: 500,
	userSelect: "none",
	position: "relative",
	cursor: "pointer",
	backgroundColor: "transparent",

	fontWeight: 700,
	fontSize: 14,
	padding: "8px 16px",
	boxSizing: "border-box",
});

const UserButton = styled(Button, {
	background: "#000",
	borderColor: "#000",
	height: 34,
	paddingLeft: 1,
	paddingRight: 1,
	gap: 8,
});

const UserAvatar = styled("button", {
	border: "none",
	cursor: "pointer",
	background: "#535353",
	height: 30,
	width: 30,
	borderRadius: "50%",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	svg: {
		height: 18,
		width: 18,
		color: "$gray1",
		fill: "CurrentColor",
	},
});

const Arrow = styled(UserAvatar, {
	backgroundColor: "#000",
	height: 40,
	width: 40,
	opacity: 0.5,
	variants: {
		status: {
			active: {
				opacity: 1,
			},
		},
	},
});

export function Navbar() {
	return (
		<Header>
			<Arrow status="active" onClick={() => window.history.back()}>
				<HiOutlineChevronLeft />
			</Arrow>
			<Arrow onClick={() => window.history.forward()}>
				<HiOutlineChevronRight />
			</Arrow>
			<Button css={{ marginLeft: "auto" }}>Premium</Button>
			<UserButton>
				<UserAvatar>
					<HiOutlineUser />
				</UserAvatar>
				<span>fvcoder</span>
				<UserAvatar css={{ background: "transparent" }}>
					<HiOutlineChevronDown />
				</UserAvatar>
			</UserButton>
		</Header>
	);
}
