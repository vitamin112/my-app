import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import './notFound.scss';
const NotFound = () => {


    return (
        <div className="not-found-page my-auto mx-auto">
            <FontAwesomeIcon icon={faBomb} beat />
            <h3>Something went wrong please try again</h3>
        </div>
    );
};

export default NotFound;

