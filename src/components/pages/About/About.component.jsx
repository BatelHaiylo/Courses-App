import Breadcrumb from "../../features/Breadcrumb/Breadcrumb.component";
import AboutCard from "./AboutCard.component";

export default function About() {
    return ( 
        <div>
            <Breadcrumb title='About Us' />
            <AboutCard/>
        </div>
     );
};