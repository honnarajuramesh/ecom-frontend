import React from 'react'

function Login(){
return(
 <div className='flex bg-red-200 w-screen h-screen flex-center'>

    <form action='http:/localhost:4000/user/login'>
        <div>
            usernam
        </div>
        <div>
            password
        </div>
        <div>
            btn login
        </div>
    </form>

 </div>
)
       
 
}

export default Login;