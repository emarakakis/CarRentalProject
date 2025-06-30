import * as React from 'react'

export default function RootLayer({children}:{children : React.ReactNode}){
  return(
    <html lang="en">
      <body style={{ margin:0}}>
        <main>{children}</main>
      </body>
    </html>
  )
}