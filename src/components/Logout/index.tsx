'use client';

import { signOut } from "next-auth/react";
import Link from "next/link";

const Logout = () => {

    return(
        <Link href="/" className="nav-link" onClick={() => signOut({ callbackUrl: '/' })}>Sair</Link>
    );

}

export default Logout;