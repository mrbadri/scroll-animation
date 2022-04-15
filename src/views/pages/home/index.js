import Direction from "../../../components/home/Direction";
import Flow from "../../../components/home/Flow";
import JustifyContent from "../../../components/home/JustifyContent";
import Wrap from "../../../components/home/Wrap";

const Home = () => {
    return ( <div className="w-full h-full">
        <Direction/>
        <Wrap/>
        <Flow/>
        <JustifyContent/>
    </div> );
}
 
export default Home;