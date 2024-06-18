import Marquee from '@/components/magicui/marquee.jsx';
import { cn } from '@/lib/utils.js';

const reviews = [
  {
    name: 'Léa M',
    username: '@leam',
    body: 'Accédez à une bibliothèque de ressources précieuses : Tenez-vous informé des dernières pratiques et stratégies en matière de marketing des réseaux sociaux.',
    img: 'https://avatar.vercel.sh/leam',
  },
  {
    name: 'Alexandre D',
    username: '@alexandred',
    body: 'Soyez alerté des menaces et opportunités : Recevez des notifications en temps réel sur les événements importants qui pourraient affecter votre marque.',
    img: 'https://avatar.vercel.sh/alexandred',
  },
  {
    name: 'Marie L',
    username: '@mariel',
    body: 'Reporting automatisé et personnalisable : Gagnez du temps et créez des rapports personnalisés en quelques minutes.',
    img: 'https://avatar.vercel.sh/mariel',
  },
  {
    name: 'Julien B',
    username: '@julienb',
    body: 'Un tableau de bord centralisé : Rassemblez toutes vos données de réseaux sociaux en un seul endroit pour une analyse simplifiée.',
    img: 'https://avatar.vercel.sh/julienb',
  },
  {
    name: 'Camille C',
    username: '@camillec',
    body: 'Des données complètes et actionnables : Obtenez des insights précieux sur vos performances et prenez des décisions éclairées pour optimiser vos résultats.',
    img: 'https://avatar.vercel.sh/camillec',
  },
  {
    name: 'Lucas H',
    username: '@lucash',
    body: 'Validation des publications simplifiée : Dites adieu aux allers-retours fastidieux ! Validez les publications en un clic et assurez-vous que votre message est parfait avant de le diffuser.',
    img: 'https://avatar.vercel.sh/lucash',
  },
  {
    name: 'Chloé G',
    username: '@chloeg',
    body: "Un calendrier éditorial clair et précis : Visualisez votre stratégie de contenu en un coup d'œil et gagnez du temps en planifiant vos publications à l'avance.",
    img: 'https://avatar.vercel.sh/chloeg',
  },
  {
    name: 'Théo L',
    username: '@theol',
    body: 'Fini les heures perdues à programmer des posts ! Planifiez vos publications sur tous les réseaux sociaux en quelques clics, sur Instagram et LinkedIn.',
    img: 'https://avatar.vercel.sh/theol',
  },
  {
    name: 'Emma P',
    username: '@emmap',
    body: 'Restez à la pointe des tendances : Suivez les tendances des réseaux sociaux en temps réel et ne manquez jamais une opportunité.',
    img: 'https://avatar.vercel.sh/emmap',
  },
  {
    name: 'Maxime R',
    username: '@maximer',
    body: 'Commentaires et discussions en contexte : Communiquez efficacement avec votre équipe directement sur les publications.',
    img: 'https://avatar.vercel.sh/maximer',
  },
  {
    name: 'Lola S',
    username: '@lolas',
    body: "Approbation des publications en un clic : Simplifiez le processus d'approbation et assurez-vous que tout le monde est sur la même longueur d'onde.",
    img: 'https://avatar.vercel.sh/lolas',
  },
  {
    name: 'Hugo T',
    username: '@hugot',
    body: 'Travaillez en équipe en toute simplicité : Collaborez facilement avec vos collègues et clients sur la création, la validation et la publication de contenu.',
    img: 'https://avatar.vercel.sh/hugot',
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Reviews() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-44">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:40s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
