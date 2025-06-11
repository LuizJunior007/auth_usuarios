import NextAuth, { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {

    providers: [
        Credentials({

            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' }
            },

            // Aqui poderia vir os dados do formulário para verificar se o usuário existe            
            async authorize(credentials){

                if(credentials?.email === 'luizjunior@gmail.com' && credentials?.password === '123456'){

                    return { id: '1', name: 'Luiz junior', email: 'luizjunior@gmail.com' }

                }

                return null;
            }
        })
    ],

    pages: {
        signIn: '/'
    },

    session: {
        strategy: 'jwt'
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
