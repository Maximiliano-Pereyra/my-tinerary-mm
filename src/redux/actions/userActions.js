import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const enter = createAsyncThunk('enter', async (datos) => {
    let url =` ${BASE_URL}/auth/sign-in`
    try {
        let user = await axios.post(url,datos)
        console.log(user)
        return {
            success: true,
            response: user.data.response, 
            res: user.data,

        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})
const reEnter = createAsyncThunk('reEnter', async (token) => {
    let url =` ${BASE_URL}/auth/token`
    let headers = {headers: {'Authorization':` Bearer ${token}`}}
    try {
        let user = await axios.post(url,null,headers)
        console.log(user)
        return {
                success: true,
                response: user.data.response,
                token:token,
            }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})


const usersActions= {
 enter,
 reEnter
}

export default usersActions