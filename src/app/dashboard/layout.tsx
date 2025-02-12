export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <div>
            DaSHBOARD
            <div className="flex w-[1/3] bg-red-300">

            </div>
            <div className="right">

                {children}
            </div>
        </div>
    </html>
  );
}