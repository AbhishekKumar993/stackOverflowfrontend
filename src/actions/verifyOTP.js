import * as api from '../api'

export const generateOTP = async(email) =>{
    try {
        return await (await api.generateOTP(email)).data.message
    } catch (error) {
        console.log('src actions verifyOTP generateOTP',error)
    }
}

export const verifyOTP = async (email,recvOTP) => {
    try {
        return await (await api.verifyOTP(email,recvOTP)).data.message
    } catch (error) {
        console.log('src actions verifyOTP verifyOTP',error)
    }
}
