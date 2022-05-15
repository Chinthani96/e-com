import axios from "../axios";

// Utility functions for making API calls
export const getRequest = async (uri: string) => {
    try {
        let response = await axios.get(uri);

        return {
            data: response.data,
            error: null
        }
    }
    catch (error) {
        return {
            data: null,
            error: error,
        }
    }
}