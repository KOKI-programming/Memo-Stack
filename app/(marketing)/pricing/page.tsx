"use client";


import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icon as Icons } from "@/components/icon";
import { useState } from "react";
import Button2 from "@/components/ui/Button square";




export default function PricingPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleStartClick = async () => {
    setIsLoading(true);
    try {
      // Simulate a delay for the loading animation
      await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5秒の遅延
      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Failed to start", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24 fade-in"> 
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem] ">
        <h2 className="font-black text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          シンプルプラン
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          メモを無制限で保存可能です。
        </p>
      </div>
      <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] ">
        <div className="grid gap-6">
          <h3 className="text-xl font-bold sm:text-2xl">シンプルプランに含まれるもの</h3>
          <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> メモ数無制限
            </li>
            <li className="flex items-center">
              <Icons.check className="mr-2 h-4 w-4" /> 基本機能利用可
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 text-center">
          <div>
            <h4 className="text-7xl font-bold">無料</h4>
            <p className="text-sm font-medium text-muted-foreground">For Free</p>
          </div>
          <button>
            <Button2
            onClick={handleStartClick}
            className={cn(buttonVariants({ size: "lg" }))}
            disabled={isLoading} // ロード中はボタンを無効化
          >
            {isLoading ? (
              <Icons.spinner className="animate-spin mr-2 h-4 w-4" />
            ) : (
              "はじめる"
            )}
          </Button2>
          </button>
        </div>
      </div>

      <div id="premium" className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-bold text-1xl leading-[1.1] sm:text-3xl md:text-4xl">
          ※現在、プレミアムプランはご利用できません。
          <br />
        </h2>
      </div>
      <div className="bg-gray-200 text-gray-900 p-4 rounded opacity-50 block">
        <h2 className="font-black text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          プレミアムプラン
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          すべての機能のロックを解除します。
        </p>

        <div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px]">
          <div className="grid gap-6">
            <h3 className="text-xl font-bold sm:text-2xl">プレミアムプランに含まれるもの</h3>
            <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> メモ数無制限
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 基本機能利用可
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> 拡張機能利用可
              </li>
              <li className="flex items-center">
                <Icons.check className="mr-2 h-4 w-4" /> プレミアムサポート
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <div>
              <h4 className="text-7xl font-bold">月額490円</h4>
              <p className="text-sm font-medium text-muted-foreground">Billed Monthly</p>
            </div>
            <Link href="#premium" className={cn(buttonVariants({ size: "lg" }))}>
              現在、ご利用できません。
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4">
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:leading-7">
          <strong>
            ※プレミアムプランの解禁予定時期は未定です。
            <br />
            シンプルプランでお楽しみください。
          </strong>
        </p>
      </div>
    </section>
  );
}
