import './App.css';
import { cn } from '@/lib/utils';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button.jsx';
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet.jsx';
import {
  ArrowBigUpDash,
  CheckCheck,
  CircleArrowDown,
  GalleryHorizontalEnd,
  GalleryVerticalEnd,
  LaptopMinimal,
  LayoutDashboard,
  Menu,
  MessageCircle,
  PencilLine,
  Radio,
  Zap,
} from 'lucide-react';
import { BrowserRouter, Link } from 'react-router-dom';

import logo_inline from '/logo_inline.png';
import cube from '/cube.png';
import cmdk_bg from '/cmdk-bg.png';
import cmdk from '/cmdk.png';
import { DotPattern } from '@/components/magicui/dot-pattern.jsx';
import Reviews from '@/components/reviews.jsx';
import Meteors from '@/components/magicui/meteors.jsx';
import { useState } from 'react';
import ConnectedSocialNetworks from '@/components/connected-social-networks.jsx';
import { Confetti } from '@/components/magicui/confetti.jsx';
import DemoForm from '@/components/demo-form.jsx';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <header className="fixed w-full border-b bg-background/90 backdrop-blur-xs z-50">
        <nav className="flex justify-between items-center py-4 container">
          <Link to="#" onClick={() => document.scrollingElement.scrollIntoView({ behavior: 'smooth' })}>
            <img src={logo_inline} alt="Logo" className="h-10" />
          </Link>
          <div className="md:flex gap-8 items-center justify-center hidden">
            <Link
              to="#plan"
              className="text-foreground hover:text-primary"
              onClick={() => document.getElementById('plan').scrollIntoView({ behavior: 'smooth' })}
            >
              Planification
            </Link>
            <Link
              to="#validate"
              className="text-foreground hover:text-primary"
              onClick={() => document.getElementById('validate').scrollIntoView({ behavior: 'smooth' })}
            >
              Validation
            </Link>
            <Link
              to="#trends"
              className="text-foreground hover:text-primary"
              onClick={() => document.getElementById('trends').scrollIntoView({ behavior: 'smooth' })}
            >
              Tendances
            </Link>
            <Button
              size="sm"
              className="w-fit text-black font-medium hover:text-primary hover:bg-black"
              onClick={() => {
                Confetti({});
                document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              🚀 Demandez une démo
            </Button>
          </div>
          <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  to="#plan"
                  className="text-foreground hover:text-primary"
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('plan').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Planification
                </Link>
                <Link
                  to="#validate"
                  className="text-foreground hover:text-primary"
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('validate').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Validation
                </Link>
                <Link
                  to="#trends"
                  className="text-foreground hover:text-primary"
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('trends').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Tendances
                </Link>
                <Button
                  size="sm"
                  className="text-black font-medium hover:text-primary hover:bg-black"
                  onClick={() => {
                    Confetti({});
                    document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  🚀 Demandez une démo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <main className="container">
        <div className="relative min-h-screen flex flex-col align-middle justify-center space-y-8 py-32">
          <DotPattern
            className={cn('[mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]', 'z-0 fill-gray-300')}
            cx={1.5}
            cy={1.5}
            cr={1.5}
          />
          <div className="z-10">
            <img src={cube} alt="Cube" className="md:w-40 mx-auto w-32 animate-[wiggle_2s_ease-in-out_infinite]" />
            <h1 className="xl:text-6xl font-bold text-center md:text-5xl text-3xl">
              Libérez votre potentiel de <br />
              Community Manager
            </h1>
          </div>
          <p className="md:text-2xl max-w-[480px] mx-auto text-center z-10">
            Créez, planifiez, validez, modérez et analysez tous vos posts.
            <br />
            Soyez en veille des dernières tendances.
          </p>
          <Button
            className="w-fit align-middle mx-auto text-lg font-medium z-10 text-black hover:text-primary hover:bg-black"
            onClick={() => {
              Confetti({});
              document.getElementById('demo').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            🚀 Demandez une démo
          </Button>
          <div className="z-10 absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer">
            <CircleArrowDown
              className="h-12 w-12 animate-bounce text-gray-300"
              onClick={() => {
                Confetti({});
                document.getElementById('plan').scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        </div>
        <div className="md:space-y-16 space-y-10 py-28" id="plan">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Planifiez, simplement</h2>
          <div className="grid w-full md:grid-cols-2 gap-6 grid-cols-1">
            <div className="rounded bg-gray-100 md:col-span-2 md:aspect-video aspect-square p-10">
              <svg
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-primary fill-primary"
              >
                <path
                  d="M16.5 31.0833C24.5541 31.0833 31.0833 24.5541 31.0833 16.5C31.0833 8.44584 24.5541 1.91666 16.5 1.91666C8.44581 1.91666 1.91663 8.44584 1.91663 16.5C1.91663 24.5541 8.44581 31.0833 16.5 31.0833Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 7.75V16.5L22.3333 19.4167"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h5 className="md:text-lg font-semibold mt-3">Gérez votre planning en toute simplicité</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Programmez vos posts pour publier au bon moment <br />
                Visualisez rapidement votre calendrier <br />
                Naviguez aisément entre les posts
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10 relative overflow-hidden">
              <Meteors number={30} />
              <Zap className="text-primary fill-primary w-6 h-6 z-10" />
              <h5 className="md:text-lg font-semibold mt-3 z-10">Anticipez l’impact de vos posts</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1 z-10">
                Prévisualisez vos publications et optimisez votre stratégie de contenu en un clin d’oeil pour tous vos
                réseaux
              </p>
            </div>
            <div className="rounded bg-gray-100">
              <div className="p-10">
                <svg
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-primary"
                >
                  <path d="M24.7083 1.375H4.29167C2.68084 1.375 1.375 2.68084 1.375 4.29167V24.7083C1.375 26.3192 2.68084 27.625 4.29167 27.625H24.7083C26.3192 27.625 27.625 26.3192 27.625 24.7083V4.29167C27.625 2.68084 26.3192 1.375 24.7083 1.375Z" />
                  <path
                    d="M7.20837 13.0417L10.125 10.125L7.20837 7.20837"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.0416 15.9584H18.875"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h5 className="md:text-lg font-semibold mt-3">Faites plus, plus vite</h5>
                <p className="text-sm md:text-base max-w-[450px] mt-1">
                  Profitez d’une expérience utilisateur jamais vue et gagnez du temps grâce à des raccourcis
                </p>
              </div>
              <div className="overflow-hidden relative rounded-b">
                <img src={cmdk_bg} alt="cmdk_bg" />
                <div className="pointer-events-none absolute left-0 h-1/2 top-0 w-full bg-gradient-to-b from-gray-100 dark:from-background" />
                <img
                  src={cmdk}
                  alt="cmdk"
                  className="absolute top-1/2 left-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <GalleryHorizontalEnd className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Programmez tout</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Créez et programmez vos stories, vos carrousels, vos réels et tout type de post
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <LaptopMinimal className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Créez pour tous les réseaux</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Programmez des posts modulables d’un réseau à un autre selon le format
              </p>
            </div>
          </div>
        </div>
      </main>
      <Reviews />
      <main className="container">
        <div className="md:space-y-16 space-y-10 py-28" id="validate">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Validez, sans efforts</h2>
          <div className="grid w-full md:grid-cols-2 gap-6 grid-cols-1">
            <div className="rounded bg-gray-100 md:col-span-2 md:aspect-video aspect-square p-10">
              <PencilLine className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Simplifiez vos validations</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Faites valider vos publications en 1 clique, avec 1 lien, c’est tout.
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <CheckCheck className="text-primary w-6 h-6" strokeWidth={3} />
              <h5 className="md:text-lg font-semibold mt-3">Validation sans prérequis</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Sans créer de compte, donnez accès à vos créations en toute fluidité
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <MessageCircle className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Prenez les feedbacks</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Centralisez les retours sur vos posts et créez des discussions, sans mails
              </p>
            </div>
          </div>
        </div>
        <div className="md:space-y-16 space-y-10 py-28">
          <h2 className="text-center font-bold xl:text-4xl md:text-3xl text-xl max-w-[700px] mx-auto">
            Pensé pour fonctionner avec vos outils
          </h2>
          <div className="grid w-full md:grid-cols-2 gap-6 grid-cols-1">
            <div className="rounded bg-gray-100 p-10">
              <Radio className="text-primary w-6 h-6" strokeWidth={2.5} />
              <h5 className="md:text-lg font-semibold mt-3">Interconnecté</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Publiez sur plusieurs réseaux en même temps, automatisez le reporting et communiquez rapidement les
                performances des publications
              </p>
            </div>
            <div className="rounded bg-gray-100 p-6">
              <ConnectedSocialNetworks />
            </div>
          </div>
        </div>
        <div className="md:space-y-16 space-y-10 py-28" id="trends">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Suivez les tendances</h2>
          <div className="grid w-full md:grid-cols-3 gap-6 grid-cols-1">
            <div className="rounded bg-gray-100 md:col-span-3 md:aspect-video aspect-square p-10">
              <GalleryVerticalEnd className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Toute l'actualité au même endroit</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Suivez les tendances et trouvez vos inspirations depuis votre fil d’actualité 100% personnalisé
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <LayoutDashboard className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Personnalisez</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">Un fil d'actualité à suivre selon les réseaux</p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path
                  d="M2 9C2 9 5 2 12 2C19 2 22 9 22 9C22 9 19 16 12 16C5 16 2 9 2 9Z"
                  fill="#FBBC05"
                  stroke="#FBBC05"
                />
                <path
                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
              <h5 className="md:text-lg font-semibold mt-3">Visualisation sur-mesure</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">
                Filtrez les comptes et réseaux selon vos besoins
              </p>
            </div>
            <div className="rounded bg-gray-100 p-10">
              <ArrowBigUpDash className="text-primary fill-primary w-6 h-6" />
              <h5 className="md:text-lg font-semibold mt-3">Augmentez votre visibilité</h5>
              <p className="text-sm md:text-base max-w-[450px] mt-1">Intéragissez directement avec les publications</p>
            </div>
          </div>
        </div>
        <DemoForm />
        <h2 className="font-bold xl:text-4xl md:text-3xl text-2xl mb-4">Questions & Réponses</h2>
        <Accordion type="multiple" className="pb-20">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">
              Y a-t-il des limites au nombre de posts que je peux programmer
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg font-light">
              Non, il n'y a aucune limite au nombre de posts que vous pouvez programmer avec Upcust. Vous avez une
              limitation du nombre de réseaux sociaux que vous pouvez connecter à votre compte ainsi que d'utilisateurs.
              Nos plans sont adaptés à la taille de votre entreprise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">
              Puis-je programmer des posts pour plusieurs réseaux sociaux en même temps ?
            </AccordionTrigger>
            <AccordionContent className="text-left text-lg font-light">
              Oui, vous pouvez programmer des posts pour tous les réseaux sociaux que vous utilisez avec Upcust.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Comment puis-je collaborer sans compte ?</AccordionTrigger>
            <AccordionContent className="text-left text-lg font-light">
              Lorsque vous utilisez Upcust, vous pouvez partager un lien unique pour collaborer avec vos équipes sans
              demander la création d'un compte. Ces invitations sont protégées par un mot de passe pour garantir la
              sécurité de vos contenus. Vous pouvez révoquer l'accès à tout moment.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </BrowserRouter>
  );
}

export default App;
