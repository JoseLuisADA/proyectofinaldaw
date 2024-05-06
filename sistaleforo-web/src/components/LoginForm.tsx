'use client'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/Button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/Input'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { setCookie } from '@/helpers/cookiesHelpers'

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: 'Email must contain at least 2 characters' })
    .max(50),
  password: z
    .string()
    .min(8, { message: 'Password must contain at least 8 characters' })
    .max(100),
})

const LoginForm = () => {
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/sign-in', {
        username: form.getValues('username'),
        password: form.getValues('password'),
      })
      const { token } = response.data
      const [, payload] = token.split('.')
      const mainAccountId = JSON.parse(atob(payload)).main_account_uuid
      await setCookie('token', token, 30)
      await setCookie('mainAccountId', mainAccountId, 30)
      setTimeout(() => {
        router.push('/')
        setLoading(false)
      }, 500)
    } catch (error: any) {
      if (error.response.status === 401) {
        setError('Credenciales inválidas')
        setLoading(false)
      }
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center pb-32">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-10 border border-black rounded-[30px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-6">
          <h2 className="text-center text-2xl">Iniciar sesión</h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo electrónico :</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <FormMessage className="email-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Contraseña :</FormLabel>
                    {/*<div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-bg-primary  hover:text-primary-90">
                        Olvidaste la contraseña?
                      </a>
                    </div>*/}
                  </div>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>

                  <FormMessage className="password-error" />
                </FormItem>
              )}
            />
            <Button
              className="font-bold text-base bg-[#E57C3A] hover:bg-[#ff9858] text-black w-full flex justify-center items-center rounded-md mx-auto "
              type="submit"
            >
              {loading ? (
                <i className="bx bx-loader bx-spin bx-sm">Cargando...</i>
              ) : (
                'Entrar'
              )}
            </Button>
          </form>
        </Form>
        {error && (
          <div
            className={`text-red-500 text-center mt-4 ${
              error ? 'error-message' : ''
            }`}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginForm
