import React from "react"
import axios from "axios"
import qs from "qs"

function RegisterPage() {
  const onSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/auth/social/register",
        {
          display_name: "hihi",
          username: "lelana",
          short_bio: "하이",
        },
        {
          withCredentials: true,
        }
      )
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className='RegisterPage'>
      <button onClick={onSubmit}>제공</button>
    </div>
  )
}

export default RegisterPage
