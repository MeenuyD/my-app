import React from "react";
import ReactDOMClient from "react-dom/client";
import { PayoutsDukaanpay } from "./screens/PayoutsDukaanpay";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<PayoutsDukaanpay />);
