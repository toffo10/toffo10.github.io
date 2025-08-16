import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto tempo ci vorrà per vedere i risultati?",
      answer: "La maggior parte dei clienti inizia a vedere cambiamenti iniziali entro 2-3 settimane, con trasformazioni significative visibili dopo 8-12 settimane di allenamento e aderenza alla nutrizione costanti. I risultati variano in base agli obiettivi individuali, al punto di partenza e al livello di impegno."
    },
    {
      question: "Ho bisogno di avere accesso a una palestra?",
      answer: "Non necessariamente! Posso creare piani di allenamento efficaci per allenamenti a casa, in palestra o con attrezzature minime. Durante la nostra consulenza, discuteremo delle attrezzature e dello spazio disponibili per progettare il programma perfetto per te."
    },
    {
      question: "E se fossi un principiante assoluto?",
      answer: "Perfetto! Mi specializzo nel lavorare con i principianti e ti guiderò in ogni fase. Inizieremo con la forma corretta, i movimenti di base e progrediremo gradualmente mentre costruisci forza e fiducia. Non è richiesta alcuna esperienza."
    },
    {
      question: "Come funziona il coaching nutrizionale?",
      answer: "Il coaching nutrizionale include piani pasto personalizzati basati sulle tue preferenze, sul tuo stile di vita e sui tuoi obiettivi. Fornisco obiettivi macro, indicazioni sui tempi dei pasti, raccomandazioni per gli integratori e aggiustamenti continui secondo necessità."
    },
    {
      question: "Posso cambiare pacchetto se le mie esigenze cambiano?",
      answer: "Assolutamente! Il tuo pacchetto può essere modificato in qualsiasi momento per adattarsi meglio alle tue esigenze, al tuo programma o ai tuoi obiettivi in evoluzione. Discuteremo la soluzione migliore durante i nostri controlli regolari."
    },
    {
      question: "Cosa rende il tuo approccio diverso?",
      answer: "Mi concentro su risultati sostenibili e a lungo termine piuttosto che su soluzioni rapide. Ogni programma è completamente personalizzato e fornisco supporto e aggiustamenti continui. Inoltre, hai accesso diretto a me, non solo a un'app o a un programma generico."
    },
    {
      question: "Offri rimborsi?",
      answer: "Sì! Offro una garanzia di rimborso di 30 giorni. Se non sei soddisfatto del programma entro il primo mese, riceverai un rimborso completo. Il tuo successo e la tua soddisfazione sono le mie massime priorità."
    },
    {
      question: "Come funzionano i controlli dei progressi?",
      answer: "I controlli dei progressi includono valutazioni fotografiche, monitoraggio delle misurazioni, revisioni delle prestazioni e aggiustamenti del programma. La frequenza dipende dal tuo pacchetto: da controlli settimanali a mensili con feedback dettagliato."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Domande Frequenti
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Hai domande? Ho risposte. Ecco le domande più comuni sui miei programmi di allenamento.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-800/30 border border-gray-700 rounded-xl px-6 py-2"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-accentColor transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 text-base leading-relaxed pt-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Hai ancora domande?</p>
        <a href="#contact" className="text-accentColor hover:text-accentColorDark font-semibold">
          Contattami e ti risponderò personalmente →
        </a>
      </div>
    </div>
  );
};

export default FAQ;