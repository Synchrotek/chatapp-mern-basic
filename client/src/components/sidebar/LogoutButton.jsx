import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";


const LogoutButton = () => {
    const { loading, logout } = useLogout();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <div className='mt-8 ml-2'>
            {!loading ? (
                <BiLogOut
                    className='w-6 h-6 text-white cursor-pointer hover:scale-110'
                    onClick={handleLogout}
                />
            ) : (
                <span className="loading loading-spinner"></span>
            )}
        </div>
    )
}

export default LogoutButton