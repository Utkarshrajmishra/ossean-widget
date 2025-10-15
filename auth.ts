import GoogleProvider from "next-auth/providers/google"
export const authOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.AUTH_CLIENT_ID!,
            clientSecret: process.env.AUTH_CLIENT_SECRET!,
        })

    ]
    
}