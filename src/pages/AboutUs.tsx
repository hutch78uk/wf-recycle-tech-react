import { Link } from "react-router-dom";

export default function AboutUs() {
    document.title = "WF Recycle-Tech - About Us";
    return (
        <>
            <p>About us page</p>
            <p>
                <Link to="/">Test link</Link>
            </p>
        </>
    );     
}