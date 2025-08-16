import { Award, Heart, Target, Zap } from "lucide-react";

const valori = function () {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-800/30 rounded-xl">
                <div className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-red-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Orientato agli Obiettivi</h4>
                <p className="text-gray-300">Ogni programma è personalizzato in base ai tuoi obiettivi e al tuo stile di vita.</p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-blue-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Appassionato</h4>
                <p className="text-gray-300">Il tuo successo è la mia passione. Sono qui per supportarti in ogni fase.</p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl">
                <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-green-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Professionale</h4>
                <p className="text-gray-300">Metodi di allenamento basati su evidenze con risultati comprovati.</p>
            </div>

            <div className="text-center p-6 bg-gray-800/30 rounded-xl">
                <div className="bg-yellow-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-yellow-500" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Motivante</h4>
                <p className="text-gray-300">Ti spingerò oltre i tuoi limiti mantenendo il tutto divertente e coinvolgente.</p>
            </div>
        </div>
    )
}

export { valori as Valori };