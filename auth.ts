import NextAuth from "next-auth"
import {prisma} from "./lib/prisma"
import GoogleProvider from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"
export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })

    ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks:{
        async signIn({user}:any){
            const {email, name}=user
            try {
                if(email && name){
                    const existingUser=await prisma.user.findUnique({where:{email}})
                    if(!existingUser){
                        await prisma.user.create({data:{email,name}}) 
                        return true
                    } 
                    return false
                }
                
            } catch (error) {
                console.log('Error during sign-in')
                return false
            }

        }
      },

      async jwt({token, account, user}:{token:JWT, account:any, user:any}){
        if(account && user){
            const {name, email}=user
            const newUser=await prisma.user.findUnique({where:{email}})
            if(newUser) 
                token.id=newUser.userId
                return token
            
        }
        return token
      },
      async session({session, token}:{session:any, token:any}){
        Object.assign(session, {id:token.id})
        return session
      }
}
const handler=NextAuth(authOptions)
export {handler as GET, handler as POST}
