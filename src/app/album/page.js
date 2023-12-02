import Image from 'next/image';
import HouseImg from "@/assets/Lakeside Cottage.jpg"

const AlbumPage = () => {
    return (
        <div>
            <h1>Using Image component:</h1>
            <Image 
            src="https://i.ibb.co/2dPX5n8/Chicken-Tikka-Masala.jpg"
            alt='food image'
            width={500}
            height={250} />

            <h1 className='mt-8'>Using Image component: (from assets folder)</h1>
            <Image 
            src={HouseImg}
            alt='food image'
            width={500}
            height={250} />

            <h1 className='mt-8'>Using img tag:</h1>
            <img
            src="https://i.ibb.co/2dPX5n8/Chicken-Tikka-Masala.jpg"
            alt='food image'
            width={500}
            height={250} />
        </div>
    );
};

export default AlbumPage;