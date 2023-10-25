import Image from 'next/image'
import featureImage from '/public/images/feature.jpg'
import MainContainer from '@/components/ui/MainContainer'
import { Button } from '@/components/ui/Button'

export default function FeatureSection() {
	return (
		<MainContainer className="sticky top-24 bg-background-dark z-10 snap-end">
			<section className=" flex justify-between bg-background h-[calc(100vh-6rem)] text-text-light pt-20 pb-10">
				<div className="w-[47%] flex flex-col justify-center gap-8">
					<h1 className="text-4xl">
						Expert Motorcycle Repair Services You Can Trust
					</h1>
					<p>
						At our motorcycle repair shop, we offer a wide range of
						expert repair services to keep your motorcycle running
						smoothly. From routine maintenance to complex repairs,
						our team of skilled technicians is here to help.
					</p>
					<div  className='space-x-4'>
						<Button variant={'ghost'} >Learn More</Button>
						<Button variant={'outline'} >Contact Us</Button>
					</div>
				</div>
				<div className="w-[47%] relative">
					<Image
						src={featureImage}
						fill
						alt=""
						sizes="100%"
						className="object-cover object-top"
					/>
				</div>
			</section>
		</MainContainer>
	)
}
