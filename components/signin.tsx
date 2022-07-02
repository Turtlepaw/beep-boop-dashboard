import { Button, useDisclosure } from "@chakra-ui/react";

export function NotLoggedIn() {
    const d = useDisclosure();
    return (
        <div className="text-center">
            <div className="medSep" />
            <div className="text-5xl font-bold">Oh snap... You're not logged in!</div>
            <div className="smallSep" />
            <p className="font-semibold text-light pb-5">It seems that you're not logged into our services! You must be logged in to access dashboard features.</p>
            <a href="/api/oauth"><Button className="mr-2">Login</Button></a>
            <a href="/"><Button variant="secondary" className="ml-2">Back Home</Button></a>
        </div>
    );
}