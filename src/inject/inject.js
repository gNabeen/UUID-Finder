chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			var n = "";
			if (document.documentElement.innerHTML.indexOf('uuid":"') >= 0 && document.documentElement.innerHTML.split('uuid":"')[1].split('"')[0].split("-").length > 1)
				n = document.documentElement.innerHTML.split('uuid":"')[1].split('"')[0];
			else if (document.documentElement.innerHTML.indexOf('pageNameDetailed":"') >= 0 && document.documentElement.innerHTML.split('pageNameDetailed":"')[1].split('"')[0].split("-").length > 1)
				n = document.documentElement.innerHTML.split('pageNameDetailed":"')[1].split('"')[0];
			else
				n = "This url is not supported!"
			var toolbarHeight = 50;

			var div = document.createElement("div");
			div.id = "uuidToolbar";
			div.textContent = n;

			var st = div.style;
			st.top = "0px";
			st.left = "0px";
			st.width = "100%";
			st.height = toolbarHeight + "px";
			st.background = "#C2E2FF";
			st.color = "red";
			st.fontStyle = "blod";
			st.fontSize = "20px"
			st.position = "fixed";
			st.border = "2px solid lightblue";
			st.padding = "10px 0";
			st.display = "flex";
			st.justifyContent = "center";

			document.body.style.webkitTransform = "translateY(" + toolbarHeight + "px)";
			document.documentElement.appendChild(div);

		}
	}, 10);
});