import { builtinModules } from "module";
import { headers } from "next/headers";
import Link from "next/link";

export default function home (){
return(
<header>
   
    <div>
    <h1 className="mr-12" style={{color:"blue" } }>We are working on IT projects for more info</h1>
        <Link className="mr-6" href={"http://localhost:3000/contectus"}>Contect us</Link>
        <Link className="mr-6"href={"http://localhost:3000/aboutus"}>About us</Link>
        <Link className="mr-6"href={"http://localhost:3000/portfolio"}>Portfolio </Link>
    </div>
</header>)
{/*footer*/} 

}
