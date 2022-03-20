import React, {useState, useEffect} from "react";
import axios from "axios"
import CharItem from "./CharItem"
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link,useLocation } from "react-router-dom";

const apiUrl = "http://hp-api.herokuapp.com/api/characters"

function CharList() {
    const [charData, setCharData] = useState([])
    const location = useLocation()
    const { search } = location.state
    useEffect(() => {
        fetchCharsFromApi()
    }, [])

    const fetchCharsFromApi = async () => {
        const response = await axios.get(apiUrl)
        var filteredResponse = response.data.filter(char => char.name.toLowerCase().includes(search))
        setCharData(filteredResponse)
    }

    if(charData.length !== 0) {
        return (
            <>   
                <Stack gap={2} className="col-md-5 mx-auto">
                    <ListGroup>
                        {charData.map((char) => (
                            <Link key={char.name} to="/Profile" state={{ char: char }}>
                                <CharItem char={char} />
                            </Link>
                        ))}            
                    </ListGroup>
                </Stack>
            </>
        )
    }

    return (
        <div style={{ height:"100%", display: "flex", justifyContent: "Center", alignItems: "Center"}}>
            <h1>Character not Found</h1>
        </div>
    )
}

export default CharList;
