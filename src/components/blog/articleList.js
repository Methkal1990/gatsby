import React from "react"
import { Link } from "gatsby"

const data = [
    {
        img: "https://4.bp.blogspot.com/-lNc1mBHtDl8/V6xhpAu9RHI/AAAAAAAAAq0/asMj511FWss0dFgEQ2dR9s3RlL-hP0nkACLcB/s1600/looks001-690x455-1442922105.jpg",
        date: "DEC 2015, 5",
        title: "Celebrated am announcing delightful remarkably we",
        author: "Marie Curie",
        tags: "Tech",
        comments: "3",
        body: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Sudden..."
    },
    {
        img: "https://4.bp.blogspot.com/-lNc1mBHtDl8/V6xhpAu9RHI/AAAAAAAAAq0/asMj511FWss0dFgEQ2dR9s3RlL-hP0nkACLcB/s1600/looks001-690x455-1442922105.jpg",
        date: "DEC 2015, 5",
        title: "Celebrated am announcing delightful remarkably we",
        author: "Marie Curie",
        tags: "Tech",
        comments: "3",
        body: "It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better. Sudden..."
    },
    {
        img: "https://1.bp.blogspot.com/-imLHdrk9sPM/V6xiTWcRlfI/AAAAAAAAArc/pYwdCMRpupYDNE9JHToqvctCVzWHYP1YwCLcB/s1600/looks010-690x455-1442922007.jpg",
        date: "DEC 2015, 5",
        title: "She Alteration Everything Sympathize Impossible",
        author: "John Doe",
        tags: "science",
        comments: "5",
        body: "Has bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do.Brother hundred he assured reached on up no. On am nearer missed lovers. To it mother extent temper figure better.Sudden she seeing."
    },
]

const ArticlePiece = (content) => {
    return (
        <div className="post-outer ">
            <div className="post-entry">
                <div className="post-image"><img src={content.img} /></div>
                <article className="post-body">
                    <div className="post-body__dateholder"><div><span>DEC</span> 05, 2019</div></div>
                    <div className="post-body__content">
                        <div className="post-head">
                            <div className="post-head__title"><h2>{content.title}</h2></div>
                            <div className="post-head__meta row">
                                <span className="post-head__meta-item"><i className="fas fa-user"></i> <span>{content.author}</span></span>
                                <span className="post-head__meta-item" ><i className="fas fa-layer-group"></i><span>{content.tags}</span></span>
                                <span className="post-head__meta-item"><i className="far fa-comments"></i><span>{content.comments} comments</span></span>
                            </div>
                        </div>
                        <div className="post-text">
                            <p>{content.body}</p>
                        </div>
                        <div className="post-footer-meta">
                            <div className="d-flex align-items-center">
                                <span className="post-footer-meta-btn btn btn-outline-secondary mx-3">Share</span>

                                <Link className="soc facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </Link>
                                <Link className="soc twitter">
                                    <i class="fab fa-twitter"></i>
                                </Link>
                                <Link className="soc google">
                                    <i class="fab fa-google-plus-g"></i>
                                </Link>

                            </div>
                            <Link className="read-more btn btn-outline-secondary">Read more</Link>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}

const ArticleList = () => {
    return (
        <div className="col-xl-8 col-lg-7 col-sm-12">
            {data.map(item => {
                return (
                    <ArticlePiece
                        img={item.img}
                        title={item.title}
                        author={item.author}
                        tags={item.tags}
                        comments={item.tags}
                        body={item.body}
                    />
                )
            })}
        </div>
    )
}

export default ArticleList