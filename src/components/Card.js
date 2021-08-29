import {useState} from "react";

function Card({ hog }) {

    const [detail, setDetail] = useState(false);

    const moreInfo = () => {
        setDetail(!detail);
    }

    const handleDetail = () => {
        setDetail(!detail);
    }

    const { name, image, specialty, greased, weight, "highest medal achieved": medal } = hog

    return (
        <div class="ui card" key={name} >
            <div class="image">
                <img src={image} alt={name} style={{height: '300px'}} />
            </div>
            <div class="content">
                <p class="header">{name}</p>
            </div>
            {detail ? 
                <div>
                    <div>Specialty: {specialty} </div>
                    <div>Weight: {weight} </div>
                    <div>Greased: {greased ? "yes" : "no"} </div>
                    <div>Highest medal achieved: {medal} </div>
                </div>
            : null}
            <button class="ui bottom attached button pink" onClick={() => handleDetail()}>{detail ? "show less" : "show more"}</button>
        </div>
    )
}
export default Card;