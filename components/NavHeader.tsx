import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/static/logo-slashritesh.svg";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const NavHeader = () => {
  return (
    <div className="bg-transparent backdrop:blur-xl border-slate-600">
    <MaxWidthContainer className="py-8 flex justify-between">
      <div>
        <Link href={"/"}>
          <Image src={logo} width={90} height={90} alt="slash ritesh logo" />
        </Link>
      </div>
      <div className="hidden sm:flex gap-5">
        <Link href={"/blog"} className={cn(buttonVariants({variant:"ghost"}))}>Blog</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>Projects</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>Freelance</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>About</Link>
      </div>
      <div className="">
        <Button className="hidden sm:inline bg-primary text-foreground">Let's Connect</Button>
        <div className="block sm:hidden">
        <SheetMobileMenu />
        </div>
      </div>
    </MaxWidthContainer>
    </div>
  );
};

export default NavHeader;


const SheetMobileMenu = ()=>{
  return (
    <>
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon />
      </SheetTrigger>
      <SheetContent>
      <div className="flex flex-col p-10 gap-5">
        <Link href={"/blog"} className={cn(buttonVariants({variant:"ghost"}))}>Blog</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>Projects</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>Freelance</Link>
        <Link href={""} className={cn(buttonVariants({variant:"ghost"}))}>About</Link>
      </div>
      </SheetContent>
    </Sheet>
    </>
  )
}
