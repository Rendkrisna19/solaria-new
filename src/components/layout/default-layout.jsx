import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const DefaultLayout = ({ children, title, prevailOnUnmount }) => {
    const defaultTitle = React.useRef(document.title);

    React.useEffect(() => {
        document.title = title
    }, [title]);

    React.useEffect(() => {
        if (!prevailOnUnmount) {
            document.title = defaultTitle.current;
        }
    }, [prevailOnUnmount, defaultTitle]);

    return (
        <div className='App'>
            <Navbar />
            {/* component item */}
            <div className='mt-[90px]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout