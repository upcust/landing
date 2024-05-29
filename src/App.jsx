import './App.css';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button.jsx';
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet.jsx';
import { Menu } from 'lucide-react';
import { BrowserRouter, Link } from 'react-router-dom';

import logo_inline from '/logo_inline.png';
import cube from '/cube.png';

function App() {
  return (
    <BrowserRouter>
      <header className="fixed w-full border-b bg-background/90 backdrop-blur-xs z-50">
        <nav className="flex justify-between items-center p-4 container">
          <Link to="#">
            <img src={logo_inline} alt="Logo" className="h-10" />
          </Link>
          <div className="md:flex gap-8 items-center justify-center hidden">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Planifiez
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Validez
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              Suivez
            </Link>
            <Button className="w-fit text-black font-medium">Je m’inscris</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Planifiez
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Validez
                </Link>
                <Link to="#" className="text-muted-foreground hover:text-foreground">
                  Suivez
                </Link>
                <Button className="text-black font-medium">Je m’inscris</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
      <main className="container">
        <div className="h-screen flex flex-col align-middle justify-center space-y-8">
          <div>
            <img src={cube} alt="Cube" className="md:w-40 mx-auto w-32 animate-[wiggle_2s_ease-in-out_infinite]" />
            <h1 className="xl:text-6xl font-bold text-center md:text-5xl text-3xl">
              Libérez votre potentiel de <br />
              Community Manager
            </h1>
          </div>
          <p className="md:text-2xl max-w-[480px] mx-auto text-center ">
            Créez, planifiez, validez, modérez et analysez tous vos posts.
            <br />
            Soyez en veille des dernières tendances.
          </p>
          <Button className="w-fit align-middle mx-auto text-lg font-medium text-black">Je m’inscris</Button>
        </div>
        <div className="md:space-y-16 space-y-10 py-28">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Planifiez, simplement.</h2>
          <div className="grid w-full md:grid-cols-2 gap-6 grid-cols-1">
            <div className="rounde bg-gray-100 md:col-span-2 md:aspect-video aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
          </div>
        </div>
        <div className="md:space-y-16 space-y-10 py-28">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Validez, sans efforts</h2>
          <div className="grid w-full md:grid-cols-2 gap-6 grid-cols-1">
            <div className="rounde bg-gray-100 md:col-span-2 md:aspect-video aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
            <div className="rounded bg-gray-100 aspect-square" />
          </div>
        </div>
        <div className="md:space-y-16 space-y-10 py-28">
          <h2 className="text-center font-bold xl:text-5xl md:text-4xl text-2xl">Centralisez votre veille</h2>
          <div className="grid w-full md:grid-cols-3 gap-6 grid-cols-1">
            <div className="rounde bg-gray-100 md:col-span-3 md:aspect-video aspect-square" />
            <div className="rounded bg-gray-100 aspect-video" />
            <div className="rounded bg-gray-100 aspect-video" />
            <div className="rounded bg-gray-100 aspect-video" />
          </div>
        </div>
        <Accordion type="single" collapsible className="pb-20">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Première question</AccordionTrigger>
            <AccordionContent className="text-left text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare luctus nunc, a porta risus dictum
              vitae. Aenean vel nisl sed sapien convallis varius. Integer tristique convallis arcu, a scelerisque quam
              porta at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Deuxième question</AccordionTrigger>
            <AccordionContent className="text-left text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare luctus nunc, a porta risus dictum
              vitae. Aenean vel nisl sed sapien convallis varius. Integer tristique convallis arcu, a scelerisque quam
              porta at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </BrowserRouter>
  );
}

export default App;
