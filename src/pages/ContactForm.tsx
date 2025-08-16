import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    goals: "",
    message: ""
  });
  const { toast } = useToast();
  // Traduci in italiano le faq
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Messaggio Inviato!",
      description: "Grazie per avermi contattato! Ti risponderò entro 24 ore.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      goals: "",
      message: ""
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Pronto a Iniziare il Tuo Viaggio?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discutiamo dei tuoi obiettivi e creiamo un piano personalizzato che trasformerà la tua vita.
          Sono qui per rispondere a qualsiasi domanda e aiutarti a fare il primo passo.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-accentColor">Contattami</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Pronto a trasformare la tua vita? Mi piacerebbe sentirti. Se hai domande sui miei programmi,
              vuoi pianificare una consulenza o hai bisogno di qualche consiglio, sono qui per aiutarti.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-accentColor/20 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-accentColor" />
              </div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-300">mailOmar@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accentColor/20 p-3 rounded-xl">
                <Phone className="h-6 w-6 text-accentColor" />
              </div>
              <div>
                <div className="font-semibold">Telefono</div>
                <div className="text-gray-300">+39 123 456 7890</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accentColor/20 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-accentColor" />
              </div>
              <div>
                <div className="font-semibold">Dove</div>
                <div className="text-gray-300">Bergamo</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-accentColor/20 p-3 rounded-xl">
                <Clock className="h-6 w-6 text-accentColor" />
              </div>
              <div>
                <div className="font-semibold">Tempo di Risposta</div>
                <div className="text-gray-300">Entro 24 ore</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800/50 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-white">Nome Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-2"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-white">Numero di Telefono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-gray-700/50 border-gray-600 text-white mt-2"
                />
              </div>
              <div>
                <Label htmlFor="package" className="text-white">Pacchetto Interessato</Label>
                <Select value={formData.package} onValueChange={(value) => handleChange("package", value)}>
                  <SelectTrigger className="bg-gray-700/50 border-gray-600 text-white mt-2">
                    <SelectValue placeholder="Seleziona un pacchetto" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 text-white">
                    <SelectItem value="starter">Starter (99€/mese)</SelectItem>
                    <SelectItem value="pro">Pro (199€/mese)</SelectItem>
                    <SelectItem value="elite">Elite (349€/mese)</SelectItem>
                    <SelectItem value="consultation">Consulenza Gratuita</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="goals" className="text-white">I Tuoi Obiettivi Fitness</Label>
              <Input
                id="goals"
                value={formData.goals}
                onChange={(e) => handleChange("goals", e.target.value)}
                placeholder="es. Perdita di peso, aumento della massa muscolare, allenamento della forza..."
                className="bg-gray-700/50 border-gray-600 text-white mt-2"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white">Messaggio</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Parlami di più del tuo attuale livello di fitness, delle sfide che stai affrontando o delle domande che hai..."
                rows={4}
                className="bg-gray-700/50 border-gray-600 text-white mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primaryColor hover:bg-primaryDark text-white py-3 text-lg font-semibold"
            >
              Invia Messaggio
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;