import { createContext } from 'react'

const AdContext = createContext({ ads: [], setAds: () => {} })

export default AdContext
