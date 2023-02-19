import React from "react";
import { useRouter } from "next/router";
import { Button, ButtonProps } from "@chakra-ui/react";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  const router = useRouter();
  return (
    <Button onClick={() => router.push(href)} {...props}>
      {children}
    </Button>
  );
}
