// Layout for profile and theme settings

import SideNavigation from "@/app/ui/Setting/SideNavigation";

export const metadata = {
  title: "Settings",
  description: "Setting pages",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <SideNavigation />
          <main className="flex-1 min-h-screen">{children}</main>
        </div>
      </body>
    </html>
  );
}
