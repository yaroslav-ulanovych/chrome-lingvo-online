chrome.contextMenus.create({
	title: "Lingvo Online",
	contexts: ["selection"],
	onclick: function(info, tab) {
		var url = "http://www.lingvo.ua/ru/Translate/en-ru/" + encodeURIComponent(info.selectionText);
		chrome.tabs.create({
			url: url
		});
	}
});