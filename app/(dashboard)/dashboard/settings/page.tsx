import { redirect } from "next/navigation"

import { authOptions } from "@/lib/auth"
import { getCurrentUser } from "@/lib/session"
import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard.shell";

import { UserNameForm } from "@/components/user-name-form"

export const metadata = {
  title: "設定",
  description: "アカウントとウェブサイトの設定を管理します。",
}

export default async function SettingsPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || "/login")
  }

  return (
    <DashBoardShell>
      <DashBoardHeader
        heading="設定"
        text="アカウントとウェブサイトの設定を管理します。"
      />
      <div className="grid gap-10">
        <UserNameForm user={{ id: user.id, name: user.name || "" }} />
      </div>
    </DashBoardShell>
  )
}