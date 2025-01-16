"use client";


import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useState ,useEffect } from "react";
import { Icon } from "@/components/icon"; // 必要に応じてIconをインポート
import Button1 from "@/components/ui/Button circle";
import gsap from "gsap";
import SplitTextJS from "split-text-js";


export default function IndexPage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper p");
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.06,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.06,
        },
        "<1"
      );
    });
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      gsap.to(".circle", {
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
      });
      gsap.set(".cursor", {
        x: mouseX,
        y: mouseY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);





  const handleStartClick = async () => {
    setIsLoading(true);
    try {
      // 実際の処理があればここに記述（例：APIコール）
      await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5秒の遅延をシミュレート
      window.location.href = "/login"; // ログインページへのリダイレクト
    } catch (error) {
      console.error("Error during start action:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12 mx-4 md:mx-10 lg:mx-20 ">
        <div className="container mx-auto text-center flex flex-col items-center gap-4 max-w-[64rem]  overflow-hidden">
          {/* <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
          >
            Xをフォローする
          </Link> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.906 17.505L5.337 3.718a2 2 0 0 1 2.317-1.623L19.472 4.18a2 2 0 0 1 1.622 2.317l-2.431 13.787a2 2 0 0 1-2.317 1.623L4.528 19.822a2 2 0 0 1-1.622-2.317Z"/><path stroke-linecap="round" d="m8.929 6.382l7.879 1.389m-8.574 2.55l7.879 1.39M7.54 14.26l4.924.869"/></g></svg>
          <div className="container">
          <div className="cursor"></div>

     <section className="circles">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl ">
            <div className="slide-in-up content ">
            Memo Stack
            </div>
          </h1>
      </section>
          </div>
          <p className="text-muted-foreground sm:text-xl md:text-2xl lg:text-3xl leading-normal max-w-[52rem] slide-in-up">
            このアプリケーションで、ユーザーは自由にメモを保存する事が出来ます
          </p>
          <div className="space-x-4  flex-col slide-in-up">
            <button>
              <Button1
              onClick={handleStartClick}
              disabled={isLoading} // ローディング中はボタンを無効化
            >
              {isLoading ? (
                <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
              ) : null}
              {isLoading ? "" : "はじめる"}
              </Button1>
            </button>
            {/* <button>
            <Button1
              href={siteConfig.links.github}
            >
              GitHub
            </Button1>
            </button> */}
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container py-8 md:py-12 lg:py-24 bg-slate-50 space-y-6"
      >
        <div className="text-center space-y-20 max-w-[58rem] mx-auto">
          <div>
          <h2 className="my-7 font-extrabold text-3xl md:text-6xl text-wrapper  ">
            <p>サービスの特徴</p>
            <p>メモ数無制限</p>
            <p>完全無料</p>
            <p>タスク管理</p>
            <p>コード保存可</p>
            <p>簡単ログイン</p>
            <p>直感操作</p>
          </h2>
          </div>
          <div className="mt-8">
          <p className="text-muted-foreground sm:text-lg sm:leading-7 ">
          アイデアやタスクの管理がもっと簡単に、効率的になります。 <br />
          マークダウン形式で直感的に記述できるので、整理整頓もスムーズに。 <br />
          あなたの創造力や計画力を最大限に引き出します！
          </p>
          </div>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[64rem]">
          <div className="bg-background border p-2 rounded-lg  block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61l-11.47 12.47l25.32 41.61l18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136C62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54l11.38-12.38l-25.33-41.61l-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">メモ数無制限</h3>
                <p className="text-sm text-muted-foreground">
                  ユーザーはメモを無制限で保存することができます。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM10.5 16a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"/><path fill="currentColor" d="M17.526 5.116L14.347.659L2.658 9.997L2.01 9.99V10H1.5v12h21V10h-.962l-1.914-5.599l-2.098.715ZM19.425 10H9.397l7.469-2.546l1.522-.487L19.425 10ZM15.55 5.79L7.84 8.418l6.106-4.878l1.604 2.25ZM3.5 18.169v-4.34A3.008 3.008 0 0 0 5.33 12h13.34a3.009 3.009 0 0 0 1.83 1.83v4.34A3.009 3.009 0 0 0 18.67 20H5.332A3.01 3.01 0 0 0 3.5 18.169Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">完全無料</h3>
                <p className="text-sm text-muted-foreground">
                  ユーザーは無償でこのサービスを使用することができます。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M139.61 35.5a12 12 0 0 0-17 0L58.93 98.81l-22.7-22.12a12 12 0 0 0-17 0L3.53 92.41a12 12 0 0 0 0 17l47.59 47.4a12.78 12.78 0 0 0 17.61 0l15.59-15.62L156.52 69a12.09 12.09 0 0 0 .09-17zm0 159.19a12 12 0 0 0-17 0l-63.68 63.72l-22.7-22.1a12 12 0 0 0-17 0L3.53 252a12 12 0 0 0 0 17L51 316.5a12.77 12.77 0 0 0 17.6 0l15.7-15.69l72.2-72.22a12 12 0 0 0 .09-16.9zM64 368c-26.49 0-48.59 21.5-48.59 48S37.53 464 64 464a48 48 0 0 0 0-96zm432 16H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H208a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">タスク管理</h3>
                <p className="text-sm text-muted-foreground">
                  ユーザーは日々のタスク管理がさらに簡単に可能になります。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 20 16"><path fill="currentColor" d="M12.736.064c.52.2.787.805.598 1.353L8.546 15.305c-.19.548-.763.83-1.282.631c-.52-.2-.787-.805-.598-1.353L11.454.695c.19-.548.763-.83 1.282-.631ZM2.414 8.256L5.95 11.99c.39.412.39 1.08 0 1.492a.963.963 0 0 1-1.414 0L.293 9.003a1.098 1.098 0 0 1 0-1.493l4.243-4.48a.963.963 0 0 1 1.414 0a1.1 1.1 0 0 1 0 1.494L2.414 8.256Zm15.172 0L14.05 4.524a1.098 1.098 0 0 1 0-1.493a.963.963 0 0 1 1.414 0l4.243 4.479c.39.412.39 1.08 0 1.493l-4.243 4.478a.963.963 0 0 1-1.414 0a1.098 1.098 0 0 1 0-1.492l3.536-3.733Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">コード保存可</h3>
                <p className="text-sm text-muted-foreground">
                  開発者の方はプログラムコードを保存することができます。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21h-7Zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5l-5 5Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">簡単ログイン</h3>
                <p className="text-sm text-muted-foreground">
                  Google , LINE , Github <br />3つのアカウントのいずれかから簡単にログインが可能です。
                </p>
              </div>
            </div>
          </div>
          <div className="bg-background border p-2 rounded-lg block">
            <div className="flex flex-col justify-between p-6 h-[180px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M9.5 2a2.5 2.5 0 0 1 2.495 2.336L12 4.5v4.605l5.442.605a4 4 0 0 1 3.553 3.772l.005.203V14a8 8 0 0 1-7.75 7.996L13 22h-.674a8 8 0 0 1-7.024-4.171l-.131-.251l-2.842-5.684c-.36-.72-.093-1.683.747-2.028c1.043-.427 2.034-.507 3.055.012c.222.113.44.252.654.414l.215.17V4.5A2.5 2.5 0 0 1 9.5 2Zm0 2a.5.5 0 0 0-.492.41L9 4.5V13a1 1 0 0 1-1.78.625l-.332-.407l-.303-.354c-.58-.657-1.001-1.02-1.36-1.203a1.192 1.192 0 0 0-.694-.137l-.141.02l2.57 5.14a6 6 0 0 0 5.123 3.311l.243.005H13a6 6 0 0 0 5.996-5.775L19 14v-.315a2 2 0 0 0-1.621-1.964l-.158-.024l-5.442-.604a2 2 0 0 1-1.773-1.829L10 9.105V4.5a.5.5 0 0 0-.5-.5ZM4 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1Zm12-1a1 1 0 0 1 .117 1.993L16 7h-1a1 1 0 0 1-.117-1.993L15 5h1ZM4.707 1.293l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 1.414-1.414Zm11 0a1 1 0 0 1 0 1.414l-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0Z"/></g></svg>
              <div className="space-y-2">
                <h3 className="font-bold">直感操作</h3>
                <p className="text-sm text-muted-foreground">
                マークダウン形式で記述するため直感的な操作が可能です。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto md:max-w-[58rem] text-center">
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
          Memo Stackではログインすると、メモを保存出来るようになります。
          </p>
        </div>
      </section>

      <section id="contact" className="container py-8 md:py-12 lg:py-24 block">
        <div className="max-w-[58rem] mx-auto text-center flex flex-col gap-4">
          <h2 className="font-extrabold text-3xl md:text-6xl">Contact Me</h2>
          <p className="text-muted-foreground sm:text-lg sm:leading-7">
            もしもwebサービスが気に入った場合は下記XからDMでご連絡ください。
            <br />
            お仕事のご連絡をお待ちしております。
          </p>
          <Link
            href={siteConfig.links.x}
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            お仕事はXまで
          </Link>
        </div>
      </section>
    </>
  );
}
