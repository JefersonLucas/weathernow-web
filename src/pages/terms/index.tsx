import { api } from '@/lib/axios'
import { convertDateToPtBR } from '@/utils/convert-date-to-ptBR'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

interface TermsProps {
	title: string
	body: string
	updated_at: string
}

export function Terms() {
	const [terms, setTerms] = useState<TermsProps | null>(null)

	useEffect(() => {
		api
			.get('/repos/JefersonLucas/weathernow-web/issues/2')
			.then((response) => setTerms(response.data))
	}, [])

	if (!terms) return null

	return (
		<div className="bg-gray-900 h-full w-full flex items-center justify-center flex-col gap-6 p-8">
			<h1 className="text-3xl text-white">{terms.title}</h1>

			<ReactMarkdown
				children={terms.body}
				className="text-white flex gap-2 flex-col"
			/>

			<span className="text-white">
				Última Atualização: {convertDateToPtBR(terms.updated_at)}
			</span>
		</div>
	)
}
