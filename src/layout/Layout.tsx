import { ReactNode } from 'react';
import './Layout.css';
import Menu from '../menu/Menu';

interface LayoutProps {
    children: ReactNode;
}

function Layout(props: LayoutProps) {
    return (
        <div className="layout">
            <header className="header"><Menu /></header>
            <div className="content">
                <main className="main">{props.children}</main>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
}

export default Layout;
