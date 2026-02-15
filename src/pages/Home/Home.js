import React from 'react'


import Headers from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'
import Banner from '../../component/Banner/Banner'

import RowList from '../../component/RowList/RowList'


const Home = () => {
  return (
    <>
     <Headers/>
     <Banner/>

<RowList/>
     <Footer/>
    </>
  )
}

export default Home
