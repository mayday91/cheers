// // app/routes/login.tsx
// import { Layout } from '~/components/layout'

// export default function Login() {
//   return (
//     <Layout>
//       <div className="h-full justify-center items-center flex flex-col gap-y-4">
//         <h2 className="text-5xl font-extrabold text-yellow-300">Welcome to Cheers!</h2>
//         <p className="font-semibold text-slate-300">Log In To Give Some Praise!</p>

//         <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
//           <label htmlFor="email" className="text-blue-600 font-semibold">
//             Email
//           </label>
//           <input type="text" id="email" name="email" className="w-full p-2 rounded-xl my-2" />

//           <label htmlFor="password" className="text-blue-600 font-semibold">
//             Password
//           </label>
//           <input type="password" id="password" name="password" className="w-full p-2 rounded-xl my-2" />

//           <div className="w-full text-center">
//             <input
//               type="submit"
//               className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
//               value="Sign In"
//             />
//           </div>
//         </form>
//       </div>
//     </Layout>
//   )
// }

import React, { useState } from 'react'
import { Layout } from '~/components/layout'
import { FormField } from '~/components/form-field'
import type { ActionFunction } from '@remix-run/node'

export const action: ActionFunction = async ({ request }) => {}

export default function Login() {
    const [action, setAction] = useState('login')
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setFormData(form => ({...form, [field]: event.target.value }))
    }

    return (
        <Layout>
            <div className="h-full justify-center items-center flex flex-col gap-y-4">
                <button onClick={() => setAction(action == 'login' ? 'register' : 'login')}
                    className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                >
                    {action === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
                <h2 className='text-5xl font-extrabold text-yellow-300'>Welcome to Cheers!</h2>
                <p className='font-semibold text-slate-300'>Log in To Say What Up!</p>

                <form method="POST" className="rounded-2xl bg-gray-200 p-6 w-96">
                    <FormField
                        htmlFor="email"
                        label="Email"
                        value={formData.email}
                        onChange={e => handleInputChange(e, 'email')}
                    />
                    <FormField
                        htmlFor="password"
                        type="password"
                        label="Password"
                        value={formData.password}
                        onChange={e => handleInputChange(e, 'password')}
                    />

                    {action === 'register' && (
                        <>
                            <FormField
                                htmlFor="firstName"
                                label="First Name"
                                value={formData.firstName}
                                onChange={e => handleInputChange(e, 'firstName')}
                            />
                            <FormField
                                htmlFor="lastName"
                                label="Last Name"
                                value={formData.lastName}
                                onChange={e => handleInputChange(e, 'lastName')}
                            />
                        </>
                    
                    )}
                    <div className="w-full text-center">
                        <button
                            type="submit"
                            name="_action"
                            className="rounded-xl bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-x-1"
                            value={action}
                        >   
                            {
                                action === "login" ? "Sign In" : "Sign Up"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </Layout>    
    )
}