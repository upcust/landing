import { Input } from '@/components/ui/input.jsx';
import { Button } from '@/components/ui/button.jsx';
import { PopupModal } from 'react-calendly';
import { useCallback, useEffect, useState } from 'react';
import { triggerConfettiSideCannons } from '@/components/confetti-side-cannons.jsx';

export default function DemoForm() {
  const [calendlyModalOpen, setCalendlyModalOpen] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    window.addEventListener('blur', sendLeadInfo);
    window.addEventListener('beforeunload', sendLeadInfo);

    return () => {
      window.removeEventListener('blur', sendLeadInfo);
      window.removeEventListener('beforeunload', sendLeadInfo);
    };
  }, [email, name]);

  const sendLeadInfo = () => {
    console.log('Sending lead info', email, name);
    if (!email || !name || !email.match(new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'))) return;
    fetch('https://web-api.upcust.com/lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log('Lead info sent');
      }
    });
  };

  useEffect(() => {
    const onDown = (e) => {
      if (e.key === 'r') {
        triggerConfettiSideCannons();
        setCalendlyModalOpen(true);
      }
    };

    window.addEventListener('keydown', onDown);

    return () => {
      window.removeEventListener('keydown', onDown);
    };
  }, []);

  return (
    <div className="min-h-[900px] h-screen flex items-center justify-center pb-10" id="demo">
      <div className="h-3/5 bg-[#2F2C2C] w-full p-10 rounded-xl my-auto text-white flex flex-col justify-between items-start relative">
        <img src="/demo-bg.png" alt="Demo" className="absolute bottom-0 left-0 w-full" />
        <div className="max-w-[500px] m-auto flex flex-col items-center text-center relative">
          <span className="bg-primary rounded-full px-5 py-1 text-black absolute -top-10 text-sm font-medium">
            Démo de 30 minutes gratuite
          </span>
          <h2 className="font-bold xl:text-5xl md:text-4xl text-3xl mb-1 mt-10">
            Laissez nous vous <br />
            surprendre
          </h2>
          <p className="text-lg font-light mb-6">
            Découvrez comment Upcust peut vous aider à gérer vos réseaux sociaux en toute simplicité.
          </p>
          <div className="flex gap-4">
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
              onBlur={sendLeadInfo}
            />
          </div>
          <Button
            onClick={() => {
              triggerConfettiSideCannons();
              setCalendlyModalOpen(true);
            }}
            className="text-black mt-4"
          >
            Je réserve{' '}
            <kbd className="ml-2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              R
            </kbd>
          </Button>
        </div>
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
