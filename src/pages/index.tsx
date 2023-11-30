import { MainPage } from "@/page-flat/MainPage";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Главная страница, main page"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainPage />
        </>
    );
}
