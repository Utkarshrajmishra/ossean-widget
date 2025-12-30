import NextAuth from "next-auth"
// import prisma from "./lib/prisma"
import GoogleProvider from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })

    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     async signIn({ user }: any): Promise<boolean> {
    //         const { email, name } = user

    //         try {
    //             if (!email || !name) return false

    //             const existingUser = await prisma.user.findUnique({
    //                 where: { email },
    //             })

    //             if (!existingUser) {
    //                 await prisma.user.create({
    //                     data: { email, name },
    //                 })
    //             }

    //             return true
    //         } catch (error) {
    //             console.error("Error during sign-in", error)
    //             return false
    //         }
    //     },

    //     async jwt({ token, account, user }: { token: JWT, account: any, user: any }) {
    //         if (account && user) {
    //             const { name, email } = user

    //             const newUser = await prisma.user.findUnique({ where: { email } })
    //             if (newUser)
    //                 token.id = newUser.id
    //             return token

    //         }
    //         return token
    //     },
    //     async session({ session, token }: { session: any, token: any }) {
    //         Object.assign(session, { id: token.id })
    //         return session
    //     }
    // },


}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
