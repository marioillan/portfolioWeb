import {RiReactjsLine} from "react-icons/ri"
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        }
    }

})

const Tecnologias = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y:-100}}
            transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Tecnologías</motion.h2>
        <motion.div
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y:-100}}
            transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
               <FaHtml5 className="text-7xl text-orange-500" /> 
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)} className="p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(5)} className="p-4">
                <SiJavascript className="text-7xl text-yellow-300" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2)} className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(6)} className="p-4">
                <FaNode className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)} className="p-4">
                <DiPostgresql className="text-7xl " />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Tecnologias