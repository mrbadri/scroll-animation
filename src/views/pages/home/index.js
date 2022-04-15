import AlignContent from "../../../components/FlexBox/AlignContent";
import AlignItem from "../../../components/FlexBox/AlignItem";
import Direction from "../../../components/FlexBox/Direction";
import Flow from "../../../components/FlexBox/Flow";
import Gap from "../../../components/FlexBox/Gap";
import Grow from "../../../components/FlexBox/Grow";
import JustifyContent from "../../../components/FlexBox/JustifyContent";
import Order from "../../../components/FlexBox/Order";
import Wrap from "../../../components/FlexBox/Wrap";

const Home = () => {
    return ( <div className="w-full h-full">
        <Direction/>
        <Wrap/>
        <Flow/>
        <JustifyContent/>
        <AlignItem/>
        <AlignContent/>
        <Gap/>
        <Order/>
        <Grow/>
    </div> );
}
 
export default Home;