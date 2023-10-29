import type { AppProps } from "next/app";
import "./styles/index.scss";
import { Header } from "@/widgets/Header/ui/Header";
import cls from "./styles/main.module.scss";
import { comfortaa } from "@/shared/fonts/comfortaa";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={comfortaa.className}>
            <Header className={cls.header} />
            <main className={cls.main}>
                <Component {...pageProps} />
            </main>
        </div>
    );
}
