import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HomePage } from "@/components/home-page";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </>
  );
}
