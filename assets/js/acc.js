const createEmail = document.querySelector(`#create-email`);
const createPass1 = document.querySelector(`#create-password1`);
const createPass2 = document.querySelector(`#create-password2`);
const createAcc = document.querySelector(`#create`);
const errorMail = document.querySelector(`.mail-error`);
const errorPass = document.querySelector(`.password-error`);
const inputDesignMail = document.getElementById(`create-acc-mail`);
const inputDesignPass = document.getElementById(`create-acc-pass`);

createAcc.addEventListener(`click`, (e) => {
	console.log(createPass1.value);
	let mail = createEmail.value;
	let pass = createPass1.value;
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	if (pass.length >= 8 && emailRegex.test(mail) && pass === createPass2.value) {
		const registrations =
			JSON.parse(localStorage.getItem(`registrations`)) || [];
		registrations.push({ email: mail, password: pass });
		localStorage.setItem(`registrations`, JSON.stringify(registrations));
		errorPass.style.display = `none`;
		errorMail.style.display = `none`;
		inputDesignPass.style.borderColor = `#D9D9D9`;
		inputDesignMail.style.borderColor = `#D9D9D9`;
		window.location.href = `index.html`;
	} else {
		if (pass.length < 8) {
			e.preventDefault();
			errorPass.style.display = `flex`;
			inputDesignPass.style.borderColor = `#FF3939`;
		} else if (pass !== createPass2.value) {
			console.log(pass, createPass2.value);
			errorPass.style.display = `flex`;
			inputDesignPass.style.borderColor = `#FF3939`;
			e.preventDefault();
		} else {
			errorPass.style.display = `none`;
			inputDesignPass.style.borderColor = `#D9D9D9`;
		}
		if (mail === ``) {
			e.preventDefault();
			errorMail.style.display = `flex`;
			inputDesignMail.style.borderColor = `#FF3939`;
		} else {
			errorMail.style.display = `none`;
			inputDesignMail.style.borderColor = `#D9D9D9`;
		}
	}
});
