import Button from "./button"

export default function Main(){
    return <main className=" w-w-main border-solid border-2 border-almost-black flex flex-row justify-center items-center gap-52 mx-auto mt-6">
        <div className="main-text w-1/2 flex flex-row flex-wrap justify-start gap-x-48 gap-y-10">
            <h1 className="font-bold text-almost-black text-9xl content-between">Make remote work</h1>
            <p className="text-lg text-medium-gray content-between">Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity soar.</p>
            <Button></Button>

            <div className="images flex items-center justify-between gap-x-10 mt-14 ">
                <img src="/proj-assets/images/client-databiz.svg" alt="databiz-logo" />
                <img src="/proj-assets/images/client-audiophile.svg" alt="audiophile-logo" />
                <img src="/proj-assets/images/client-meet.svg" alt="client-meet-logo" />
                <img src="/proj-assets/images/client-maker.svg" alt="maker-logo" />
            </div>
        </div>

        <div className="w-1/2 gap-6 flex justify-end">
            <img src="/proj-assets/images/image-hero-desktop.png" ></img>
        </div>
        
    </main>
}