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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/icons/favicon-16x16.png"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join()} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://berente.net/" />
      <meta property="og:image" content="/img/banner.png" />
      <link rel="manifest" href="/site.webmanifest" />
      {children}
    </Head>
  );
}
