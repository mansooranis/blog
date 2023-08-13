import { Container, Navbar, Nav} from "react-bootstrap"
import M from "../../assets/M.png";
import "./navbar.css"
export default function NavBar(){
    return (
        <div>
            <Navbar expand="md" variant="light" bg="#fefae0" fixed="top" className="nav" scrolling >
                <Container>
                <Navbar.Brand href="https://mansoor.app" className=" inline-block ">
                    {/* <div className=" flex flex-row flex-nowrap"> */}
                        <img src={M} height={28} width={28}/> 
                    {/* </div> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link href="#" style={{color:"black"}}>Home</Nav.Link>
                        <Nav.Link href="#" style={{color:"black"}}>Resources</Nav.Link>
                        <Nav.Link href="#" style={{color:"black"}}>Write</Nav.Link>
                        <Nav.Link href="mailto:mansooranis60@gmail.com" style={{color:"black"}}>Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar> 
        </div>
    )
}