import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Grid from "@/ui/Grid";
import Button from "@/ui/Button";
import ButtonText from "@/ui/ButtonText";

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
          content="Conecte-se como voluntário ou beneficiário e transforme vidas com
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
            background: "rgba(255, 255, 255, 0.7)",
            boxShadow:
              "0px 0px 0px 1px rgba(53, 72, 91, 0.14), 0px 3px 2px rgba(0, 0, 0, 0.04), 0px 7px 7px rgba(0, 0, 0, 0.03);",
          }}
          className="fixed top-0 left-0 right-0 backdrop-blur-md gap-4

          "
        >
          <div className="flex items-center justify-between p-2 max-w-screen-xl m-auto">
            <img src="/volunteasyBareIcon.svg" />

            <div className="hidden md:flex gap-4">
              <Link href="#" className="truncate">
                Como funciona?
              </Link>
              <Link href="#" className="truncate">
                Quem somos nós?
              </Link>
              <Link href="#" className="truncate">
                Fazer uma doação
              </Link>
            </div>
            <Link href="#">Entrar</Link>
          </div>
        </nav>
        <Grid>
          <div className="m-auto flex flex-col my-24 pt-12 lg:my-48 justify-center items-center ">
            <img src="/volunteasyRoundedIcon.svg" />

            <h1 className="max-w-3xl text-center py-3 lg:text-[40px]">
              <span className="text-primary">VoluntEasy</span>: Conectando
              solidariedade, facilitando esperança.
            </h1>
            <p className="max-w-4xl text-center">
              Conecte-se como voluntário ou beneficiário e transforme vidas com
              apenas alguns cliques. Juntos, tecemos a rede de esperança e amor
              que nosso mundo precisa. Experimente a mudança, experimente o
              Volunteasy!
            </p>

            <div className="flex gap-4 mt-4">
              <ButtonText>Download no android</ButtonText>
              <Button>Download no IOS</Button>
            </div>
          </div>
        </Grid>
        <div className="bg-[#F5F5F7] py-12 md:py-20 lg:py-32">
          <Grid>
            <div className="bg-[#fff] p-6 rounded-2xl flex flex-col md:flex-row gap-4 justify-between overflow-hidden max-h-[75vh]">
              <aside className="md:max-w-[30%]">
                <h1 className="font-semibold text-secondary lg:text-[48px]  md:text-[40px] ">
                  Distribuições
                </h1>
                <h2 className="font-semibold lg:text-[40px] md:text-[36px] mt-4">
                  Voluntários podem criar distribuições e organizar os
                  beneficiários em uma lista de entrega
                </h2>
              </aside>
              <div className="md:max-w-[40%]">
                <img src="/img/distribution.png" />
              </div>
            </div>
          </Grid>

          <Grid>
            <div className="flex gap-5 mt-5 min-h-[85vh] flex-col md:flex-row">
              <div className="bg-secondary p-12 rounded-2xl md:w-6/12 gap-12 flex flex-col justify-between  min-h-[60vh]">
                <img src="/packageIcon.svg" className="ml-auto w-8/12 " />

                <h1 className="sm:text-[48px] md:text-[64px] text-white p-4">
                  Mais de 523 mil itens entregues
                </h1>
              </div>
              <div className="bg-[#fff] p-6 rounded-2xl md:w-6/12 max-h-[90vh] flex flex-col pb-0">
                <aside>
                  <h1 className="font-semibold text-secondary lg:text-[48px]  md:text-[40px] ">
                    Valide o QR Code
                  </h1>
                  <h3 className="text-xl sm:text-2xl">
                    Os voluntários podem validar o QR Code dos beneficiários e
                    tornar essa troca mais segura
                  </h3>
                </aside>

                <div className="overflow-hidden mt-8">
                  <img
                    className="overflow-hidden w-[70%] m-auto"
                    src="/img/qrcodeScreen.png"
                  />
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </main>
    </>
  );
}
