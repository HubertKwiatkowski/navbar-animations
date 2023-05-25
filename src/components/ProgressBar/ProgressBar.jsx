import './ProgressBar.css'
import { motion, useScroll, useTransform} from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll()
  const width = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  )

  return (
    <div className="progress-background">
      <motion.div
        style={{ width  }}
        className="progress"
      ></motion.div>
    </div>
  )
}

export default ProgressBar