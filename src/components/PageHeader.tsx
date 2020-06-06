import React from "react"
import "./PageHeader.scss"
import SocialLoginButton from "./SocialLoginButton"

type PageHeaderProps = {
  logoName: string
}

function PageHeader({ logoName }: PageHeaderProps) {
  const provider = "github"
  const host =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_API_HOST
      : "http://localhost:4000/"

  const redirectTo = `${host}api/auth/social/redirect/${provider}?next=${"/"}`

  return (
    <header className='PageHeader'>
      <div className='content'>
        <p>{logoName}</p>
        <SocialLoginButton href={redirectTo} provider='github'>
          Sign in with GitHub
        </SocialLoginButton>
      </div>
    </header>
  )
}

export default PageHeader
