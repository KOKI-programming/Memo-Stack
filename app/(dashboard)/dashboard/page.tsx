import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard.shell";
import PostCreateButton from "@/components/post-create-button";
import PostItem from "@/components/post-item";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  // ログインしていない場合、ログインページにリダイレクト
  if (!user) {
    redirect("/login");
  }


  const posts = await db.post.findMany({
    where: {
      authorId: user.id, // 現在のユーザーの投稿のみ取得
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
      authorId: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  // 取得した投稿データをコンソールに出力して確認
  console.log("Posts by User:", posts);

  return (
    <DashBoardShell>
      <DashBoardHeader heading="記事投稿" text="記事の作成と管理">
        <PostCreateButton />
      </DashBoardHeader>
      <div>
        {posts.length ? (
          <div className="divide-y border rounded-md">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="ml-2">投稿がありません。</div>
        )}
      </div>
    </DashBoardShell>
  );
}


