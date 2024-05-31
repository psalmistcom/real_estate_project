import Button from "@/Components/Button";
import ButtonGradient from "@/Components/svg/ButtonGradient";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="Home page" />
            <h1 className="text-3xl font-bold underline"> Hello World!</h1>
            <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
                <Button className="mt-10" href="#login">
                    Something
                </Button>
            </div>
            <ButtonGradient />
        </>
    );
}
