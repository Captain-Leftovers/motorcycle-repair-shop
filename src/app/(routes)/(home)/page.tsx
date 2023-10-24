
import FeatureSection from '@/app/(routes)/(home)/components/FeatureSection'
import FeaturesListSection from '@/app/(routes)/(home)/components/FeaturesListSection'
import HeroHeaderSection from '@/app/(routes)/(home)/components/HeroHeaderSection'
import Footer from '@/components/Footer'
import MainContainer from '@/components/ui/MainContainer'

export default function Home() {
	return (
		<MainContainer>
			<HeroHeaderSection />
			<FeatureSection />
			<FeaturesListSection />
			<Footer />
		</MainContainer>
	)
}
