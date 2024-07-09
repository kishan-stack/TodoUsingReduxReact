import config from "../config/config";

import {Client,Account,ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){//create account or signup
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if (userAccount) {
                return this.loginAccount({email,password})
            } else {
                return userAccount
            }

        } catch (error) {
            throw error;
        }
    }

    async loginAccount({email,password}){//login functionality
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){ //getUser 
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service error :: getCurrentUser :: error ",error)
        }
        
        return null;//incase any error value returns

    }
    async logoutAccount(){//logout user 
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("appwrite service error :: logout :: error ",error)
        }
        

    }

}


const authService = new AuthService();

export default authService;
