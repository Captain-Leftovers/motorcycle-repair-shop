import FeatureSection from '@/app/(routes)/(home)/components/FeatureSection'
import FeaturesListSection from '@/app/(routes)/(home)/components/FeaturesListSection'
import HeroHeaderSection from '@/app/(routes)/(home)/components/HeroHeaderSection'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
	return (
		<main className="relative h-screen snap-y snap-mandatory overflow-auto bg-blue-400 z-50">
			<Navbar />
			<HeroHeaderSection />
			<FeatureSection />
			<FeaturesListSection />
			<Footer />
		</main>
	)
}
