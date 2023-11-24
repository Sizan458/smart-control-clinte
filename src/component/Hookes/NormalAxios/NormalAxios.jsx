import axios from "axios";

const instance = axios.create({
    baseURL:"https://smart-build-contorl-server.vercel.app"
})
const NormalAxios = () => {
    return   instance
};

export default NormalAxios;