import Image from 'next/image'
import heroImage from '/public/images/hero-image.jpg'
import MainContainer from '@/components/ui/MainContainer'
import { Button } from '@/components/ui/Button'

export default function HeroHeaderSection() {
	return (
		<MainContainer className="sticky top-20 bg-background-light snap-end">
			<section className="flex flex-col justify-around bg-background-light h-[calc(100vh-5rem)] text-black py-10 font-bold">
				<div className=" flex flex-col justify-around items-center grow">
					<h1 className="text-4xl">
						Expert Motorcycle Repairs Done Right at Our Shop
					</h1>
					<p>
						Trust our experienced to get your motorcycle back on the road in no time.
					</p>
					<Button variant={'outline'} >Contact us</Button>
				</div>
				<div className="h-3/4 relative">
					<Image
						src={heroImage}
						fill
						alt=""
						sizes="100%"
						className="object-cover object-top"
						priority
					/>
				</div>

			</section>
		</MainContainer>
	)
}
