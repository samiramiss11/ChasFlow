// // AuthContext.tsx keep this
// import React, { createContext, useState, useContext, ReactNode } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../services/api' // API to authenticate the user

// interface AuthContextType {
//   isAuthenticated: boolean
//   login: (email: string, password: string) => Promise<void>
//   logout: () => void
// }

// const defaultValue: AuthContextType = {
//   isAuthenticated: false,
//   login: async () => {},
//   logout: () => {},
// }

// export const AuthContext = createContext<AuthContextType>(defaultValue)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [authState, setAuthState] = useState(defaultValue)
//   const navigate = useNavigate()

//   const login = async (email: string, password: string) => {
//     try {
//       await loginUser(email, password) // Call login API
//       setAuthState({ ...authState, isAuthenticated: true })
//       navigate('/admin') // Redirect to AdminPage
//     } catch (error) {
//       console.error('Login failed:', error)
//     }
//   }

//   const logout = () => {
//     localStorage.removeItem('token')
//     setAuthState({ ...authState, isAuthenticated: false })
//   }

//   return (
//     <AuthContext.Provider value={{ ...authState, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => useContext(AuthContext)

// It looks like you want to replace the useAuth context in LoginPage.tsx with a clientLoader-based approach. Here’s how you can modify your implementation to use a client loader in React Router while maintaining authentication logic:

// Steps to Implement:
// Use a client loader for login.
// Store authentication state in Redux or another global state management system instead of context.
// Redirect the user upon successful login.
// 1. Update clientLoader in Router Configuration
// Modify your route setup to use a loader function that checks authentication.

// tsx
// Copy
// Edit
// import { redirect } from 'react-router-dom'
// import { loginUser } from '../services/api'

// export const loginLoader = async ({ request }: { request: Request }) => {
//   const formData = await request.formData()
//   const email = formData.get('email') as string
//   const password = formData.get('password') as string

//   try {
//     await loginUser(email, password)
//     return redirect('/booking-consult')
//   } catch (error) {
//     return { error: 'Login failed. Please try again.' }
//   }
// }
// 2. Update LoginPage.tsx
// Modify the login form to use React Router's useFetcher for submitting login data.

// tsx
// Copy
// Edit
// import React from 'react';
// import { useFetcher, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const fetcher = useFetcher();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Admin Login</h1>
//       <fetcher.Form method="post">
//         <input type="email" name="email" placeholder="Email" required />
//         <input type="password" name="password" placeholder="Password" required />
//         <button type="submit">Login</button>
//       </fetcher.Form>
//       {fetcher.data?.error && <p style={{ color: 'red' }}>{fetcher.data.error}</p>}
//       <a href="/forgot-password">Forgot Password?</a>
//     </div>
//   );
// };

// export default LoginPage;
// 3. Adjust Routing Configuration in App.tsx
// Modify the route definition to include the loader.

// tsx
// Copy
// Edit
// import { createBrowserRouter } from 'react-router-dom';
// import LoginPage from '../pages/LoginPage';
// import { loginLoader } from '../loaders/loginLoader';

// const router = createBrowserRouter([
//   { path: '/login', element: <LoginPage />, loader: loginLoader },
//   { path: '/booking-consult', element: <BookingConsultPage /> },
// ]);

// export default router;
// Benefits of This Approach
// ✅ Uses React Router’s built-in loaders instead of relying on context.
// ✅ Handles authentication logic at the route level.
// ✅ Avoids unnecessary state management in components.
// ✅ Redirects seamlessly upon successful login.

// Would you like to integrate Redux for authentication state as well? 🚀
