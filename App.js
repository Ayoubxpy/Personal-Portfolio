import React from "react"
import Header from "./digitalBussinesCard/Info"
import About from "./digitalBussinesCard/About"
import Footer from "./digitalBussinesCard/Footer"

export default function App(){
    return (
        <div className="card">
            < Header />
            <About />
            <Footer />
        </div>
    )
}