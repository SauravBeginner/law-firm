import { Handshake, Users, Building2, Landmark, Shield, ScrollText, type LucideProps } from "lucide-react";
import type { PracticeArea } from "../data/practiceAreas";

const iconMap: Record<PracticeArea["icon"], typeof Handshake> = {
  handshake: Handshake,
  users: Users,
  "building-2": Building2,
  landmark: Landmark,
  shield: Shield,
  "scroll-text": ScrollText,
};

export default function PracticeIcon({ icon, ...props }: { icon: PracticeArea["icon"] } & LucideProps) {
  const Icon = iconMap[icon];
  return <Icon {...props} />;
}
