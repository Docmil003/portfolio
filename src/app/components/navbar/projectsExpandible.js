export default function ProjectsExpandible() {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Project 1</a></li>
                <li><a className="dropdown-item" href="#">Project 2</a></li>
            </ul>
        </div>
    );
}