import { Component } from "react";
import { Link } from "react-router-dom";

class PageHeader extends Component {
    render() { 
        const {title, curPage} = this.props;
        return (
            <section className="page-header bg--cover" style={{backgroundImage: "url(/assets/images/header/bg.jpg)"}}>
                <div className="container">
                    <div className="page-header__content text-center">
                        <h3 className="text-uppercase">{title}</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center mb-0">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default PageHeader;