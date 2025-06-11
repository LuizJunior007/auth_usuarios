"use client";

import { authOptions } from "@/app/api/auth/auth/route";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logout from "../Logout";
import { useSession } from "next-auth/react";

const Appbar = () => {

    const { data: session, status } = useSession();

    return(
        <Navbar expand="md" className="bg-white border-bottom">
            <Container>
                <div>
                    <Link href="/dashboard" className="navbar-brand">
                        Usersauth
                    </Link>
                </div>

                <Nav>
                    {
                        session
                        ?
                        <Logout />
                        :
                        <Link href="/" className="nav-link">Login</Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );

}

export default Appbar;