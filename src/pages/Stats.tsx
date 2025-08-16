const Stats = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-accentColorDark mb-2">200+</div>
                    <div className="text-gray-300">Clienti Soddisfatti</div>
                </div>
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-accentColorDark mb-2">5+</div>
                    <div className="text-gray-300">Anni di Esperienza</div>
                </div>
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-accentColorDark mb-2">95%</div>
                    <div className="text-gray-300">Tasso di Successo</div>
                </div>
                <div>
                    <div className="text-3xl lg:text-4xl font-bold text-accentColorDark mb-2">24/7</div>
                    <div className="text-gray-300">Supporto</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
