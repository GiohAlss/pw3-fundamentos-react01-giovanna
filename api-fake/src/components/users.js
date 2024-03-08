import {useState, useEffect} from 'react';
import axios from 'axios';

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{

    axios.get('https://reqres.in/api/users?page=2')
        .then((response)=>{
            console.log(response)
            setUsers(response.data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[]);

    return(
        <>
            {
            users.map(user=>(
                <div key={user.id} className='cardUser'>
                    <img src={user.avatar} alt='Imagem do usuário'></img>
                    <h3>{user.first_name}</h3>
                    <p>{user.email}</p>
                </div>
            ))
            }
        </>
    );
}

export default Users;
