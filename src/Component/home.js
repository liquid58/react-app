import {Link} from 'react-router-dom';

function Home(){
    const mystyle = {
        display:"flex",
        justifyContent:"Space-evenly"
    };
    const headign = {
        display:"flex",
        justifyContent:"center",
        alignItem:"center",
    };
    return(
        <div>
            <ul style={mystyle}>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/about'>about</Link></li>
            <li><Link to='/contact'>contact</Link></li>
            <li><Link to='/blog'>blog</Link></li>
        </ul>
        <h1 style={headign}>
            This is My first Web page please rate my work
        </h1>
        </div>
   
    );

}
export default Home;  