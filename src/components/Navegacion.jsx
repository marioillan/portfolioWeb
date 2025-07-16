import logo from "../assets/portfoliologo.png"
import {FaLinkedin, FaGithub } from "react-icons/fa";

const Navegacion = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} alt="Logo" className="mx-2" width={100} height={50} />
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/mario-ill%C3%A1n-valero-a2b88724a/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />
            </a>
            <a href="https://github.com/marioillan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub />
            </a>
        </div>
    </nav>
  )
}

export default Navegacion