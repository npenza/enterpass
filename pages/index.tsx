import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';

export const Home:React.FC = () => {
  const session = useSession()
  const router = useRouter()

  const handleLogInRedirect = () => {
    if (!session)
        router.push("login")
    else
        router.push("account")
}
  
  return (
    <div>
      <button onClick={handleLogInRedirect}>Log In</button>
    </div>
  )
}


export default Home
