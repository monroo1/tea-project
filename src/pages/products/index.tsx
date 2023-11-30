import { ProductsPage } from "@/page-flat/ProductsPage";
import Head from "next/head";

export default function Products() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Каталог" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ProductsPage />
        </>
    );
}
