import { motion } from 'framer-motion'
import { Container } from '../../components'

export const AnimatedLayout = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: '-2%',
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: '2%',
        opacity: 0,
      }}
      transition={{ duration: 0.3 }}
    >
      <Container>{children}</Container>
    </motion.div>
  )
}
