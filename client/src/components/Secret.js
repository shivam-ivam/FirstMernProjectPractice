import React , {useEffect} from 'react'
import {useNavigate} from "react-router-dom";

export default function Secret() {

  const navigate = useNavigate();
  const callAboutPage = async () => {
    let token= "";
    const cookies =  document.cookie.split(";");
    cookies.forEach(element => {
      const cookieData = element.split("=");
      cookieData.forEach(e => {
      });
      for (let i = 0; i < cookieData.length; i++) {
        const e = cookieData[i];
        if(e == "user"){
          token = cookieData[i+1];
        }
      }
    });

    try {
      const res = await fetch('http://localhost:5000/secret', {
        method: "POST",
        headers:{
          // Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token:token
        }),
        // credentials: "include"
      });
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
      navigate('/login');
    }
  }
  useEffect(() => {
    callAboutPage();
    // eslint-disable-next-line
  }, [])
  return (
    <div>Secret</div>
  )
}
