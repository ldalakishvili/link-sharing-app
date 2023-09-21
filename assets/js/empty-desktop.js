const addLinkBtn = document.querySelector(`.add-link`);
const finger = document.querySelector(`.starter`);
const windowBox = document.querySelector(`.link-windows`);
const saveBtn = document.querySelector(`.save-btn-links`);
const mobileLinks = document.querySelector(`.mobile-shortcuts`);
const profileSwitch = document.querySelector(`.profile-dtls`);
const linkSwitch = document.querySelector(`.links`);
const linkSide = document.querySelector(`.right-side-links`);
const profileSide = document.querySelector(`.right-side-profile`);
// --------------------------------------------------------------------------------------
// const userProfileJSON = localStorage.getItem(`userProfile`);
// const userProfile = JSON.parse(userProfileJSON);
// console.log(userProfile.info);
// const mobileItems = userProfile.info; // bgColor url, img, name, d
const mobileItems = [];

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
}

const optionsArray = [
	{
		name: `Github`,
		img: `./assets/images/icon-github.svg`,
		bgColor: `#1A1A1A`,
		d: ` M9.982 2.288a8.756 8.756 0 0 0-3.963 0c-.754-.462-1.329-.674-1.747-.764a2.315 2.315 0 0 0-.544-.056 1.342 1.342 0 0 0-.247.03l-.01.002-.005.002h-.003l.146.513-.146-.512a.533.533 0 0 0-.342.294 3.328 3.328 0 0 0-.17 2.241 3.578 3.578 0 0 0-.817 2.287c0 1.657.488 2.77 1.321 3.486.584.501 1.292.768 2.002.92a2.496 2.496 0 0 0-.123 1.022v.638c-.434.09-.735.062-.95-.008-.267-.089-.473-.267-.67-.523a5.118 5.118 0 0 1-.289-.429l-.06-.099a9.772 9.772 0 0 0-.24-.378c-.202-.3-.503-.675-.99-.803l-.515-.135-.271 1.032.516.136c.085.021.196.101.379.369.07.106.137.213.202.322l.073.117c.1.162.215.342.349.517.27.352.637.707 1.184.887.373.124.797.154 1.282.079v1.992a.533.533 0 0 0 .533.533h4.267a.533.533 0 0 0 .533-.534v-3.8c0-.336-.015-.644-.11-.931.707-.15 1.41-.416 1.99-.918.833-.72 1.32-1.845 1.32-3.511v-.001a3.578 3.578 0 0 0-.82-2.267 3.328 3.328 0 0 0-.169-2.24.533.533 0 0 0-.34-.295l-.146.512c.146-.512.145-.512.144-.512l-.002-.001-.005-.002-.01-.003a1.344 1.344 0 0 0-.248-.03 2.318 2.318 0 0 0-.544.057c-.417.09-.992.302-1.745.764Z`,
	},
	{
		name: `YouTube`,
		img: `./assets/images/icon-youtube.svg`,
		bgColor: `#EE3939`,
		d: "M8.162 2.667c.356.002 1.247.01 2.194.048l.336.015c.952.045 1.904.122 2.377.253.63.177 1.125.693 1.292 1.348.267 1.04.3 3.068.304 3.56V8.107c-.004.491-.037 2.52-.304 3.56a1.874 1.874 0 0 1-1.292 1.347c-.473.131-1.425.209-2.377.253l-.336.016c-.947.037-1.838.046-2.194.048h-.326c-.754-.004-3.904-.038-4.907-.317a1.875 1.875 0 0 1-1.292-1.348c-.267-1.04-.3-3.068-.304-3.56v-.216c.004-.492.037-2.52.304-3.56A1.872 1.872 0 0 1 2.93 2.984c1.002-.28 4.153-.313 4.906-.317h.326Zm-1.496 3v4.666l4-2.333-4-2.333Z",
	},
	{
		name: `LinkedIn`,
		img: `./assets/images/icon-linkedin.svg`,
		bgColor: `#2D68FF`,
		d: "M12.667 2A1.333 1.333 0 0 1 14 3.333v9.334A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334Zm-.334 10.333V8.8a2.173 2.173 0 0 0-2.173-2.173c-.567 0-1.227.346-1.547.866v-.74h-1.86v5.58h1.86V9.047a.93.93 0 1 1 1.86 0v3.286h1.86ZM4.587 5.707a1.12 1.12 0 0 0 1.12-1.12 1.124 1.124 0 1 0-1.12 1.12Zm.926 6.626v-5.58H3.667v5.58h1.846Z",
	},
	{
		name: `Facebook`,
		img: `./assets/images/icon-facebook.svg`,
		bgColor: `#0066cc`,
		d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951Z",
	},
	{
		name: `Frontend-Mentor`,
		img: `./assets/images/icon-frontend-mentor.svg`,
		bgColor: `#606060`,
		d: "M15.512 8.388a.448.448 0 0 1-.2-.047l-4.188-2.098a.509.509 0 0 1-.21-.202.594.594 0 0 1 0-.593.509.509 0 0 1 .21-.202l4.189-2.091a.442.442 0 0 1 .373-.011c.12.052.219.155.271.287a.607.607 0 0 1 .01.418.527.527 0 0 1-.257.303l-3.19 1.593 3.191 1.599c.102.05.185.14.236.25.05.112.066.24.043.362a.559.559 0 0 1-.17.31.457.457 0 0 1-.308.122ZM9.804 16c-4.605 0-8.63-3.477-9.788-8.456a.602.602 0 0 1 .051-.414.498.498 0 0 1 .298-.252.443.443 0 0 1 .37.057.543.543 0 0 1 .225.333c.51 2.19 1.656 4.127 3.256 5.51 1.6 1.382 3.566 2.131 5.588 2.13.13 0 .253.058.345.16a.58.58 0 0 1 .143.386.58.58 0 0 1-.143.386.463.463 0 0 1-.345.16ZM8.123 11.467a.463.463 0 0 1-.345-.16.58.58 0 0 1-.143-.385V.546A.58.58 0 0 1 7.778.16.463.463 0 0 1 8.123 0c.13 0 .253.058.345.16a.58.58 0 0 1 .143.386v10.376a.58.58 0 0 1-.143.386.463.463 0 0 1-.345.16Z",
	},
	{
		name: `Twitter`,
		img: `./assets/images/icon-twitter.svg`,
		bgColor: `#66ffff`,
		d: "M14.973 4a5.711 5.711 0 0 1-1.64.46 2.866 2.866 0 0 0 1.253-1.587 5.761 5.761 0 0 1-1.813.7 2.816 2.816 0 0 0-2.107-.906 2.857 2.857 0 0 0-2.846 2.86c0 .226.026.446.073.653A8.13 8.13 0 0 1 2 3.193a2.83 2.83 0 0 0-.387 1.433c0 .994.5 1.874 1.273 2.374-.473 0-.913-.133-1.3-.333v.02c0 1.386.987 2.546 2.294 2.806-.42.115-.86.131-1.287.047a2.854 2.854 0 0 0 2.667 1.987 5.68 5.68 0 0 1-3.554 1.226 5.83 5.83 0 0 1-.68-.04A8.096 8.096 0 0 0 5.413 14c5.253 0 8.14-4.36 8.14-8.14 0-.127 0-.247-.007-.373.56-.4 1.04-.907 1.427-1.487Z",
	},
	{
		name: `Email`,
		img: `./assets/images/icon-email.svg`,
		bgColor: `#fff333`,
		d: "M14 3H2a.5.5 0 0 0-.5.5V12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V3.5A.5.5 0 0 0 14 3Zm-.5 9h-11V4.637l5.162 4.732a.5.5 0 0 0 .676 0L13.5 4.637V12Z",
	},
];

function setOptionContent() {
	let optionHTML = "";

	optionsArray.forEach((e) => {
		optionHTML += `<div class="option">
			<div class="left-link">
				<div class="link-logo">
					<img  src="${e.img}" />
					${e.name}
				</div>
			</div>
		</div>`;
	});

	return optionHTML;
}

function setLinkWindows() {
	finger.style.display = mobileItems.length > 0 ? "none" : "flex";

	windowBox.innerHTML = "";
	mobileItems.forEach((item, index) => {
		windowBox.innerHTML += `<div class="window">
		<div class="window-header">
			<div class="window-logo">
				<img src="./assets/images/icon-drag-and-drop.svg" alt="drop" />
				Link #${index + 1}
				</div>
		   
				<p class="link-remove">Remove</p>
			</div>
			<div class="selector-box">
				<div class="selector-title">Platform</div>
				<div class="selector p">
					<div class="left-link">
					<div class="link-logo">
							<img src=${item.img} alt="git" />
							${item.name}
						</div>
						<div class="pointer">
						<img
								src="./assets/images/icon-chevron-down.svg"
								alt="cursor"
							/>
						</div>
					</div>
				</div>
				<div class="options activeoption">
					${setOptionContent()}
				</div>
			</div>
			<div class="selector-box">
				<label for="url" class="selector-title"> Link</label>
				<div class="selector input-box">
					<img
						src="./assets/images/icon-link-copied-to-clipboard.svg"
						alt=""
					/>
					<input type="url" name="" class="url"  value=${item.url}  />
					
					<p class="input-error mail-error">Can’t be empty</p>
					</div>
			</div>
		</div>`;
	});

	const elements = windowBox.querySelectorAll(".window");

	elements.forEach((element, index) => {
		element.querySelector(".url").addEventListener("input", function (e) {
			mobileItems[index].url = e.target.value;
		});
		element.querySelector(".selector.p").addEventListener("click", function () {
			console.log(element, element.querySelector(".options"), index);
			element.querySelector(".options").classList.toggle("activeoption");
		});

		element.querySelectorAll(".options .option").forEach((option) => {
			option.addEventListener("click", function () {
				const name = option.querySelector(".link-logo").innerText;
				const src = option.querySelector(".link-logo img").getAttribute("src");

				mobileItems[index].img = src;
				mobileItems[index].d = optionsArray.find((opt) => opt.img == src).d;
				mobileItems[index].bgColor = optionsArray.find(
					(opt) => opt.img == src
				).bgColor;
				mobileItems[index].name = name;

				element.querySelector(".link-logo").innerHTML = `
					<img src=${src} alt="git" />
					${name}
				`;

				element.querySelector(".options").classList.add("activeoption");
			});
		});
	});
	const removeBtns = windowBox.querySelectorAll(`.link-remove`);

	remove(removeBtns);
}

function remove(removebtn) {
	removebtn.forEach((btn, index) => {
		btn.addEventListener(`click`, () => {
			mobileItems.splice(index, 1);
			setLinkWindows();
			if (mobileItems.length == 0) {
				setMobileItem();
			}
		});
	});
}
// -------------------------------------
addLinkBtn.addEventListener(`click`, () => {
	mobileItems.push({
		...optionsArray[0],
		url: "",
	});
	setLinkWindows();
});

saveBtn.addEventListener("click", () => {
	let hasErrors = false;

	mobileItems.forEach((obj, index) => {
		let error = document.querySelectorAll(".input-error");
		let errorBox = document.querySelectorAll(`.input-box`);

		if (obj.url == "") {
			console.log(obj.url);
			error[index].style.display = "block";
			errorBox[index].style.borderColor = `red`;
			hasErrors = true;
		} else {
			error[index].style.display = "none";
			errorBox[index].style.borderColor = `#D9D9D9`;
		}
	});

	if (!hasErrors) {
		setMobileItem();
		alert.style.display = `block`;
		alert.textContent = `Your changes have been successfully saved!`;
		setTimeout(() => {
			alert.style.display = "none";
		}, 1000);
		const userProfile = {
			name: nameValue.value,
			lastName: lastNameValue.value,
			email: mailValue.value,
			imageUrl: imageUrl,
			info: mobileItems,
		};
		const userProfileJSON = JSON.stringify(userProfile);

		localStorage.setItem("userProfile", userProfileJSON);
	}
});
// -----------------------------------------------------------------profile

const linkIconColor = document.querySelector(`#linkcolor`);
const profIconColor = document.querySelector(`#profilecolor`);
const saveBtnProf = document.querySelector(`.save-btn-profile`);
const nameValue = document.querySelector(`#firstname`);
const lastNameValue = document.querySelector(`#lastname`);
const mailValue = document.querySelector(`#mail`);
const mobileNameValue = document.querySelector(`.profile-name-frame`);
const mobilemailValue = document.querySelector(`.profile-mail-frame`);
const mobileProfilePic = document.querySelector(`.profile-img-frame`);

profileSwitch.addEventListener(`click`, () => {
	profileSwitch.style.backgroundColor = `#efebff`;
	linkSwitch.style.backgroundColor = `transparent`;
	profileSwitch.style.color = `#633cff`;
	linkSwitch.style.color = `#737373`;
	linkSide.style.display = `none`;
	profileSide.style.display = `flex`;
	linkIconColor.style.fill = `#737373`;
	profIconColor.style.fill = `#633cff`;
});

linkSwitch.addEventListener(`click`, () => {
	linkSwitch.style.backgroundColor = `#efebff`;
	profileSwitch.style.backgroundColor = `transparent`;
	linkSwitch.style.color = `#633cff`;
	profileSwitch.style.color = `#737373`;
	linkSide.style.display = `flex`;
	profileSide.style.display = `none`;
	linkIconColor.style.fill = `#633cff`;
	profIconColor.style.fill = `#737373`;
});

const fileInput = document.getElementById("upload");
const imageContainer = document.querySelector(`.upload-div`);
const imgText = document.querySelector(`.upload-text`);
const imgIconColor = document.querySelector(`#imgcolor`);
let imageUrl;
fileInput.addEventListener("change", function (e) {
	const file = e.target.files[0];

	if (file) {
		const reader = new FileReader();
		imgText.textContent = `Change Image`;
		imgText.style.color = `#fff`;
		imgIconColor.style.fill = `	#fff`;
		reader.onload = function (e) {
			imageUrl = e.target.result;
			imageContainer.style.backgroundImage = `url('${imageUrl}')`;
		};

		reader.readAsDataURL(file);
	}
});
saveBtnProf.addEventListener("click", finalVersion);

function finalVersion() {
	{
		const profError = document.querySelectorAll(".profile-error");
		const profInput = document.querySelectorAll(".profile-input-box");

		const showError = (index, condition) => {
			profError[index].style.display = condition ? "block" : "none";
			profInput[index].style.borderColor = condition ? "red" : "#D9D9D9";
		};

		const nameIsEmpty = nameValue.value === "";
		const lastNameIsEmpty = lastNameValue.value === "";

		showError(0, nameIsEmpty);
		showError(1, lastNameIsEmpty);

		if (!nameIsEmpty && !lastNameIsEmpty) {
			mobileNameValue.style.display = "block";
			mobilemailValue.style.display = "block";
			mobileNameValue.textContent = `${nameValue.value} ${lastNameValue.value}`;
			mobilemailValue.textContent = mailValue.value;

			if (imageUrl) {
				mobileProfilePic.style.display = "block";
				mobileProfilePic.style.backgroundImage = `url(${imageUrl})`;
			}
			alert.style.display = `block`;
			alert.textContent = `Your changes have been successfully saved!`;
			setTimeout(() => {
				alert.style.display = "none";
			}, 1000);
			const userProfile = {
				name: nameValue.value,
				lastName: lastNameValue.value,
				email: mailValue.value,
				imageUrl: imageUrl,
				info: mobileItems,
			};
			const userProfileJSON = JSON.stringify(userProfile);

			localStorage.setItem("userProfile", userProfileJSON);
		}
		console.log(mobileItems);
	}
}
// ------------------------- previe

const previewBtn = document.querySelectorAll(`#preview`);

const alert = document.querySelector(`.preview-text`);

previewBtn.forEach((btn) => {
	btn.addEventListener(`click`, () => {
		if (localStorage.getItem(`userProfile`)) {
			window.location.href = `preview.html`;
		} else {
			alert.style.display = `block`;
			alert.textContent = `Save profile details!`;
			setTimeout(() => {
				alert.style.display = "none";
			}, 1000);
		}
	});
});
