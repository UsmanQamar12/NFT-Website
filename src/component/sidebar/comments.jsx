import { Component } from "react";


const title = "02 Comment";


let commentList = [
    {
        imgUrl: 'assets/images/blog/author/02.png',
        imgAlt: 'Comment thumb',
        Name: 'Linsa Faith',
        Date: 'May 30, 2021 at 12:41 pm',
        Desc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
    {
        imgUrl: 'assets/images/blog/author/03.png',
        imgAlt: 'Comment thumb',
        Name: 'Linsa Faith',
        Date: 'May 30, 2021 at 12:41 pm',
        Desc: 'The inner sanctuary, I throw myself down among the tall grass bye the trckli stream and, as I lie close to the earth',
    },
]


class Comments extends Component {
    render() { 
        return (
            <div id="comments" className="comments">
                <h4 className="comment-title">{title}</h4>
                <ul className="lab-ul comment-list">
                    {commentList.map((val, i) => (
                        <li className="comment" key={i}>
                            <div className="com-item">
                                <div className="com-thumb">
                                    <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                                </div>
                                <div className="com-content">
                                    <div className="com-title">
                                        <div className="com-title-meta">
                                            <a href="#" className="h7">{val.Name}</a>
                                            <span> {val.Date} </span>
                                        </div>
                                        <span className="reply">
                                            <a href="#"><i  className="fa-solid fa-reply-all"></i> Reply</a>
                                        </span>
                                    </div>
                                    <p>{val.Desc}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
 
export default Comments;