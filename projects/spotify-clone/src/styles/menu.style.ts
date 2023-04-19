import { styled } from "../lib/style";

export const Menu = styled("div", {
	position: "relative",

	ul: {
		width: "100%",
		listStyle: "none",
		margin: 0,
		padding: 0,
		overflow: "hidden",
	},
	"ul li": {
		padding: "0 8px",
		paddingLeft: 0,
		cursor: "pointer",
	},
	"ul li a": {
		padding: "0 16px",
		textDecoration: "none",
		color: "$gray8",
		display: "flex",
		alignItems: "center",
		gap: 16,
		height: 40,
	},
	"ul li a span": {
		position: "relative",
		fontSize: 14,
		fontWeight: 700,
	},
	"ul li svg": {
		width: "24px",
		height: "auto",
		fontSize: "24px",
		fill: "CurrentColor",
		color: "$gray10",
	},
});

export const MenuPlaylist = styled(Menu, {
	fontWeight: 400,
	overflow: "auto",
	"ul li a span": {
		left: 0,
	},
});
