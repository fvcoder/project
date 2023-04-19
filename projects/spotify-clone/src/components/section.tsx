import { FaPlay } from "react-icons/fa";

import { styled } from "../lib/style";
import { Grid } from "./grid";

export type SectionProps = {
	header: {
		title: string;
		subtitle?: string;
		href: string;
	};
	body: Array<{
		id: string;
		href: string;
		cover: string;
		title: string;
		subtitle: string;
	}>;
};

const Main = styled("div", {
	padding: "0 32px",
});

const Header = styled("header", {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	marginBottom: 16,
});

const HeaderH1 = styled("h2", {
	color: "$gray1",
	fontSize: 24,
	fontWeight: 700,
	a: {
		textDecoration: "none",
		color: "inherit",
	},
});
const HeaderSpan = styled("span", {
	color: "$gray10",
	fontSize: 14,
	fontWeight: 700,
	a: {
		textDecoration: "none",
		color: "inherit",
		"&:hover": {
			textDecoration: "underline",
		},
	},
});

const Card = styled("a", {
	padding: 16,
	position: "relative",
	diplay: "block",
	backgroundColor: "#1a1a1a",
	width: "100%",
	transition: "background-color .3s ease",
	borderRadius: 8,
	boxSizing: "border-box",
	textDecoration: "none",
	"&:hover": {
		backgroundColor: "#282828",
		"header button": {
			bottom: 24,
			opacity: 1,
		},
	},
});

const CardCover = styled("header", {
	position: "relative",
	img: {
		width: "100%",
		height: "100%",
		borderRadius: 8,
		marginBottom: 16,
	},
	button: {
		opacity: 0,
		border: "none",
		position: "absolute",
		padding: 0,
		margin: 0,
		bottom: 0,
		right: 4,
		width: 48,
		height: 48,
		backgroundColor: "#1ed760",
		borderRadius: "50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		transition: "all .5s ease",
		svg: {
			width: 16,
			height: 16,
			fill: "#000",
		},
	},
});

const CardTitle = styled("h1", {
	fontSize: 16,
	fontWeight: 700,
	margin: 0,
	paddingBottom: 4,
	color: "$gray1",
});

const CardSubtitle = styled("span", {
	marginTop: 4,
	fontSize: 14,
	fontWeight: 400,
	color: "$gray10",
	"-webkit-line-clamp": 2,
	"-webkit-box-orient": "vertical",
	display: "-webkit-box",
	overflow: "hidden",
	textOverflow: "ellipsis",
	whiteSpace: "normal",
	lineHeight: 1.6,
});

export function Section({ header, body }: Partial<SectionProps>) {
	return (
		<Main>
			{header && (
				<Header>
					<HeaderH1>
						<a href="#">{header.title}</a>
					</HeaderH1>
					{header.subtitle && (
						<HeaderSpan>
							<a href="#">{header.subtitle}</a>
						</HeaderSpan>
					)}
				</Header>
			)}
			<Grid>
				{body?.map((x, i) => (
					<Card href="#" key={`list-${x.id}-${i}`}>
						<CardCover>
							<img src={x.cover} alt={`${x.cover} Cover`} />
							<button>
								<FaPlay />
							</button>
						</CardCover>
						<main>
							<CardTitle>{x.title}</CardTitle>
							<CardSubtitle>{x.subtitle}</CardSubtitle>
						</main>
					</Card>
				))}
			</Grid>
		</Main>
	);
}
