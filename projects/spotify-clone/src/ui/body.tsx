import { Corner, Scrollbar, Thumb, Viewport } from "@radix-ui/react-scroll-area";
import type { PropsWithChildren } from "react";

import { styled } from "../lib/style";
import { BodyContent } from "../styles/container.style";

const View = styled(Viewport, {
	width: "100%",
	height: "100%",
	borderRadius: "inherit",
});

const Scroll = styled(Scrollbar, {
	display: "flex",
	userSelect: "none",
	touchAction: "none",
	background: "$gray1/25",
	transition: "background 160ms ease-out",

	"&[data-orientation='vertical']": {
		width: "var(--scrollbar-size)",
	},
});

const ScrollThumb = styled(Thumb, {
	flex: 1,
	background: "$gray11",
	position: "relative",
	"&:hover": {
		background: "$gray10",
	},
	"&:active": {
		background: "$gray10",
	},
	"&::before": {
		content: "''",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		height: "100%",
		minWidth: 44,
		minHeight: 44,
	},
});

export function Body({ children }: PropsWithChildren<unknown>) {
	return (
		<BodyContent>
			<View>{children}</View>
			<Scroll orientation="vertical">
				<ScrollThumb />
			</Scroll>
			<Corner />
		</BodyContent>
	);
}
