import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
    return (
        <div className="overflow-x-hidden min-h-full w-full text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 min-h-full w-full"></div>
            <div className="absolute top-0 min-h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                <div className="w-full px-8">
                    <Navbar />
                    <Hero />
                    <About />
                    <Technologies />
                    <Experience />
                    <Project />
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default App;
