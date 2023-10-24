import Image from "next/image";
import featureImage from '/public/images/feature.jpg'

export default function FeaturesListSection() {

    

return (
  <section className="flex bg-pallette-orange h-[800px] text-text-light py-10" style={{'boxShadow': '0 0 0 100vmax #FF5722', 'clipPath': 'inset(0 -100vmax)'}}>
  <div className="w-6/12 flex flex-col justify-center">
  <h1 className="text-6xl"> Expert Motorcycle Repair Services You Can Trust </h1>
  <p>At our motorcycle repair shop, we offer a wide range of expert repair services to keep your motorcycle running smoothly. From routine maintenance to complex repairs, our team of skilled technicians is here to help.</p>
  </div>
  <div className="w-6/12 relative">
  <Image 
  src={featureImage} 
  fill
  alt=""
  sizes="100%"
  className="object-cover object-top"
  />
  </div>
</section>
  )
}