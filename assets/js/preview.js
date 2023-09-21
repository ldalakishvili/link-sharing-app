const userProfileJSON = localStorage.getItem(`userProfile`);
const userProfile = JSON.parse(userProfileJSON);

console.log("Name:", userProfile.name);
console.log("Last Name:", userProfile.lastName);
console.log("Email:", userProfile.email);
console.log("Image URL:", userProfile.imageUrl);
console.log("Info Array:", userProfile.info);

console.log(userProfile);
const mobileItems = userProfile.info;
const profilePic = document.querySelector(`.profile-img`);
const profileName = document.querySelector(`.name`);
const mail = document.querySelector(`.mail`);

const mobileLinks = document.querySelector(`.links`);

function setMobileItem() {
	mobileLinks.innerHTML = "";
	mobileItems.forEach((item) => {
		mobileLinks.innerHTML += `
				<a href="${item.url}" target="_blank" >
				<div style="background-color:${item.bgColor}" class="shortcut" >
					<div class="shortcut-logo">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="none"
							viewBox="0 0 16 16"
						>
							<g clip-path="url(#a)">
								<path
									fill="white"
									d="${item.d}"
								/>
							</g>
							<defs>
								<clipPath id="a">
									<path fill="#fff" d="M0 0h16v16H0z" />
								</clipPath>
							</defs>
						</svg>
						${item.name}
					</div>
					<div class="arrow">
						<img src="./assets/images/icon-arrow-right.svg" alt="" />
					</div>
				</div>
			</a>`;
	});
	profilePic.src = userProfile.imageUrl;
	profileName.textContent = `${userProfile.name} ${userProfile.lastName}`;
	if (userProfile.mail) {
		mail.textContent = `${userProfile.mail}`;
	} else {
		mail.textContent = ` `;
	}
}

const backBtn = document.querySelector(`#back`);
console.log(backBtn);
backBtn.addEventListener(`click`, () => {
	window.location.href = `profile.html`;
});
