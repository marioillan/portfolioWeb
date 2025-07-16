import Contacto from "./components/Contacto"
import Experiencia from "./components/Experiencia"
import Hero from "./components/Hero"
import Navegacion from "./components/Navegacion"
import Proyectos from "./components/Proyectos"
import Tecnologias from "./components/Tecnologias"

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased ">
      <div className="fixed inset-0 -z-10">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-
          [radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),
          rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navegacion />
        <Hero />
        <Tecnologias />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </div>
    </div>
  )
}

export default App