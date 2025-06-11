import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../lib/authOptions";
import { Metadata } from "next";
import { appName } from "@/config";

export const metadata: Metadata = {
    title: 'Dashboard' + appName,
    description: 'Sua descrição'
}

const Dashboard = async () => {

    const sesssion = await getServerSession(authOptions);

    if(!sesssion){

        redirect('/');

    }

    return(
        <>
            <h1>
                Dashboard
            </h1>

            <div>
                Bem vindo { sesssion.user?.name } !
            </div>
        </>
    );

}

export default Dashboard;