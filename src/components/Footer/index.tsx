import { Container } from "react-bootstrap";

const Footer = () => {

    return(
        <footer className="text-center p-3 bg-white border-top">
            <Container className=" d-flex align-items-center justify-content-between">
                <div>
                © { new Date().getFullYear() }
            </div>

            <div>
                <a href="https://github.com/LuizJunior007"  className="me-3 text-dark" target="_blank">
                    <i className="bi bi-github"></i>
                </a>

                <a href="https://www.linkedin.com/in/luiz-junior-503969227/" className="text-dark" target="_blank">
                    <i className="bi bi-linkedin"></i>
                </a>
            </div>
            </Container>
        </footer>
    );

}

export default Footer;