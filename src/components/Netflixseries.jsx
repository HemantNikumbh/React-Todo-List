import seriesData from "../api/seriesdata.json"
//import { SeriesCard } from "./SeriesCard"

const Netflixseries = () =>{
    return(
        <ul>
            {/*Example of Mapping*/}
            {seriesData.map((curElem)=>{
                {/*Example of Props*/}
                return <SeriesCard key = {curElem.id} data = {curElem} />//key and data both are props
                
                
            })}
        </ul>
    )
}


export default Netflixseries