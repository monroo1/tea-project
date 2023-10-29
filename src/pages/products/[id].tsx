import { ProductPage } from "@/page-flat/ProductPage";
import Head from "next/head";

export default function Product() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Продукт" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProductPage />
        </>
    );
}
