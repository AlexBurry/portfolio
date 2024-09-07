import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactMeForm from "./_components/contact-me-form";

export default function Home() {
  const iconHeight = 100;
  const iconWidth = 100;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-center">Alex Burry</h1>
            <p className="text-xl text-center">
              Fullstack Web Developer and Data Engineer
            </p>
            <div className="flex justify-center">
              <Button className="w-36 h-12 ">
                See my work{" "}
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            </div>
          </div>

          {/* About me */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-center">About Me</h2>
            <p className="text-center">
              I am a full-stack web developer and data engineer with a strong
              background in computer science. With a degree in the field,
              I&apos;ve built a solid foundation in software development,
              algorithms, and machine learning. Currently, I specialize in tools
              such as Next.js, TypeScript, Python, TensorFlow, and SQL, working
              on a range of projects that drive innovation and efficiency.
            </p>
            <h3 className="text-2xl font-semibold text-center">Tech Stack</h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-2 content-center space-x-2">
                <Image
                  src="/images/nextjs-icon.png"
                  width={iconWidth}
                  height={iconHeight}
                  alt="nextjs logo"
                />
                <Image
                  src="/images/react-icon.png"
                  width={iconWidth}
                  height={iconHeight}
                  alt="react logo"
                />
                <Image
                  src="/images/typescript-icon.png"
                  width={iconWidth}
                  height={iconHeight}
                  alt="typescript logo"
                />
                <Image
                  src="/images/python-icon.png"
                  width={iconWidth}
                  height={iconHeight}
                  alt="python logo"
                />
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center">Projects</h2>

            <Card className="p-2">
              <CardHeader>
                <CardTitle>Predicting Football Matches</CardTitle>
                <CardDescription>Machine Learning Project</CardDescription>
              </CardHeader>
              <CardContent className="flex space-x-10">
                <Image
                  src="/images/python-icon.png"
                  width={180}
                  height={180}
                  alt="Project Image Placeholder"
                />
                <div className="flex flex-col space-y-2">
                  <p>
                    Using machine learning to predict the outcome of football
                    matches. Built with Python, SciKit-Learn, Tensorflow,
                    Pandas, PyQt6 and Jupyter. Developed for third year
                    dissertation project at university.
                  </p>
                  <div>
                    <Link
                      href="https://github.com/AlexBurry/PredictingFootballMatches"
                      className="underline underline-offset-2 hover:underline-offset-4"
                    >
                      Source code on Github
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-2">
              <CardHeader>
                <CardTitle>MyForum</CardTitle>
                <CardDescription>
                  Simple Laravel built web forum
                </CardDescription>
              </CardHeader>
              <CardContent className="flex space-x-10">
                <div className="flex flex-col space-y-2">
                  <p>
                    Designed and developed a clean and modern website using
                    Laravel, Livewire and TailwindCSS. Used Livewire to provide
                    a modern user experience. Developed using Laravel Sail and
                    Docker
                  </p>
                  <div>
                    <Link
                      href="https://github.com/AlexBurry/MyForum"
                      className="underline underline-offset-2 hover:underline-offset-4"
                    >
                      Source code on Github
                    </Link>
                  </div>
                </div>
                <Image
                  src="/images/laravel-icon.png"
                  width={180}
                  height={180}
                  alt="Laravel Project Image Placeholder"
                />
              </CardContent>
            </Card>
          </div>

          {/* Contact me */}
          <ContactMeForm />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
