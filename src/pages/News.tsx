import { Link } from "react-router-dom";

export default function News() {
    document.title = "WF Recycle-Tech - News";
    return (
        <>
            <p>News Page</p>
            <ul>
                <li><Link to="../blog/blog-1">Blog 1 test</Link></li>
                <li><Link to="../blog/blog-2">Blog 2 test</Link></li>
            </ul>

            
        </> 
    );
}