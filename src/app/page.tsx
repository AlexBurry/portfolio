import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-center">Alex Burry</h1>
            <p className="text-xl text-center">
              Fullstack Web Developer and Data Engineer
            </p>
            <div className="flex justify-center">
              <Button className="w-36 h-12 ">
                See my work <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-center">About Me</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-2 content-center space-x-2">
                <Image
                  src="/images/nextjs-icon.png"
                  width={120}
                  height={120}
                  alt="nextjs logo"
                />
                <Image
                  src="/images/react-icon.png"
                  width={120}
                  height={120}
                  alt="react logo"
                />
                <Image
                  src="/images/typescript-icon.png"
                  width={120}
                  height={120}
                  alt="typescript logo"
                />
                <Image
                  src="/images/python-icon.png"
                  width={120}
                  height={120}
                  alt="python logo"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
