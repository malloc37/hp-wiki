import React, {useState, useEffect} from "react";
import axios from "axios"
import CharItem from "./CharItem"
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link } from "react-router-dom";

const apiUrl = "http://hp-api.herokuapp.com/api/characters"

function CharList() {
    const [charData, setCharData] = useState([])

    useEffect(() => {
        fetchCharsFromApi()
    }, [])

    const fetchCharsFromApi = async () => {
        const response = await axios.get(apiUrl)
        setCharData(response.data)
    }

    return (
        <>
            <Stack gap={2} className="col-md-5 mx-auto">
                <ListGroup>
                    {charData.map((char) => (
                        <Link to="/Profile" state={{ char: char }}>
                            <CharItem char={char} />
                        </Link>
                    ))}            
                </ListGroup>
            </Stack>
        </>
    )
}

export default CharList;
