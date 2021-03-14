const live2d_path = "https://cdn.jsdelivr.net/gh/q1qe/cdn@main/live2d/";
const tips_path = "https://cdn.jsdelivr.net/gh/q1qe/cdn@main/live2d/";

function loadExternalResource(url, type) {
	return new Promise((resolve, reject) = > {
		let tag;
		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url
		} else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url
		}
		if (tag) {
			tag.onload = () = > resolve(url);
			tag.onerror = () = > reject(url);
			document.head.appendChild(tag)
		}
	})
}
Promise.all([loadExternalResource(live2d_path + "waifu.min.css", "css"), loadExternalResource(live2d_path + "live2d.min.js", "js"), loadExternalResource(live2d_path + "waifu-tips.min.js", "js")]).then(() = > {
	initWidget({
		waifuPath: tips_path + "waifu-tips.min.json",
		apiPath: "https://q1qe.cn/wp-content/themes/Sakurairo/live2d/live2d_api",
	})
});
