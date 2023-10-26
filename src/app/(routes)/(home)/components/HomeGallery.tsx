import MainContainer from '@/components/ui/MainContainer'
import Carousel from '@/components/ImageCarousel/Carousel'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import motoSale from '/public/images/motoGalleryH1.jpg'

const images = [
	{
		// url: 'https://res.cloudinary.com/dkeycnddx/image/upload/v1698227123/t1evurlhxdnk07ucrzyz.jpg',
		url: '/images/motoGalleryH1.jpg',
		make: 'Honda',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},

	{
		// url: 'https://res.cloudinary.com/dkeycnddx/image/upload/ar_16:10,c_crop/v1698227124/oibfgql2pyk6zconhsxu.jpg',
		url: '/images/motoGalleryV.jpg',
		make: 'Yamahaddddddddd',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},
]

type HomeGalleryProps = {}
export default function HomeGallery({}: HomeGalleryProps) {
	return (
		<MainContainer className="sticky top-0 bg-stone-200 z-30 snap-start h-screen">
			<section className="flex justify-between items-center bg-transparent w-full  text-black bg-blue-200 py-10 font-bold">
				
			<div className="w-[47%] flex flex-col justify-center gap-8">
					<h2 className="text-4xl">
						Expert Motorcycle Repair Services You Can Trust
					</h2>
					<p>
						At our motorcycle repair shop, we offer a wide range of
						expert repair services to keep your motorcycle running
						smoothly. From routine maintenance to complex repairs,
						our team of skilled technicians is here to help.
					</p>
					<div  className='space-x-4'>
						<Button  variant={'outline'} className='' >Learn More</Button>
						<Button  variant={'destructive'} className=''>Contact Us</Button>
					</div>
				</div>
				<div className="w-[47%] relative">
					<Image
						src={motoSale}
						fill
						alt=""
						sizes="100%"
						className="object-cover object-center"
					/>
				</div>
			</section>
		</MainContainer>
	)
}



//TODO see why image not showing
