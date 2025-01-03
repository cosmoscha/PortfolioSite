import React from "react";
import { Amplify } from 'aws-amplify';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import { useTheme } from "./ThemeContext";
import AnimatedBackground from "./pages/AnimatedBackground";
import { styles } from "./styles/common";

// AWS Config stays the same
const awsConfig = {
    // ... your AWS configuration
};

Amplify.configure(awsConfig);

const App = () => {
    const { isDarkMode } = useTheme();

    return (
        <Router>
            <div className={`${isDarkMode ? "dark" : ""}`}>
                <div className="fixed inset-0 z-0">
                    <AnimatedBackground />
                </div>

                <div className="h-screen flex overflow-hidden"> {/* Changed to h-screen and added overflow-hidden */}
                    <Sidebar />

                    <main className="flex-1 relative overflow-y-auto"> {/* Modified main container */}
                        <div className="min-h-screen pb-16"> {/* Content wrapper with padding for footer */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/projects" element={<Projects />} />
                                <Route path="/login" element={<Login />} />
                            </Routes>
                        </div>
                        <Footer />
                    </main>
                </div>
            </div>
        </Router>
    );
};

export default App;