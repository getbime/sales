import MainBody from '../MainBody/MainBody'
import StatSec from '../StatSection/StatSec'


const Home = ({loggedUser, isLoading}) => {
    return (
        <div>
            {!isLoading && <MainBody loggedUser={loggedUser}/>}
            {!isLoading && <StatSec loggedUser={loggedUser}/>}
        </div>
    );
}
 
export default Home;