import { motion } from 'framer-motion'
import { Container } from '../../components'

export const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Container>{children}</Container>
    </motion.div>
  )
}
