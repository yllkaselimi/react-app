import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getLoggedInUser, getUsers } from '../helpers/storage'

function Register() {
    const [message, setMessage] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        if(getLoggedInUser() !== null) navigate('/raporto');
    }, [])
    
    const handleRegister = e => {
        e.preventDefault()
    
        const user = {
        fullname: e.target.elements[0].value,
        email: e.target.elements[1].value,
        password: e.target.elements[2].value,
        }
    
        const users = getUsers()
    
        if(users.length > 0) {
        const user_exists = users.filter(ls_user => ls_user.email == user.email)
    
        if(user_exists.length > 0) {
            setMessage('User with ' + user.email + ' already exists!')
        } else {
            localStorage.setItem('users', JSON.stringify([...users, user]))
            navigate('/login');
        }
        } else {
        localStorage.setItem('users', JSON.stringify([user]))
        navigate('/login');
        }
    }

    return (
      <div>
         <div className="px-[0] bg-[#3A4D1Cff] pb-16 flex justify-around w-screen absolute left-0 right-0 top-0"></div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,128L26.7,149.3C53.3,171,107,213,160,213.3C213.3,213,267,171,320,138.7C373.3,107,427,85,480,96C533.3,107,587,149,640,181.3C693.3,213,747,235,800,213.3C853.3,192,907,128,960,128C1013.3,128,1067,192,1120,197.3C1173.3,203,1227,149,1280,160C1333.3,171,1387,245,1413,282.7L1440,320L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>

         <div className="flex items-center justify-center">
            <div className="bg-[#E39C9C] w-full max-w-sm p-4 rounded-lg sm:p-6 md:p-8 ">
                <form onSubmit={handleRegister} className="space-y-6" action="#">
                <h1 className='font-black text-3xl mb-7 text-white uppercase flex items-center relative '>Register</h1>
                    {message != null && <div className="mb-4">{message}</div>}
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emri Mbiemri</label>
                        <input type="text" name="text" id="text" placeholder="Yllka Selimi"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-gray-600" required></input>
                    </div>    
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
                    </div>
                    <button type="submit" className="w-full text-gray-600 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-blue-800">Regjistrohu</button>

                </form>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#3A4D1C" fill-opacity="1" d="M0,32L40,37.3C80,43,160,53,240,64C320,75,400,85,480,74.7C560,64,640,32,720,64C800,96,880,192,960,218.7C1040,245,1120,203,1200,165.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        <div className="h-[55vh] px-[0] bg-[#3A4D1Cff] pb-10 flex items-center relative overflow-hidden flex-col">

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mt-20 lg:text-6xl dark:text-white">Behu pjese e komunitetit <span class="underline underline-offset-3 decoration-8 decoration-white dark:decoration-white"> #pastroKosoven</span></h1>

        <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-400 mt-10">Hedhja e mbeturinave në natyrë, shkaterron ekosistemet dhe habitatet e shumë llojeve të bimëve dhe shtazëve.</p>
        <p class="text-gray-500 dark:text-gray-400 text-center">Hedhja e mbeturinave toksike, mund të ndikojë negativisht në shëndetin e qytetarëve. Ndërhyrjet mjekësore të lidhura me ndotjen dhe kontaminimin e mjedisit shkaktojnë probleme serioze shëndetësore tek ne.</p>

</div>

      </div>
    )
  }
  
  export default Register