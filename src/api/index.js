import axios from 'axios'

const API = axios.create({ baseURL: process.env.REACT_APP_NODE_JS })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('Profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req
})

export const logIn = (authData) => API.post('/users/login', authData)



export const signUp = (authData) => API.post('/users/signup', authData)



export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/get')
export const deleteQuestion = (id) => API.delete(`/questions/delete/:${id}`)
export const voteQuestion = (id,value, userId) => API.patch(`/questions/vote/${id}`,{value,userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) => API.patch(`/answer/post/:${id}`, { noOfAnswers, answerBody, userAnswered, userId })
export const deleteAnswer = (id,answerId,noOfAnswers) => API.patch(`/answer/delete/:${id}`,{answerId,noOfAnswers})

export const fetchAllUsers = () => API.get('/users/getAllUsers')
export const updateProfile = (id, updateData) => API.patch(`/users/update/${id}`, updateData)
export const generateOTP = (email) => API.post('/verify/email',{email})
export const verifyOTP = (email,recvOTP) => API.post('/verify/otp',{email,recvOTP})
export const searchStackOverflow = (question) => API.post('/search/stackoverflow',{question})
