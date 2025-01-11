import { CardSkeleton } from "@/components/card-skeleton"
import DashBoardHeader from "@/components/dashboard-header";
import DashBoardShell from "@/components/dashboard.shell";

export default function DashboardSettingsLoading() {
  return (
    <DashBoardShell>
      <DashBoardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashBoardShell>
  )
}