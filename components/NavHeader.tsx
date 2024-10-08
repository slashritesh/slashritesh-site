import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";

const NavHeader = () => {
  return (
    <div className="bg-transparent">
      <MaxWidthContainer className="py-7 flex justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src="/logo-slashritesh.svg"
              width={80}
              height={80}
              className=""
              alt="slash ritesh logo"
            />
          </Link>
        </div>
        <div className="hidden sm:flex gap-5">
          <Link
            href={"/blog"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-5"
            )}
          >
            Blog
          </Link>
          <Link
            href={""}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-5"
            )}
          >
            Projects
          </Link>
          <Link
            href={""}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-5"
            )}
          >
            Freelance
          </Link>
          <Link
            href={""}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "px-5"
            )}
          >
            About
          </Link>
        </div>
        <div className="">
          <Button className="hidden sm:inline bg-primary text-foreground">
            Let's Connect
          </Button>
          <div className="block sm:hidden">
            <SheetMobileMenu />
          </div>
        </div>
      </MaxWidthContainer>
    </div>
  );
};

export default NavHeader;

const SheetMobileMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col p-10 gap-5">
            <Link
              href={"/blog"}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Blog
            </Link>
            <Link
              href={""}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Projects
            </Link>
            <Link
              href={""}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Freelance
            </Link>
            <Link
              href={""}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              About
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
