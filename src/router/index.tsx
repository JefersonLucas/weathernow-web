import { Home } from '@/pages/home'
import { Privacy } from '@/pages/privacy'
import { Route, Routes } from 'react-router-dom'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/privacy" element={<Privacy />} />
		</Routes>
	)
}
