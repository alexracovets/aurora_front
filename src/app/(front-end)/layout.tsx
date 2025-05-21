
import { DefaultTemplate } from "@templates";
import { JustChildrenType } from "@types";

export default function RootLayout({ children }: JustChildrenType) {
  return <DefaultTemplate>{children}</DefaultTemplate>;
}
