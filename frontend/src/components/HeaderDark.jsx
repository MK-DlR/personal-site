// src/components/HeaderDark.jsx

// imports
import { HashLink as Link } from 'react-router-hash-link';

function HeaderPages() {
    return (
        <div className="header dark-header">
            <div className="header-left">
                <Link to="/#hero">
                    <span class="fa-stack">
                        <i class="fa fa-circle fa-stack-2x icon-background"></i>
                        <i className="fa-solid fa-mug-hot fa-stack-1x icon"></i>
                    </span>
                </Link>
                <h3 className="header-title dark-title">Adrien Newman</h3>
            </div>
            <nav className="header-right">
                <Link to="/#hero" className="back-link dark-link">← Back to portfolio</Link>
            </nav>
        </div>
    )
}

export default HeaderPages