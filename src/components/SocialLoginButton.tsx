import React from "react"
import "./PageHeader.scss"
import { GoMarkGithub } from "react-icons/go"
import styled from "styled-components"

const LoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: black;
  color: white;
  border-radius: 4px;
  ${"svg"} {
    margin-right: 8px;
  }
`
interface ButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, 'href'> {
  href: string;
  provider: string;
}

function SocialLoginButton({ children, href, provider }: ButtonProps) {
  return <LoginButton href={href}>
<GoMarkGithub color='white' fontSize='24px' />      {children}
    </LoginButton>
}

export default SocialLoginButton
