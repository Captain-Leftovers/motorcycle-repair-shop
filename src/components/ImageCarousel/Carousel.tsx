import { ApiImageType } from '@/types'
import Image from 'next/image'

type CarouselProps = {
	images: ApiImageType[]
}
export default function Carousel({ images }: CarouselProps) {
	console.log(images)

	return (
		<div className=" w-full h-full flex flex-wrap justify-between">
      	<div className="bg-red-400">
				<h2> See what is for Sale </h2>
			</div>
				<Image
					src={images[1].url}
					alt={images[0].model}
					width={600}
          height={400}
					className="object-cover object-center rounded-xl"
				/>

			<div className="bg-red-400">
				<h2> See what is for Sale </h2>
			</div>
		</div>
	)
}
