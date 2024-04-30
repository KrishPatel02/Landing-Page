// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './Components/Home'
import Blog from './Components/Blog'
import OurProducts from './Components/OurProducts'
import ContactUs from './Components/ContactUs'

const App = () => {
    return (
        <>
            <div>
                <Home />
                <Blog />
                <OurProducts />
                <ContactUs />
            </div>
        </>
    )
}

export default App