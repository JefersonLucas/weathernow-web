import logoFull from './assets/full-logo.svg'

export function App() {
	return (
		<div className="bg-gray-900 h-screen w-full flex items-center justify-center flex-col gap-6">
			<img src={logoFull} alt="" className="w-[250px]" />
		</div>
	)
}
