import { CONTACTO } from "../constants"
import {motion} from "framer-motion"

const Contacto = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y:-100}}
            transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Contacto</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
              whileInView={{opacity: 1, y:0}}
              initial={{opacity: 0, y:-100}}
              transition={{duration: 1}}
            className="my-4">
                {CONTACTO.telefono}
            </motion.p>
            <a href="#" className="border-b">
                {CONTACTO.correo}
            </a>
        </div>
    </div>
  )
}

export default Contacto