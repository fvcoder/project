import { Root } from "@radix-ui/react-scroll-area";

import { styled } from "../lib/style";

export const Container = styled("div", {
	height: "100%",
	display: "flex",
	flexDirection: "column",
	gap: 0,
	backgroundColor: "$gray12",
});

export const Main = styled("div", {
	flex: 1,
	overflowY: "auto",
	display: "flex",
	flexDirection: "row",
});

export const Control = styled("div", {
	width: "100%",
	height: "90px",
	backgroundColor: "$gray12",
	borderTop: "1px solid #282828",
	color: "$gray1",
});

export const MenuLeft = styled("div", {
	backgroundColor: "Black",
	position: "relative",
	width: "250px",
	height: "100%",
	inset: 0,
	fontSize: "16px",
	fontWeight: 500,
	paddingTop: "24px",

	display: "flex",
	flexDirection: "column",

	boxSizing: "border-box",
});

export const BodyContent = styled(Root, {
	flex: 1,
	overflow: "hidden",
	"--scrollbar-size": "10px",
});
