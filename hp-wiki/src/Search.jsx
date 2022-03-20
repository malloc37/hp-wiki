import { Outlet,Link } from "react-router-dom";


function Search() {
    return (
        <>
            <Link to="/CharList">To the Chars</Link>
            <Outlet />
        </>
    )
}

export default Search;