"use client";

import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect } from "react";

export default function Register() {
    useEffect(() => {
        const text = document.querySelector('.text p') as HTMLElement;
        if (text) {
            text.innerHTML = text.innerText.split('').map(
                (char, i) =>
                    `<span style="transform: rotate(${i * 360 / text.innerText.length}deg)">${char}</span>`
            ).join('');
        }
    }, []);

    return (
        <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0 relative">
            <Link
                href={"/login"}
                className={cn(buttonVariants({ variant: "ghost" }),
                    "absolute left-4  top-4 md:left-8 md:top-8"
                )}
            >
                ログイン
            </Link>
            <div className="h-full bg-muted lg:flex hidden items-center justify-center">
                <div className="circle">
                    <div className="text">
                        <p className="font-bold">CreativeUX/UI - Designer - MemoStack -</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="center-image" width="200" height="200" viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"/>
                            <path strokeLinecap="round" d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="mx-auto w-full sm:w-[350px] flex-col justify-center space-y-6">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        アカウントの作成
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        以下3つのいずれかからアカウントを作成してください。
                    </p>
                </div>
                <UserAuthForm />

                <p className="text-muted-foreground px-8 text-center text-sm">
                    続けてクリックすれば私達の
                    <Link href={"/terms"} className="underline underline-offset-4">
                        利用規約
                    </Link>
                    および
                    <Link href={"/privacy"} className="underline underline-offset-4">
                        プライバシーポリシー
                    </Link>
                    に同意したものとみなされます。
                </p>
            </div>
        </div>
    )
}