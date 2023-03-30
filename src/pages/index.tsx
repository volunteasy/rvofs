import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Grid from "@/ui/Grid";
import Button from "@/ui/Button";
import ButtonText from "@/ui/ButtonText";
import { MdCropFree, MdDownloading } from "react-icons/md";
import { HiLockClosed } from "react-icons/hi";
import { IoIosExpand } from "react-icons/io";
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const darkBackground = useRef(null);

  useEffect(() => {
    gsap.to("#navBar", {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top top",
        end: "+=50",
        scrub: 1,
      },
    });
    gsap.to("#darkBackground", {
      backgroundColor: "rgba(0, 0, 0)",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top 50%",
        end: "+=300",
        scrub: 1,
      },
    });
    gsap.to("#donationBackground", {
      backgroundColor: "#151516",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top 50%",
        end: "+=300",
        scrub: 1,
      },
    });
    gsap.to("#titleDonation", {
      color: "#F5F5F7",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top 50%",
        end: "+=300",
        scrub: 1,
      },
    });
    gsap.to("#darkBackground", {
      backgroundColor: "rgba(0, 0, 0)",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top 50%",
        end: "+=300",
        scrub: 1,
      },
    });

    gsap.to("#navtext", {
      color: "#ffffff99",
      scrollTrigger: {
        trigger: "#darkBackground",
        start: "top top",
        end: "+=50",
        scrub: 1,
      },
    });
  }, []);
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
        <meta
          property="og:image"
          content="https://volunteasy.com.br/volunteasyIcon.jpg"
        />
      </Head>
      <main>
        <nav
          id="navBar"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            boxShadow:
              "0px 0px 0px 1px rgba(53, 72, 91, 0.14), 0px 3px 2px rgba(0, 0, 0, 0.04), 0px 7px 7px rgba(0, 0, 0, 0.03);",
          }}
          className="fixed top-0 left-0 right-0  gap-4
          backdrop-blur-md
          "
        >
          <div className="flex items-center justify-between p-2 max-w-screen-xl m-auto">
            <img
              alt="Ícone depcom"
              src="/volunteasyBareIcon.svg"
              className="w-[35px] md:w-[45px]"
            />

            <div className="hidden md:flex gap-4">
              <Link href="#" className="truncate" id="navtext">
                Como funciona?
              </Link>
              <Link href="#" className="truncate" id="navtext">
                Quem somos nós?
              </Link>
              <Link href="#" className="truncate" id="navtext">
                Fazer uma doação
              </Link>
            </div>
            <Link href="#" id="navtext">
              Entrar
            </Link>
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
              <ButtonText
                rightIcon={() => (
                  <MdDownloading color="white" className="fill-primary" />
                )}
              >
                Baixar no android
              </ButtonText>
              <Button
                className="bg-primary"
                rightIcon={() => (
                  <MdDownloading color="white" className="fill-white" />
                )}
              >
                Baixar no IOS
              </Button>
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

                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white md:p-4">
                  Mais de 523 mil itens entregues
                </h1>
              </div>
              <div className="bg-[#fff] p-6 rounded-2xl md:w-6/12 max-h-[90vh] flex flex-col pb-0">
                <aside>
                  <h1 className="font-semibold text-secondary lg:text-[48px]  md:text-[40px] ">
                    Valide o QR Code
                  </h1>
                  <h3 className="text-xl sm:text-2xl">
                    Validar a autênticidade de um beneficiário nunca foi tão
                    simples!
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

          <Grid>
            <div className="bg-[#fff] p-6 rounded-2xl flex flex-col gap-4 justify-between overflow-hidden max-h-[90vh] mt-5 pb-0">
              <div>
                <h1 className="font-semibold text-secondary lg:text-[48px]  md:text-[40px] ">
                  Organizações{" "}
                </h1>

                <h3 className="text-xl sm:text-2xl">
                  Beneficiários podem criar organizações
                </h3>
              </div>

              <div className="flex justify-between max-w-full items-center gap-5 pt-5 overflow-x-scroll ">
                <img
                  className="max-w-[33%] min-w-[300px]"
                  src="/img/organization1.png"
                />
                <img
                  className="max-w-[33%] min-w-[300px]"
                  src="/img/organization2.png"
                />
                <img
                  className="max-w-[33%] min-w-[300px]"
                  src="/img/organization3.png"
                />
              </div>
            </div>
          </Grid>
        </div>

        <div
          id="darkBackground"
          ref={darkBackground}
          className="backgroundDark bg-[#F5F5F7] py-12 md:py-20 lg:py-32"
        >
          <Grid>
            <h1
              className="sm:text-[48px] md:text-[64px] text-black p-4 text-center"
              id="titleDonation"
            >
              Doações movem o VoluntEasy. Unidos, transformamos realidades!
            </h1>

            <div
              id="donationBackground"
              className="mt-5 bg-[#fff] p-6 rounded-2xl flex flex-col"
            >
              <h1 className="text-black" id="titleDonation">
                Por que doar?
              </h1>
              <section className="flex flex-col gap-8 md:max-w-[80%] mt-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                  <img src="/freeIcon.svg" className="w-[43px] min-w-[43px]" />

                  <aside>
                    <h3 className="text-slate-50">
                      Serviço <span className="text-blue">gratuito</span> para
                      todos
                    </h3>
                    <p className="text-[#86868B]">
                      O VoluntEasy é gratuito para todos, conectando
                      organizações, voluntários e beneficiários. As doações
                      ajudam a manter nosso aplicativo acessível, sem custos
                      para os usuários, garantindo a inclusão de todos.
                    </p>
                  </aside>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                  <img src="/lockIcon.svg" className="w-[43px] min-w-[43px]" />

                  {/* <HiLockClosed size={120} color="#007AFF" /> */}
                  <aside>
                    <h3 className="text-slate-50">
                      <span className="text-blue">Segurança</span> e{" "}
                      <span className="text-blue">qualidade </span>
                      garatidas
                    </h3>
                    <p className="text-[#86868B]">
                      As doações asseguram servidores confiáveis e eficientes,
                      proporcionando um serviço de qualidade e protegendo os
                      dados dos usuários. O dinheiro arrecadado será usado
                      exclusivamente para manter os servidores, não para pagar
                      desenvolvedores.
                    </p>
                  </aside>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
                  <img
                    src="/expandIcon.svg"
                    className="w-[43px] min-w-[43px]"
                  />
                  {/* <IoIosExpand size={120} color="#007AFF" /> */}
                  <aside>
                    <h3 className="text-slate-50">
                      <span className="text-blue">Expansão</span> e
                      aprimoramento contínuo
                    </h3>
                    <p className="text-[#86868B]">
                      Com o apoio financeiro, podemos investir na expansão e
                      melhoria do VoluntEasy, alcançando mais pessoas e
                      comunidades, ampliando o impacto da solidariedade e
                      transformando ainda mais vidas.
                    </p>
                  </aside>
                </div>
              </section>
              <Button className="bg-blue w-[300px] max-w-[300px] mx-auto mt-[50px] ">
                Fazer uma doação
              </Button>
            </div>
          </Grid>
        </div>
      </main>
    </>
  );
}
