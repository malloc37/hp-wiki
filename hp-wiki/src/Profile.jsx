import { Component } from "react";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class Profile extends Component {

    getTheme(character) {

        var theme = ""

        switch (character) {
            case "Gryffindor":
                theme = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d6l7u6e-ea707856-8686-4f28-91b2-d92368e96ea8.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__gryffindor_pinstripes_by_theladyavatar_d6l7u6e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNmw3dTZlLWVhNzA3ODU2LTg2ODYtNGYyOC05MWIyLWQ5MjM2OGU5NmVhOC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.IJzxoObmDKbRKwPr8st1ZitNm0CWRKwAlw3G0U8dDOg"
                break;
            
            case "Slytherin":
                theme = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d6l7ufc-0d57e9c5-1000-44c6-bf4b-13c1ff34431a.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__slytherin_pinstripes_by_theladyavatar_d6l7ufc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNmw3dWZjLTBkNTdlOWM1LTEwMDAtNDRjNi1iZjRiLTEzYzFmZjM0NDMxYS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.-2UlMM_2-hype7MWRAv7TcCAIXFqAx9Vq7uE8xau1WU"
                break;
            
            case "Ravenclaw":
                theme = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d6l7u9v-6ac19d20-72f6-41cd-b7a2-7e44039e3680.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__ravenclaw_pinstripes_by_theladyavatar_d6l7u9v-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNmw3dTl2LTZhYzE5ZDIwLTcyZjYtNDFjZC1iN2EyLTdlNDQwMzllMzY4MC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Ci29Efa1UfHMqunNoIbgAL2-BDb1PitQ8PP0uDonoVU"                
                break;
            case "Hufflepuff":
                theme = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d7b2e79c-09db-4ffa-b7bd-3540414ad0dd/d6l7ulb-789bde70-3a1b-4221-a206-acbf208d7b5a.jpg/v1/fill/w_900,h_563,q_75,strp/harry_potter_wallpaper__hufflepuff_pinstripes_by_theladyavatar_d6l7ulb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvZDdiMmU3OWMtMDlkYi00ZmZhLWI3YmQtMzU0MDQxNGFkMGRkXC9kNmw3dWxiLTc4OWJkZTcwLTNhMWItNDIyMS1hMjA2LWFjYmYyMDhkN2I1YS5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.jcK27IxKEhnoevlR2wipgz6KNGvmqH-2tc6Wg94FqsU"                
                break;
            
            default:
                theme = "https://www.wallpaperflare.com/static/389/348/1007/stripes-cloth-gray-vertical-wallpaper.jpg"
                break;
        }

        return theme
    }

    render() {
        var theme = this.getTheme("Slytherin")
        return (
            <Container style={{backgroundImage: "url(" + theme + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} fluid>
                <Col>
                    <h1 style={{color: "white"}}>Character Name</h1>
                    <Row xs={12} style={{backgroundColor: "rgba(0, 0, 0, 0.5)", paddingTop: "5%" , paddingBottom: "5%"}}>
                        <Col xs={12} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div style={{width: "200px", margin: "0",display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <Image src="http://hp-api.herokuapp.com/images/hermione.jpeg" rounded="true" thumbnail="true"></Image>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <ul style={{listStyle: "none", padding: "0",paddingTop: "5%", color: "white"}}>
                                <li>Species: </li>
                                <li>Gender: </li>
                                <li>House: </li>
                                <li>Date of Birth: </li>
                                <li>Ancestry: </li>
                                <li>Patronus: </li>
                                <li>Actor: </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Container>
        )
    }
}

export default Profile