import React from 'react';
import './Layout.css'
const Layout = () => {
    return (
        <div className="container">
            <header className="flex-header">
                Header
            </header>
            <main className="flex-main">
                <nav className="flex-nav">
                    Sidebar
                </nav>
                <article className="flex-article">
                    article
                </article>
                <aside className="flex-aside">
                    Sidebar
                </aside>
            </main>
            <footer className="flex-footer">
                footer
            </footer>
        </div>
    );
}

export default Layout;