import { todo } from "node:test"

export default function Footer() {
	return (
		<footer className="bg-white " style={{
			boxShadow: '0 0 0 100vmax #fff',
			clipPath: 'inset(0 -100vmax)',
		}}>
			<div className="mx-auto py-10">
				<p className="text-center text-xs text-black">
					Moto Revive &copy; {new Date().getFullYear()} Motorcycle repair
				</p>
			</div>
		</footer>
	)
}


// TODO :  footer not visible!!! fix it