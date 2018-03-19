import styles from "../scss/style.scss";

// Encode and insert share url functionality
function urlEncode() {
	const encodedUrl = encodeURIComponent(window.location.href);

	const twBase = `https://twitter.com/intent/tweet?url=${encodedUrl}`;
	const fbBase = `http://www.facebook.com/sharer.php?u=${encodedUrl}`;

	const tw = document.getElementsByClassName('twShare');
	const fb = document.getElementsByClassName('fbShare');

	function addUrl(elem, str) {
		if (elem !== undefined) {
			for (let i = 0; i < elem.length; i += 1) {
				elem[i].setAttribute('href', str);
			}
		}
	}

	addUrl(tw, twBase);
	addUrl(fb, fbBase);
}
urlEncode();
