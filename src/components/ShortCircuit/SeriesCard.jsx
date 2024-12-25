
export const SeriesCard = (props) =>{
    //Example of destructuring
   // const {data} = props
   const{id,name,rating,description,gernre} = props.data

    return(
        <li>
            <div>
                <img src={props.data.img_url} alt="image" width="40%" height="40%" />

            </div>
            <h2>Name:{name}</h2>
            <h3>Rating:{rating}</h3>
            <p>Summary:{description}</p>
            <p>Genre:{gernre}</p>
            <button>Watch now</button>
        </li>
        )
}