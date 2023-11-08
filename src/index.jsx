import React from "react";
import ReactDOMClient from "react-dom/client";
import { CardImgSScreen } from "./screens/CardImgSScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CardImgSScreen />);
