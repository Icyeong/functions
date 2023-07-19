import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { ReduxProvider } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by Chaeyeong Imm",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex">
            <Sidebar />
            <div className="w-full flex flex-col">
              {/* <Header /> */}
              <main className="p-4">{children}</main>
            </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
