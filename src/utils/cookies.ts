export function removeCookie(cname: string): void {	
	document.cookie = cname + "=;";
}

export function setCookie(cname: string, cvalue: string): void {
	document.cookie = cname + "=" + cvalue;
}

export function getCookie(cname: string): string | null {
	const name = cname + "=";
	const ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

export function checkCookie(): string | null {
	const token = getCookie("token");
	if (token !== "" || token !== null || token!==undefined) {
		return token;
	} else {
		return null;
	}
}
