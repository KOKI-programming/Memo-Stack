import { SubscriptionPlan } from "types"

export const freePlan: SubscriptionPlan = {
  name: "無料",
  description:
    "無料プランでは投稿数が 3 件に制限されています。PROプランにアップグレードすると投稿数が無制限になります。",
  stripePriceId: "",
}

export const proPlan: SubscriptionPlan = {
  name: "PRO",
  description: "PROプランは投稿数が無制限です。",
  stripePriceId: process.env.STRIPE_PRO_MONTHLY_PLAN_ID || "",
}