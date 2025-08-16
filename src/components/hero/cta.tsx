
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const cta = function () {
    return (
        <div className="backdrop-blur-lg border w-full border-blue-500/30 rounded-2xl mx-8 p-8 inline-block">
            <h1 className="text-3xl lg:text-7xl md:text-4xl font-bold leading-tight py-4 text-center">
                Diventa un
                <span className="text-accentColor pb-8"> DRAGONE</span>
            </h1>

            <div className="text-center text-lg md:text-xl mb-6">
                Scopri il tuo potenziale con i miei
                <span className="text-accentColor"> programmi di allenamento </span>
                e
                <span className="text-accentColor"> nutrizione personalizzati</span>
            </div>

            <div className="flex flex-row md:flex-row gap-4 justify-center py-4">
                <a className="w-[calc(60%)]" href="#pricing">
                    <Button className="bg-primaryColor hover:bg-primaryDark w-full h-12 rounded-2xl text-onPrimaryColor px-8 text-lg group">
                        Inizia
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </a>
                <a className="w-[calc(30%)]" href="#about">
                    <Button variant="outline" className="border-gray-600 w-full h-12 rounded-2xl text-black px-8 text-lg">
                        Scopri di più
                    </Button>
                </a>
            </div>
        </div>
    )
}

export { cta as CTA }

