import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Grid from "@/ui/Grid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>
          VoluntEasy: Conectando solidariedade, facilitando esperança.
        </title>
        <meta
          name="description"
          content="  Conecte-se como voluntário ou beneficiário e transforme vidas com
              apenas alguns cliques. Juntos, tecemos a rede de esperança e amor
              que nosso mundo precisa. Experimente a mudança, experimente o
              Volunteasy!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/volunteasyRoundedIcon.svg" />
      </Head>
      <main>
        <nav
          style={{
            background: "rgba(255, 255, 255, 0.002)",
            boxShadow:
              "0px 0px 0px 1px rgba(53, 72, 91, 0.14), 0px 3px 2px rgba(0, 0, 0, 0.04), 0px 7px 7px rgba(0, 0, 0, 0.03);",
          }}
          className="fixed top-0 left-0 right-0"
        >
          <div className="flex items-center justify-between p-2 max-w-screen-xl m-auto">
            <img src="/volunteasyBareIcon.svg" />

            <div className="flex gap-2">
              <Link href="#">Como funciona?</Link>
              <Link href="#">Quem somos nós?</Link>
              <Link href="#">Fazer uma doação</Link>
            </div>
            <Link href="#">Entrar</Link>
          </div>
        </nav>
        <Grid>
          <div className="m-auto flex flex-col my-64 justify-center items-center ">
            <img src="/volunteasyRoundedIcon.svg" />

            <h1 className="max-w-3xl text-center py-3">
              <span className="text-primary">VoluntEasy</span>: Conectando
              solidariedade, facilitando esperança.
            </h1>
            <p className="max-w-5xl text-center">
              Conecte-se como voluntário ou beneficiário e transforme vidas com
              apenas alguns cliques. Juntos, tecemos a rede de esperança e amor
              que nosso mundo precisa. Experimente a mudança, experimente o
              Volunteasy!
            </p>
          </div>
        </Grid>
        <div className="bg-[#F5F5F7]">
          <Grid>
            <div>
              <h2 className="text-center">Distribuições</h2>
            </div>
          </Grid>
        </div>
      </main>
    </>
  );
}
