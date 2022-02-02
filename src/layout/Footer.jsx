function Footer() {
    return <footer className="page-footer grey darken-1" >
        <div className="footer-copyright">
            <div className="container">
               <span className="red-text text-lighten-2"> © {new Date().getFullYear()} Copyright Text</span>
                <a className="red-text text-lighten-2 text-lighten-4 right " href="#!">Repo</a>
            </div>
        </div>
    </footer>
}
export {Footer}