import './App.css';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button.jsx';

function App() {
  return (
    <>
      <div className="h-screen flex flex-col align-middle justify-center space-y-8">
        <h1 className="text-6xl font-bold">
          Libérez votre potentiel de <br />
          Community Manager
        </h1>
        <p className="text-2xl font-medium max-w-[480px] mx-auto">
          Créez, planifiez, validez, modérez et analysez tous vos posts.
          <br />
          Soyez en veille des dernières tendances.
        </p>
        <Button className="w-fit align-middle mx-auto text-lg font-medium text-black">Je m’inscris</Button>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">Première question</AccordionTrigger>
          <AccordionContent className="text-left text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare luctus nunc, a porta risus dictum
            vitae. Aenean vel nisl sed sapien convallis varius. Integer tristique convallis arcu, a scelerisque quam
            porta at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
