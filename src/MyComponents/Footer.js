import React from 'react'

export const Footer = () => {

    let footerStyle = {
       position: "sticky",
       top: "100vh",
       width: "100%",
    }
    return(
        
        <footer className='bg-dark text-light py-3' style={footerStyle}>
        
            <p className='text-center'>Copyright @Yash Garg. My To do List</p>
        </footer>
        
    )
}
