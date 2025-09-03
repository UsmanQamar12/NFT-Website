import { Component } from "react";


const Name = "Rajib Raj";
const desc = "Competently conceptualize alternative synergy and technically and niche markets. Efficiently impact technically sound outsourcing rath tnclicks-and-mortar best practices.";



class Author extends Component {
    render() { 
        return (
            <div className="authors">
                <div className="author-thumb">
                    <img src="assets/images/blog/author/01.png" alt="author" />
                </div>
                <div className="author-content">
                    <h4>{Name}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        );
    }
}
 
export default Author;