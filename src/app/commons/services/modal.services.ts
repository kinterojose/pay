declare var swal: any;

export function modalBasic(tittle = "example title", data = "example data", type = "info") {
	swal(
		tittle,
		data,
		type
	)
}

export function modalComplex(tittle = "example title", data = "example data", type = "info", confirmBtn = false) {
	swal({
		tittle,
		data,
		type,
		showConfirmButton: confirmBtn
	})
}
