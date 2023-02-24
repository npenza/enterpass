import { Auth, ThemeSupa } from "@supabase/auth-ui-react"
import { supabase } from '@supabase/auth-ui-react/dist/esm/common/theming';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import { Session } from '@supabase/auth-helpers-nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Login() {

  const supabase = useSupabaseClient()
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session){
      router.push('/account')
    }
  } , [])

  return (
    <main>
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
    </main>
  )
}
