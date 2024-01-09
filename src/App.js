import React from "react";
import "./App.css";

// Importing images
import img0 from "./img/1.jpg";
import img1 from "./img/9 (1).jpg";
import img2 from "./img/9 (2).jpg";
import img3 from "./img/9 (3).jpg";
import img4 from "./img/9 (4).jpg";
import img5 from "./img/9 (5).jpg";
import img6 from "./img/9 (6).jpg";
import img7 from "./img/9 (7).jpg";
import img8 from "./img/9 (8).jpg";

function App() {
    return (
        <div className="App">
            <header>
                <div className="logo">Олег Марков</div>
                <div className="links">
                    <a className="active" href="/">
                        Home
                    </a>
                    <a href="/about">About Me</a>
                    <a href="/contact">Contact</a>
                </div>
            </header>
            <section className="img-container">
                <img src={img0} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
            </section>
            <footer>
                <p>© 2035 Олег Марков. Сайт создан на Wix.com.</p>
            </footer>
        </div>
    );
}

export default App;
