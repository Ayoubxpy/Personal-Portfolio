import React from "react";
import ReactDom from 'react-dom/client'
import App2 from "./redux/App2";
import App from "./compenents/App";


const element = document.getElementById('root')
const root = ReactDom.createRoot(element)


root.render(<App />);
