"use client";

import { useMDXComponent } from "next-contentlayer/hooks"
import Callout from "./callout";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // Card関連コンポーネントをインポート

const components = {
    Image,
    Callout,
    Card, // Cardコンポーネントを追加
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
};

export default function Mdx({code}:{code:string}) {
    const Component =useMDXComponent(code);


    return (
    <div className="prose lg:prose-xl max-w-full">
        <Component components={components}/>
    </div>
    );
}




