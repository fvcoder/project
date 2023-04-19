import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { getCssText, globalStyle } from "./lib/style";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		{globalStyle()}
		<style>{getCssText()}</style>
		<App />
	</React.StrictMode>
);
