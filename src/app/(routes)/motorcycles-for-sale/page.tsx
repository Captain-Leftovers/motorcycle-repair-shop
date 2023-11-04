import { Button } from '@/components/ui/Button'
import MainContainer from '@/components/ui/MainContainer'
import { MotoItemWithImagesType } from '@/types'
import axios from 'axios'

export default async function MotorcyclesForSale() {
	console.log('This is my moto for sale')

	try {
		const moto = await axios.get(
			process.env.NEXT_CMS_API_GET_MOTO!
		)
		const motoData: MotoItemWithImagesType[] = moto.data
	} catch (error) {
		console.log(error)
	
	}

	return (
		<MainContainer>
			<h1 className="text-amber-800 text-3xl">
				This is my Moto For Sale
			</h1>
			<Button className="">Click me</Button>
		</MainContainer>
	)
}
