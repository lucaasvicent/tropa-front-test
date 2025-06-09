'use client';

import { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const isMobile = useBreakpoint();

  function useBreakpoint() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
  }

  if (isMobile) {
    return <>
    {children}
    </>;
  }

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "200px",
          minWidth: "200px",
          height: "100vh",
          margin: "0",
          padding: "0",
        }}
      >
        <TabNavigation />
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          height: "100vh",
          margin: "0",
          padding: "0",
        }}
      >
        {children}
      </div>
    </div>
  );
}
