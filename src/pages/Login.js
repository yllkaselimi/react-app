import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLoggedInUser, getUsers } from '../helpers/storage'


function Login({setUser}) {
    const [message, setMessage] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      if(getLoggedInUser() !== null) navigate('/raporto');
    }, [])
  
    const handleLogin = e => {
      e.preventDefault()
  
      const user = {
        email: e.target.elements[0].value,
        password: e.target.elements[1].value,
      }

      const users = getUsers()
  
      if(users.length > 0) {
        const user_exists = users.filter(u => ((u.email == user.email) && (u.password == user.password)))
        if(user_exists.length > 0) {
          localStorage.setItem('loggedin', JSON.stringify(user.email))
          setUser(user.email)
          navigate('/raporto')
        } else {
          setMessage('Incorrect email and/or password!')
        }
      } else {
        setMessage('User with ' + user.email + ' does not exist!')
      }
    }

  return (
    <div>
        <div className="px-[0] bg-[#3A4D1Cff] pb-16 flex justify-around w-screen absolute left-0 right-0 top-0"></div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,160L40,186.7C80,213,160,267,240,261.3C320,256,400,192,480,165.3C560,139,640,149,720,176C800,203,880,245,960,256C1040,267,1120,245,1200,218.7C1280,192,1360,160,1400,144L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div className="flex items-center justify-center">
            <div className="bg-[#E39C9C] w-full max-w-sm p-4 rounded-lg sm:p-6 md:p-8 ">
                {message != null && <div className="mb-4">{message}</div>}
                <form onSubmit={handleLogin} className="space-y-6">
                <h1 className='font-black text-3xl mb-7 text-white uppercase flex items-center relative '>Login</h1>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" placeholder="yllka@gmail.com"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>                                             
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fjalekalimi</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required></input>
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-white dark:text-white">Remember me</label>
                        </div>
                        <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-white">Lost Password?</a>
                    </div>
                    <button type="submit" className="w-full text-gray-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-blue-800">Kycu</button>
                    <div className="text-sm font-medium text-white dark:text-white">
                        Not registered? <a href="/register" className="text-blue-700 hover:underline dark:text-white">Create account</a>
                    </div>
                </form>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,96L40,128C80,160,160,224,240,240C320,256,400,224,480,218.7C560,213,640,235,720,229.3C800,224,880,192,960,160C1040,128,1120,96,1200,90.7C1280,85,1360,107,1400,117.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div className="h-[55vh] px-[0] bg-[#3A4D1Cff] pb-10 flex items-center relative overflow-hidden flex-col">

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mt-20 lg:text-6xl dark:text-white">Behu pjese e komunitetit <span class="underline underline-offset-3 decoration-8 decoration-white dark:decoration-white"> #pastroKosoven</span></h1>

        <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 mt-10">Hedhja e mbeturinave në natyrë, shkaterron ekosistemet dhe habitatet e shumë llojeve të bimëve dhe shtazëve.</p>
        <p class="text-gray-500 dark:text-gray-400 text-center">Hedhja e mbeturinave toksike, mund të ndikojë negativisht në shëndetin e qytetarëve. Ndërhyrjet mjekësore të lidhura me ndotjen dhe kontaminimin e mjedisit shkaktojnë probleme serioze shëndetësore tek ne.</p>

</div>
    </div>
  )
}

export default Login