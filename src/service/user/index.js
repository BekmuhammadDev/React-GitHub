import {req} from "../axios.config"

export const userAPI={
    getUser: async (userId)=>{
        try {
            const response = await req.get(`/users/${userId}`);
                return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    },

    searchUser: async (user_name)=>{
        try {
            const response = await req.get(`/users/${user_name}`);
                return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getFollowers: async (page=1)=>{
        try {
            const response = await req.get(`/users/${import.meta.env.VITE_MY_PROFILE}/followers?page=${page}`);
                return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    },

    getFollowings: async ()=>{
        try {
            const response = await req.get(`/users/${import.meta.env.VITE_MY_PROFILE}/following`);
                return response.data;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}