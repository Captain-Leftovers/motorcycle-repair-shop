import MainContainer from '@/components/ui/MainContainer'
import Carousel from '@/components/ImageCarousel/Carousel'

const images = [

	{
		url: 'https://res.cloudinary.com/dkeycnddx/image/upload/v1698227123/t1evurlhxdnk07ucrzyz.jpg',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},

	{
		url: 'https://res.cloudinary.com/dkeycnddx/image/upload/ar_16:10,c_crop/v1698227124/oibfgql2pyk6zconhsxu.jpg',
		model: 'Moto V',
		description: 'Moto V description goes here',
		price: '$100',
	},
]

type HomeGalleryProps = {}
export default function HomeGallery({}: HomeGalleryProps) {
	return (
		<MainContainer className="sticky top-28 bg-gradient-radial from-pallette-orange-red to-pallette-orange z-30">
			<section className="flex flex-col justify-around items-center bg-transparent h-[500px] text-black py-10 font-bold">
				<Carousel images={images} />
			</section>
		</MainContainer>
	)
}
