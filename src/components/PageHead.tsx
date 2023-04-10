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
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords?.join()} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {children}
    </Head>
  );
}
