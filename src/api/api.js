import axiosInstance from './axiosInstance';

export const getEvents = async () => {
    const response = await axiosInstance.get('/events')
    return response.data;
}
export const getEvent = async (id) => {
    const response = await axiosInstance.get(`/event/${id}`)
    return response.data;
}

export const getTags = async () => {
    const response = await axiosInstance.get('/tags')
    return response.data;
}
