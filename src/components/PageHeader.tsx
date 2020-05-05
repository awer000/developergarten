import React from "react"
import "./PageHeader.scss"

type PageHeaderProps = {
  logoName: string
}
function PageHeader({ logoName }: PageHeaderProps) {
  return (
    <header className='PageHeader'>
      <div className='PageHeader__content'>
        <p>{logoName}</p>
        <div>버튼 있는 곳</div>
      </div>
    </header>
  )
}

export default PageHeader
