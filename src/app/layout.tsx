import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import Appbar from "@/components/Appbar";
import { appName } from "@/config";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";
import AuthProvider from "./providers/Session";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Login" + appName,
  description: "Autenticação de usuários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = getServerSession(authOptions);

  return (
    <html lang="pt-br">
      <body>
        <div className="main">

          <AuthProvider>
            <div>
            
              <Appbar />

              <div className="container">
                <div className={`${!session ? '' : 'mt-5'}`}>
                  <div className="col-12">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </AuthProvider>

          <Footer />
        </div>
      </body>
    </html>
  );
}
