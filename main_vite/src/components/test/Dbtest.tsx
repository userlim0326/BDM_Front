import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../db/user/User";

interface Data {
  mno: number;
  name: string;
  email: string;
  password: string;
  userImage: string;
}

function Dbtest() {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const users = await getAllUsers();
        setData(users);
        console.log(users);
      } catch (err) {
        setError("데이터를 불러오는 중 에러가 발생했습니다.");
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <div className="border-t-violet-600">
          {data.map((datas) => (
            <div key={datas.mno}>
              <div>이름: {datas.name}</div>
              <div>이메일: {datas.email}</div>
              <div>
                이미지:{" "}
                <img src={datas.userImage} alt={datas.name} width="100" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dbtest;
