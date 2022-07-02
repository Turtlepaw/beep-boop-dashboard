import { ReactNode } from "react";
import { Link } from "./Link";

function FooterItems({ children, title }: { title: string, children: ReactNode }) {
    return (
        <div className="px-10">
            <div className="text-brand poppins font-semibold">{title}</div>
            {children}
        </div>
    )
}

function FooterItem({ children, href }: { children: ReactNode, href: string }) {
    return (
        <Link href={href} className="block" textColor="text-white" underline="hover">{children}</Link>
    )
}
export function Footer() {
    return (
        <div className="py-10 flex bg-grey-extra-dark">
            <div className="float-left pl-20">
                <div className="text-brand font-extrabold text-2xl">
                    Keeping Server<br/>Management Easy
                </div>
                <div className="block pt-3 pl-2">
                    <a href="/discord">
                        <img src="/Discord.svg" className="w-5"/>
                    </a>
                </div>
            </div>
            <div className="flex float-right pr-10">
                <FooterItems title="Product">
                    <FooterItem href="/">Home</FooterItem>
                    <FooterItem href="/about">About</FooterItem>
                </FooterItems>
                <FooterItems title="Resources">
                    <FooterItem href="/support">Support</FooterItem>
                </FooterItems>
                <FooterItems title="Legal">
                    <FooterItem href="/legal/privacy">Privacy</FooterItem>
                </FooterItems>
            </div>
        </div>
    )
}