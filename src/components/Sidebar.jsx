import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft, faCog, faCommentDots, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
    return (
        <div className="w-16 h-screen bg-black text-white flex flex-col items-center py-4 space-y-6">
            <FontAwesomeIcon icon={faCommentDots} size="lg" className="hover:text-green-500 cursor-pointer" />
            <FontAwesomeIcon icon={faUserGroup} size="lg" className="hover:text-green-500 cursor-pointer" />
            <FontAwesomeIcon icon={faTrash} size="lg" className="hover:text-green-500 cursor-pointer" />
            <FontAwesomeIcon icon={faClockRotateLeft} size="lg" className="hover:text-green-500 cursor-pointer" />
            <FontAwesomeIcon icon={faCog} size="lg" className="hover:text-green-500 cursor-pointer" />
        </div>
    );
}

export default Sidebar;
