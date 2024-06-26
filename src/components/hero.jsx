import hero from '../images/hero.jpg'

export default function Hero(){
    return(
        <>
            <article className="w-full h-full bg-cover bg-bottom" style={{backgroundImage: `url(${hero})`}}>
                <div className="w-screen h-screen bg-gradient-to-b from-transparent to-white to-95% overflow-hidden sticky">
                    <div className="max-h-24 bg-blend-multiply  p-4 absolute top-3/4" style={{right: '28%'}}>
                        <span className="text-yellow-800 text-6xl font-dancingscript mb-2">A Celebration to Remember</span>
                        <div className="absolute w-28 border-2 border-yellow-700 hover:border-yellow-600 text-yellow-700 hover:text-yellow-600 align-middle font-sans rounded-lg mt-2 p-2 text-center font-thasadith cursor-pointer" style={{left: '40%'}}> Custom Order</div>
                    </div>
                </div>
            </article>
        </>
    )
}