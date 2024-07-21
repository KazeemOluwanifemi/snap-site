import Button from "./button"

export default function Main(){
    return <div className="border-solid border-2 border-almost-black m-24 flex flex-row">
        <div className="main-text w-1/2 justify-around">
            <h1 className="font-bold text-almost-black text-9xl">Make remote work</h1>
            <p className="text-lg text-medium-gray">Get your team in sync, no matter your location.
            Streamline processes, create team rituals, and watch productivity soar.</p>
            <Button></Button>
        </div>
        <img src="/proj-assets/images/image-hero-desktop.png" className="w-1/2"></img>
    </div>
}