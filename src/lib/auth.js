import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { connectToDb } from "./utils"
import { User } from "./models"
import bcrypt from "bcrypt"

const login = async (credentials) => {
    try {
        connectToDb()
        const user = await User.findOne({ username: credentials.username })
        if (!user) {
            throw new Error("the username does not exist")
        }
        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        if (!isPasswordCorrect) {
            throw new Error("the password is not correct")
        }
        return user


    }
    catch (error) {
        console.log(error)
        throw new Error("Something went wrong with the login")
    }
};


export const {
    handlers: { GET, POST }, auth, signIn, signOut }
    = NextAuth({
        providers: [
            CredentialsProvider({
                async authorize(credentials) {
                    try {
                        const user = await login(credentials)
                        return user;
                    }
                    catch (error) {
                        console.log(error)
                        throw new Error("Something went wrong with the login")
                    }
                }
            })
        ]
    })