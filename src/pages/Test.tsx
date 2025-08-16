import Lightning from "@/ui-components/Lightning"

const Test = () => {
    return (
        <div className="relative w-full h-[960px]">
            <div className="absolute inset-0 z-10">
                <Lightning
                    hue={220}
                    xOffset={0}
                    speed={1}
                    intensity={1}
                    size={1}
                />
            </div>

        </div>
    )
}

export default Test;