import axios from "axios";

const API_URL="http://4.224.186.213/evaluation-service/notifications"
export const getNotifications=async()=>{
    try{
        const response=await axios.get(API_URL,{
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM3doMWEwNTY4QGJ2cml0aHlkZXJhYmFkLmVkdS5pbiIsImV4cCI6MTc4MjM3ODYxNywiaWF0IjoxNzgyMzc3NzE3LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmQ0ZWM0ZGEtOGMwNy00YjQ5LTk0MzUtYjk0ZjUxMjgwMDdiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiam9ubmFkdWxhIHlhc2Fzd2luaSIsInN1YiI6Ijg0ZGRhN2Q2LWNjZTYtNDY2Yi1hOTA5LTI4MjM5ZWM2MTRlYSJ9LCJlbWFpbCI6IjIzd2gxYTA1NjhAYnZyaXRoeWRlcmFiYWQuZWR1LmluIiwibmFtZSI6Impvbm5hZHVsYSB5YXNhc3dpbmkiLCJyb2xsTm8iOiIyM3doMWEwNTY4IiwiYWNjZXNzQ29kZSI6ImFoWGp2cCIsImNsaWVudElEIjoiODRkZGE3ZDYtY2NlNi00NjZiLWE5MDktMjgyMzllYzYxNGVhIiwiY2xpZW50U2VjcmV0IjoibnJLa3BmblRUY3lEWlpSbiJ9.P0Wqndul8G39dVnvFBY2R72jjmKU7_aG27pXDO07OsA"
            }
        });
        return response.data;
    }
    catch(error){
        console.log(error);
        return [];
    }
};
