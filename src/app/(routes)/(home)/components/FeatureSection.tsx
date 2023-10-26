import Image from 'next/image'
import featureImage from '/public/images/feature.jpg'
import MainContainer from '@/components/ui/MainContainer'
import {Button} from '@/components/ui/Button'

export default function FeatureSection() {
	return (
		<MainContainer className="sticky top-0 bg-background-dark z-10 snap-start h-screen">
			<section className=" flex justify-between  text-text-light pt-20 pb-10">
			
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
