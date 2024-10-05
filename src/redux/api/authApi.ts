import { api } from "./index";

 
interface User {
    email: string;
    password: string;
}
interface PayloadToken {
    access_token: string;
    refresh_token: string;
}
export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        signIn: build.mutation<PayloadToken, User>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body
            })
            
        }),
        register: build.mutation<PayloadToken, User>({
            query: (body) => ({
                url: "/users",
                method: "POST",
                body
            })
        })
    })
})

export const {useSignInMutation, useRegisterMutation} = authApi;