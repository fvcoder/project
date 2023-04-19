import { gray } from "@radix-ui/colors";
import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
	theme: {
		colors: {
			...gray,
		},
	},
});

export const globalStyle = globalCss({
	"body, #root": {
		margin: 0,
		cursor: "default",
		overflow: "hidden",
		fontFamily: "'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif",
		maxHeight: "100vh",
		height: "100vh",
	},
	"*": {
		scrollbarWidth: "none",
		scrollbarColor: "hsl(0, 0%, 43.5%) transparent",
	},

	"*::-webkit-scrollbar": {
		width: 8,
	},

	"*::-webkit-scrollbar-track": {
		background: "transparent",
	},

	"*::-webkit-scrollbar-thumb": {
		backgroundColor: "hsl(0, 0%, 43.5%)",
		borderRadius: 8,
		border: "8px solid hsl(0, 0%, 43.5%)",
	},
});
