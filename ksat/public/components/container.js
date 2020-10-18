import Navigation from "./navigation";
import Foot from "./foot";

const Container =(props)=>{
    return(
        <div>
            <Navigation/>
            <div>
                {props.children}
            </div>
            <Foot/>
        </div>
    )
}

export default Container;