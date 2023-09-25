import { Home } from '@/pages/home'
import { Privacy } from '@/pages/privacy'
import { Terms } from '@/pages/terms'
import { Route, Routes } from 'react-router-dom'

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/privacy" element={<Privacy />} />
			<Route path="/terms" element={<Terms />} />
		</Routes>
	)
}
