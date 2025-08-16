
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const cta = function () {
    return (
        <div className="backdrop-blur-lg border border-blue-500/30 rounded-2xl md:px-12 p-1 inline-block">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight p-2 text-center">
                Diventa un
                <span className="text-accentColor pb-8"> DRAGONE</span>
            </h1>

            <div className="text-center text-base">
                Scopri il tuo potenziale con i miei
                <span className="text-accentColor"> programmi di allenamento </span>
                e
                <span className="text-accentColor"> nutrizione personalizzati</span>
            </div>

            <div className="flex flex-row sm:flex-row gap-4 justify-center py-4 lg:justify-start">
                <a href="#pricing">
                    <Button className="bg-primaryColor hover:bg-primaryDark text-onPrimaryColor rounded-md px-8 text-lg group">
                        Inizia
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
                <a href="#about">
                    <Button variant="outline" className="border-gray-600 text-black rounded-md px-8 text-lg">
                        Scopri di più
                    </Button>
                </a>
            </div>
        </div>
    )
}

export { cta as CTA_Mobile }

