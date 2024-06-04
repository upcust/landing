import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { PopupModal } from 'react-calendly';
import { useState } from 'react';
import { triggerConfettiSideCannons } from '@/components/confetti-side-cannons.jsx';

export default function DemoForm() {
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="min-h-[600px] h-screen flex items-center justify-center pb-10" id="demo">
      <div className="h-3/5 bg-[#2F2C2C] w-full p-10 rounded my-auto text-white flex flex-col justify-between items-start">
        <div className="max-w-[500px]">
          <h2 className="font-bold xl:text-4xl md:text-3xl text-2xl mb-1">Demander une démo</h2>
          <p className="text-lg font-light mb-6">
            Découvrez comment Upcust peut vous aider à gérer vos réseaux sociaux en toute simplicité.
          </p>
          <Input
            placeholder="Votre nom"
            className="w-full h-10 mb-4 text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Votre email"
            className="w-full h-10 mb-4 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button
          onClick={() => {
            triggerConfettiSideCannons();
            setCalendlyModalOpen(true);
          }}
          className="text-black"
        >
          Je réserve
        </Button>
        <PopupModal
          url="https://calendly.com/upcust-app/30min"
          onModalClose={() => setCalendlyModalOpen(false)}
          open={calendlyModalOpen}
          pageSettings={{
            primaryColor: '#FBBC05',
            hideGdprBanner: true,
            backgroundColor: '#2F2C2C',
            textColor: '#fff',
          }}
          prefill={{
            name: name,
            email: email,
          }}
          rootElement={document.getElementById('root')}
        />
      </div>
    </div>
  );
}
