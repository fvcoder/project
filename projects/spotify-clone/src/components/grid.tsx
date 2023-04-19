import type { PropsWithChildren } from "react";

import { styled } from "../lib/style";

const GridContainer = styled("main", {
	display: "grid",
	gap: 24,
	gridTemplateColumns: "repeat(8, minmax(0,1fr))",
});

export function Grid({ children }: PropsWithChildren<unknown>) {
	return <GridContainer>{children}</GridContainer>;
}
