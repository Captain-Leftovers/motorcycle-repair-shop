
import FeatureSection from '@/components/FeatureSection'
import FeaturesListSection from '@/components/FeaturesListSection'
import HeroHeaderSection from '@/components/HeroHeaderSection'
import MainContainer from '@/components/ui/MainContainer'

export default function Home() {
	return (
		<MainContainer>
			<HeroHeaderSection />
			<FeatureSection />
			<FeaturesListSection />
		</MainContainer>
	)
}
