declare var swal: any;

export function modalBasic(
	tittle = "example basic title",
	data = "example basic data",
	type = "info"
) {
	swal(
		tittle,
		data,
		type
	)
}

export function modalComplex(
	tittle = "example complex title",
	data = "example complex data",
	type = "info",
	timer: null,
	allowOutsideClick = false,
	confirmBtn = false,
	cancelBtn = false,
	txtConfirmBtn = "OK",
	txtCancelBtn = "Cancel"
) {
	swal({
		tittle,
		data,
		type,
		timer,
		allowOutsideClick,
		showConfirmButton: confirmBtn,
		showCancelButton: cancelBtn,
		confirmButtonText: txtConfirmBtn,
		cancelButtonText: txtCancelBtn
	})
}
