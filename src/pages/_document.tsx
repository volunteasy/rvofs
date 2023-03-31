import { Html, Head, Main, NextScript } from "next/document";
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body id="body" className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
