import BlogCard from './blogCard/blogCard';
import "./cardGroupHome.scss"
export default function CardGroupHome(props){
    const {list} = props;
    return (
        <div className ="flex flex-col justify-center mb-4">
            <div className='title-card-group'>{props.title}</div>
            <div className=" flex flex-row flex-wrap space-y-12">
                {list.map((item, index) => {
                    return <BlogCard key={index} card = {item} />
                })}
            </div>
        </div>
    )
}