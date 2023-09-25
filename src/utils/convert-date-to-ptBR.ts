export function convertDateToPtBR(data: string): string {
	const dataSelecionada = new Date(data)

	if (isNaN(dataSelecionada.getTime())) {
		return "Formato de data inválido. Use o formato 'YYYY-MM-DD'."
	}

	const day = dataSelecionada.getDate()
	const mes = dataSelecionada.getMonth() + 1 // Os meses em JavaScript são baseados em zero, então adicionamos 1.
	const year = dataSelecionada.getFullYear()

	// Formate o dia e o mês para terem dois dígitos
	const dayFormatted = day.toString().padStart(2, '0')
	const monthFormatted = mes.toString().padStart(2, '0')

	return `${dayFormatted}/${monthFormatted}/${year}`
}
