import Image from "next/image";
import Camera from "../assests/images/download.jpg"

const DealOffers = () => {
    return (
        <>
            <section className="w-100 my-4 deals-offers-container">
                <div className="grid grid-cols-6 deals-offers">
                    <div className="col-span-2">
                        <Image src={Camera} alt={""} width={300} className="w-100 shadow-2 rounded" />
                        <div>Camera</div>
                    </div>
                    <div >
                        <Image src={Camera} alt={""} className="w-100 shadow-2 rounded" />
                        <div>Camera</div>
                    </div>
                    <div >
                        <Image src={Camera} alt={""} className="w-100 shadow-2 rounded" />
                        <div>Camera</div>
                    </div>
                    <div >
                        <Image src={Camera} alt={""} className="w-100 shadow-2 rounded" />
                        <div>Camera</div>
                    </div>
                    <div >
                        <Image src={Camera} alt={""} className="w-100 shadow-2 rounded" />
                        <div>Camera</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DealOffers;