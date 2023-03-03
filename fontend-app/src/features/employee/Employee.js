import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmployee } from "../../common/apiSevice";
import { apiRequest } from "../../common/http";

export default function Employee() {
  const [lstEmployee, setLstEmployee] = useState();
  useEffect(() => {
    getAllEmployee(
      (data) => {
        setLstEmployee(data);
      },
      (error) => {}
    );
  }, []);
    const dispath = useDispatch();
    console.log("dispath", dispath);
  return lstEmployee ? (
    <table className="table table-striped table-inverse table-responsive">
      <thead className="thead-inverse">
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {lstEmployee.map((item, idx) => {
          return (
            <tr key={idx}>
              <td scope="row">{item?.id}</td>
              <td >{item?.lastName}</td>
              <td style={{textAlign: 'left'}}>{item?.emailId}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    "not found"
  );
}
