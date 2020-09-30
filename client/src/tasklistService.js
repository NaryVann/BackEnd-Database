import axios from 'axios';

const url = 'http://localhost:5000/api/tasklist';

class tasklistService {
    //get tasklist
    static getPosts(){
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        });
    }

    //create tasklist
    static inserPost(text){
        return axios.post(url, {
            text
        });
    }

    //delete tasklist
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default tasklistService;