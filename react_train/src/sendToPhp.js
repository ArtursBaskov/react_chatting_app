import axios from 'axios';

const sendToPhp = () => {
    const login = async (url, usernameF, passwordF) => {
        try {
            const response = await axios({
                method: 'post',
                url: url,
                data: {
                    username: usernameF,
                    password: passwordF,
                }
            });
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
    return {login};
}
export default sendToPhp;