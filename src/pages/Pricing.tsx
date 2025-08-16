
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

// Traduci in italiano
const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "99€",
      period: "al mese",
      icon: <Zap className="h-8 w-8" />,
      popular: false,
      description: "Perfetto per i principianti pronti a iniziare il loro percorso di fitness",
      features: [
        "2 sessioni di allenamento personale al mese",
        "Guida nutrizionale di base",
        "Progettazione del piano di allenamento",
        "Monitoraggio dei progressi",
        "Supporto via email",
      ]
    },
    {
      name: "Pro",
      price: "199€",
      period: "al mese",
      icon: <Star className="h-8 w-8" />,
      popular: true,
      description: "Scelta più popolare per gli appassionati di fitness seri",
      features: [
        "4 sessioni di allenamento personale al mese",
        "Piano nutrizionale completo",
        "Programmi di allenamento personalizzati",
        "Controlli settimanali dei progressi",
        "Supporto chat 24/7",
        "Raccomandazioni per integratori",
        "Guida alla preparazione dei pasti",
      ]
    },
    {
      name: "Elite",
      price: "349€",
      period: "al mese",
      icon: <Crown className="h-8 w-8" />,
      popular: false,
      description: "Pacchetto definitivo per risultati e trasformazioni massimi",
      features: [
        "8 sessioni di allenamento personale al mese",
        "Piani pasto personalizzati",
        "Coaching nutrizionale quotidiano",
        "Accesso illimitato al supporto",
        "Analisi della composizione corporea",
        "Sessioni di recupero e mobilità",
        "Preparazione alla competizione",
        "Coaching dello stile di vita",
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Pacchetti di Allenamento
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Scegli il pacchetto di allenamento perfetto per i tuoi obiettivi, il tuo programma e il tuo budget.
          Ogni pacchetto include attenzione personalizzata e risultati comprovati.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${pkg.popular
                ? "border-accentColor bg-gradient-to-b from-black/20 to-gray-800/50"
                : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
              }`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accentColor text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Più Popolare
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <div className={`inline-flex p-3 rounded-xl mb-4 ${pkg.popular ? "bg-accentColor/20 text-accentColor" : "bg-gray-700/50 text-gray-400"
                }`}>
                {pkg.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{pkg.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-gray-400 ml-2">{pkg.period}</span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              className={`w-full py-3 text-lg font-semibold ${pkg.popular
                  ? "bg-primaryColor hover:bg-primaryDark text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
            >
              Scegli {pkg.name}
            </Button>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-gray-800/30 rounded-2xl p-8 text-center mb-12">
        <h3 className="text-2xl font-bold mb-4">Non sei sicuro di quale pacchetto sia giusto per te?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Ogni percorso è unico. Facciamo una consulenza gratuita per discutere i tuoi obiettivi
          e trovare il pacchetto di allenamento perfetto che ti aiuterà a raggiungere i risultati desiderati.
        </p>
        <Button className="bg-primaryColor hover:bg-primaryDark text-white py-3 lg:text-lg text-md">
          Pianifica una consulenza gratuita
        </Button>
      </div>

      {/* Money Back Guarantee
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 bg-green-900/20 border border-green-700 rounded-full px-6 py-3">
          <Check className="h-5 w-5 text-green-500" />
          <span className="text-green-400 font-semibold">30-Day Money Back Guarantee</span>
        </div>
      </div> 
      */}
    </div>
  );
};

export default Pricing;
