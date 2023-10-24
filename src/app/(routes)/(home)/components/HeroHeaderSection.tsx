import Image from 'next/image'
import heroImage from '/public/images/hero-image.jpg'
import Navbar from '@/components/Navbar'

export default function HeroHeaderSection() {
	return (
		<>
			<div
				className="-z-10 sticky top-0 h-screen overflow-hidden bg-background-light"
				style={{
					boxShadow: '0 0 0 100vmax #fff',
					clipPath: 'inset(0 -100vmax)',
				}}
			>
				<section className=" flex flex-col h-screen justify-around">
					<Navbar />
					<div className="space-y-4">
						<h1 className="text-5xl text-center">
							Welcome to our Motorcycle
							<br />
							Repair Shop
						</h1>
						<p className="text-center">
							We specialize in repairing motorcycles and have a
							wide selection of bikes for sale.
						</p>
					</div>
					<div className="relative h-[480px] sm:h-[600px]">
						<Image
							src={heroImage}
							alt=""
							fill
							placeholder="blur"
							className="object-cover object-center"
						/>
					</div>
				</section>
			</div>
		</>
	)
}
