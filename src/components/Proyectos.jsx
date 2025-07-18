import {PROYECTOS} from "../constants"
import {motion} from "framer-motion"

const Proyectos = () => {
  return (
    <div className="pb-4">
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y:-100}}
            transition={{duration: 0.5}}
        className="my-20 text-center text-4xl">Proyectos</motion.h2>
        <div>
            {PROYECTOS.map((proyecto, index) => (
                <div key={index} className="mb-15 flex flex-wrap lg:justify-center">
                    <motion.div
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity: 0, y:-100}}
                        transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                        <img src={proyecto.imagen} alt={proyecto.titulo} 
                        width={250} height={250}
                        className="mb-6 rounded" />
                    </motion.div>         
                    <motion.div
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity: 0, y:-100}}
                        transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold text-2xl">{proyecto.titulo}</h3>
                        <p className="mb-4 text-stone-400">{proyecto.descripcion}</p>
                        <p className="mb-4 text-stone-400">{proyecto.tecnologias.map((tech,index) => (
                            <span className="mr-2 rounded bg-stone-900 p-2
                            text-sm font-medium text-stone-300" key={index}>
                                {tech}
                            </span>

                        ))}</p>
                    </motion.div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Proyectos