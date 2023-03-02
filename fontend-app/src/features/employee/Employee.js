import React from 'react';
import { apiRequest } from '../../common/http';

export default function Employee() {
    useEffect(() => {
        apiRequest('get', '/employee', {}, (data) => {
          console.log("data", data);
        }, (error) => {
          console.log("error", error);
        })
      },[])
    return (
        <div>email: </div>
    )
}
