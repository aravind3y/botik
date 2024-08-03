'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function AuthenticationPage() {
  const router = useRouter()
  return (
    <>
      <div className="container relative hidden h-[900px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 bg-slate-950">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex col-span-2">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1562869327-575fcdd475f5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight text-slate-100">
                Botik - Your AI boutique
              </h1>
              <Button type="button" onClick={() => router.push('/import_clothes')} variant="outline" size="sm" className="mt-4">
            Get started
          </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
