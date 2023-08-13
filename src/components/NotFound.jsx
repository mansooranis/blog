import "../index.css";
import cuteCat from "../assets/cutecat.gif"
export default function NotFound(){
    return (
        <div className="not-found">
            <div className=" text-9xl font-bold text-center">404</div>
            <div className="text-9xl font-semibold text-center">Oops I didnt build this page yet...</div>
            <img src={cuteCat} alt="cute cat image"/>
        </div>
    )
}