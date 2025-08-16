import { Camera, Video, Dumbbell, Upload, MessageSquareText } from "lucide-react";

interface TimelineStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

{/* Traducili in italiano */}
const timelineSteps: TimelineStep[] = [
  {
    id: 1,
    title: "Foto iniziale & definizione degli obiettivi",
    description: "Scatta delle foto iniziali e condividi i tuoi obiettivi di fitness con me. Questo mi aiuta a capire il tuo punto di partenza e cosa vuoi raggiungere.",
    icon: <Camera className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Video di Benvenuto Personalizzato",
    description: "Ricevi un video personalizzato da parte mia che spiega il tuo percorso, cosa aspettarti e come lavoreremo insieme per raggiungere i tuoi obiettivi.",
    icon: <Video className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Piano di Allenamento Personalizzato",
    description: "Ricevi il tuo piano di allenamento personalizzato con link ai video di YouTube per ogni esercizio, assicurando una forma e una tecnica corrette.",
    icon: <Dumbbell className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Carica Video di Allenamento",
    description: "Ogni poche settimane, carica su YouTube dei tuoi video mentre esegui gli esercizi in modo che io possa analizzare la tua forma e i tuoi progressi.",
    icon: <Upload className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Feedback Video e Revisione",
    description: "Ricevi dei feedback video dettagliati che correggono la tua forma e aggiustamenti al tuo piano basati sui tuoi progressi e prestazioni.",
    icon: <MessageSquareText className="h-6 w-6" />
  }
];

const Timeline = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Come Lavoro
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Il mio approccio personalizzato al coaching online ti offre un'esperienza unica e coinvolgente.
          Con un processo in 5 fasi, ti guiderò passo dopo passo verso i tuoi obiettivi di fitness.
          Dalla valutazione iniziale alla revisione continua, ogni fase è progettata per massimizzare i tuoi risultati.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accentColor to-white"></div>

        {/* Timeline steps */}
        <div className="space-y-12">
          {timelineSteps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex items-start space-x-6 animate-fade-in"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Step number and icon */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-gray-800 border-4 border-accentColor rounded-full flex items-center justify-center relative z-10">
                  <div className="text-accentColor">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accentColor text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {step.id}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* add a transparent line to the last step */}
              {index === timelineSteps.length - 1 && (
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-backgroundEven"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;