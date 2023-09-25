import { api } from '@/lib/axios'
import { convertDateToPtBR } from '@/utils/convert-date-to-ptBR'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface PrivacyProps {
	title: string
	body: string
	updated_at: string
}

export function Privacy() {
	const [privacy, setPrivacy] = useState<PrivacyProps | null>(null)

	useEffect(() => {
		api
			.get('/repos/JefersonLucas/weathernow-web/issues/1')
			.then((response) => setPrivacy(response.data))
	}, [])

	if (!privacy) return null

	return (
		<div className="bg-gray-900 h-full w-full flex items-center justify-center flex-col gap-6 p-8">
			<h1 className="text-3xl text-white">{privacy.title}</h1>

			<ReactMarkdown
				children={privacy.body}
				className="text-white flex gap-2 flex-col"
			/>

			<span className="text-white">
				Última Atualização: {convertDateToPtBR(privacy.updated_at)}
			</span>
		</div>
	)
}
