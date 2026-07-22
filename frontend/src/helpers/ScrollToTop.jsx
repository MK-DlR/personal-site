// src/helpers/ScrollToTop.jsx

// imports
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* fix Link paths leading to middle of target page instead of top */
function ScrollToTop() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname]);

    return (
        null
    )
}

export default ScrollToTop