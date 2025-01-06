import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

export async function getCurrentUser() {
    const session = await getServerSession(authOptions);


    //　authOptionsを引数にしてgetServerSessionを呼び出し、セッション情報を取得
    //　ここが抜けていてuserごとのpost投稿取得出来ないバグ発生したが修正完了


    return session?.user ;
    }

