const loginEmail = document.querySelector(`#login-email`);
const loginPassword = document.querySelector(`#login-password`);
const loginBtn = document.querySelector(`#login`);
const errorMail = document.querySelector(`.mail-error`);
const errorPass = document.querySelector(`.password-error`);
const loginDesignMail = document.getElementById(`login-design-mail`);
const loginDesignPass = document.getElementById(`login-design-pass`);

// loginEmail.addEventListener(`input`, (e) => console.log(loginEmail.value));

loginBtn.addEventListener(`click`, (e) => {
	let loginMail = loginEmail.value;
	let loginPass = loginPassword.value;

	const registrations = JSON.parse(localStorage.getItem("registrations")) || [];
	console.log(loginMail, loginPass, registrations);
	const user = registrations.find(
		(registration) =>
			registration.email === loginMail && registration.password === loginPass
	);

	if (loginMail === ``) {
		loginDesignMail.style.borderColor = `#FF3939`;
		errorMail.style.display = `flex`;
	} else {
		errorMail.style.display = `none`;
		loginDesignMail.style.borderColor = `#D9D9D9`;
	}
	if (user) {
		console.log(`nice`);
		errorMail.style.display = `none`;
		errorPass.style.display = `none`;
		loginDesignPass.style.borderColor = `#D9D9D9`;
		loginDesignMail.style.borderColor = `#D9D9D9`;
		window.location.href = `desktop-empty.html`;
	} else {
		e.preventDefault();
		errorPass.style.display = `flex`;
		loginDesignPass.style.borderColor = `#FF3939`;
	}
	localStorage.removeItem(`userProfile`);
});
