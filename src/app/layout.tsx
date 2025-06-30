import * as React from 'react'
import Header from './components/Header'

export default function RootLayer({children}:{children : React.ReactNode}){
  return(
    <html lang="en">
      <body style={{ margin:0}}>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  )
}