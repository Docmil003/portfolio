export default function FooterSection({Title, Reference = [{href:"", name:""}]}) {
    return (
    <div className="col mb-3 text-center">
        <p>{Title}</p>
        <ul className="nav flex-column">
        {
            Reference.map((v, i)=>{
            return (
                <li key={i} className="nav-item mb-2">
                <a className="nav-link p-0 text-center text-white" 
                href={v.href} target="_blank">
                    {v.name}
                </a>
                </li>
            )
        })
        }
        </ul>
    </div>
    );
  }