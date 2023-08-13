import "./blogcard.scss"
export default function BlogCard(props){
    const {card} = props;
    return (
        <div className="div-blog-card">
            <img src = {card.image} alt={card.alt} className="blog-card-image"/>
            <div className="blog-card-info">
                {card.time && <div>{card.time} min read</div>}
                <div>{card.date}</div>
            </div>
            <div className="blog-card-title">{card.title}</div>
        </div>
    )
}