type ContainerProps = {
	children: React.ReactNode
}

export default function MainContainer({ children }: ContainerProps) {
	return (
		<main className="grow bg-pallette-orange" >
			<div className="py-8 w-full mx-auto max-w-7xl scroll-smooth">
				{children}
			</div>
		</main>
	)
}
