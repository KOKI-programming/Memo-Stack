import { SubscriptionPlan } from "types"

export const freePlan: SubscriptionPlan = {
  name: "無料",
  description:
    "プレミアムプランの解禁予定は未定です。",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "PROプランは投稿数が無制限です。",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}