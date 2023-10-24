type ContainerProps = {
	children: React.ReactNode
}

export default function MainContainer({ children }: ContainerProps) {
	return (
		<main className="grow" >
			<div className="relative w-full mx-auto max-w-7xl scroll-smooth">
				{children}
			</div>
		</main>
	)
}
