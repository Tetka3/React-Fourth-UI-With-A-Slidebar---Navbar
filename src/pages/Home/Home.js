import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar"; 
import Navbar from "../../components/Navbar/Navbar";  

const Home = () => {
    return ( 
        <div className="home"> 
            <Sidebar />
            <div className="container">
                <Navbar />
                <h1>Flex</h1>
            </div>          
        </div>
     ); 
};
 
export default Home;