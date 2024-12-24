import ProjectsExpandible from "./projectsExpandible";

export default function HeaderBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav d-flex justify-content-evenly w-100">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <ProjectsExpandible></ProjectsExpandible>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://protectoravillena.com/" target="_blank">Shelter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}