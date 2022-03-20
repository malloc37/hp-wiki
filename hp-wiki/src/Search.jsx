import { Outlet,Link} from "react-router-dom";
import { useState } from "react";



function Search() {
    const [search, setSearch] = useState("");

    return (
        <>  
            <form style={{ height:"100%", display: "flex", justifyContent: "Center", alignItems: "Center"}}>
                <label>Enter the name of a character:
                    <input
                        type="text" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </label>
                <Link to="CharList" state={{search: search}}>
                    <input type="submit" />
                </Link>
            </form>
            <Outlet />
        </>
    )
}

export default Search;