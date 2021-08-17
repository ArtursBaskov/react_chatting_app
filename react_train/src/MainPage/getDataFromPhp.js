import axios from 'axios';

const getDataFromPhp = (setContactData, setMessages) => {
    const getData = async (url) => {
        try {
            const response = await axios({
                method: 'get',
                url: url
            });
            //let arr = response.data;
            //setContactData(arr);
            setContactData(response.data);
        } catch (error) {
            console.log(error);
        }

    }
    const chatData = async (url, group_id) => {
        const response = await axios({
            method: 'post',
            url: url,
            data: {
                groupID: group_id
            }
        });
        //console.log('msgs');
        //console.log(response.data);
        setMessages(response.data);
    }
    return {getData, chatData};
}
export default getDataFromPhp;
