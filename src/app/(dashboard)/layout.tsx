import Image from "next/image";
import Link from "next/link";
import Menu from '../../components/Menu'
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

        <div className="flex ">
            {/* Left */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] shadow-lg p-4">
              <Link href="/" className="flex lg:justify-start justify-center gap-2" >
                <Image src='/logo.png' width={32} height={32} alt='' />
                <span className="hidden lg:block">BABAschool</span>
              </Link>
              <Menu />
            </div>
            {/* Right */}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA]"> 
              <Navbar />
              {children}
            </div>
        </div>

  );
}