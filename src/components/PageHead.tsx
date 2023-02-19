import Head from "next/head";
import { PropsWithChildren } from "react";

export interface PageHeadProps {
  title: string;
  description?: string;
  keywords?: string[];
}

export function PageHead({
  title,
  children,
  keywords,
  description,
}: PageHeadProps & PropsWithChildren) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join()} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://berente.net/img/banner.png" />

      {children}
    </Head>
  );
}
