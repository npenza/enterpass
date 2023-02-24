import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

export default function Account() {

  const router = useRouter()
  const supabase = useSupabaseClient()
  const session = useSession()

  // Handle the log out
  const handleLogOut = async () => {
    try{
      await supabase.auth.signOut()
      router.push("/")
    } catch (e) {
      alert(e)
    }
  }

  if (session){
    return (
      <main>
          <p>Logged in</p>
          <button onClick={handleLogOut}>Log Out</button>
      </main>
    )
  } else {
    return (
      <p>You aren't logged in</p>
    )
  }
  
}
