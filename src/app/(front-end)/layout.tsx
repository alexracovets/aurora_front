
import { DefaultTemplate } from "@templates";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}
