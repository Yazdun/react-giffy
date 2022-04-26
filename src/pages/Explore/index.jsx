import { AnimatedLayout } from '../'
import { Gifs } from '../../components'
import { fire } from '../../assets'
import css from './styles.module.css'
import { FiSearch } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import useFetch from 'use-http'
import { GET_SEARCH } from '../../services'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export const Explore = () => {
  const [searchTerm, setSearchTerm] = useState(null)
  const [gifs, setGifs] = useState()
  const { get, loading, response } = useFetch(GET_SEARCH(searchTerm))

  async function execute() {
    setGifs(undefined)
    const initialGifs = await get()
    if (response.ok) setGifs(initialGifs)
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchTerm && execute()
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  return (
    <AnimatedLayout>
      <div className={css.header}>
        <img className={css.illustration} src={fire} alt="" />
        <div className={css.search}>
          <input
            type="text"
            className={css.input}
            placeholder="Start typing ..."
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
          <button className={css.btn} onClick={execute}>
            {loading ? (
              <AiOutlineLoading3Quarters className={css.loading} />
            ) : (
              <FiSearch />
            )}
          </button>
        </div>
      </div>
      {gifs && <Gifs gifs={gifs} />}
    </AnimatedLayout>
  )
}
