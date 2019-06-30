
function App() {
	if (!(this instanceof App)) {
		return new App();
	}
}

App.prototype = {
	start: function () {
		this.bridge = window.Bridge;
		this.bridge.behaviour = {
			setCompleteCallback: function (callback) {
				completeCallback = callback;
			},

			execNativeToJs: function (commandId, result, error) {
				if (completeCallback) {
					completeCallback(commandId, result, error);
				}
			},

			execute: function (command) {
				const hsibridge = window.webkit.messageHandlers.hsibridge;
				if (!hsibridge) {
					throw new TypeError('MessageHandler named hsibridge is unavailable.');
				}
				hsibridge.postMessage(JSON.stringify(command));
			}
		};
		this.bridge.setBehavior(this.bridge.behaviour);
	},
	on: function (module, eventName, data) {
		if (module == 'capture_queue') {
			window.App.camera.on(eventName, data);
		}
	},
	onChangeState: function(event) {
		let href = event.target.href,
			routeTarget = document.getElementsByClassName('container')[0].getElementsByClassName('route')[0],
			routeName = event.target.getAttribute('href').split('/').pop();

		event.stopPropagation();
		event.preventDefault();

		function render(data) {
			routeTarget.innerHTML = data.content;
			history.pushState(data.content, event.target.textContent, href);
		}

		fetch(`javascripts/${routeName}/index.json`).then(async response => {
			return { url: response.url, config: await response.json() };
		}).then( (json) => {
			let config = json.config,
				url = new URL(json.url),
				routeCss, routeJs, routeHtml;

			if (config.css) routeCss = new URL(`${url.origin}/javascripts/${routeName}/${config.css}`);
			if (config.js) routeJs = new URL(`${url.origin}/javascripts/${routeName}/${config.js}`);
			if (config.html) routeHtml = new URL(`${url.origin}/javascripts/${routeName}/${config.html}`);

			routeJs && this.appendScript(routeJs.href);
			routeCss && this.appendStyle(routeCss.href);
			routeHtml && fetch(routeHtml).then(res => res.text()).then(html => render({content:html}));
		});
	},
	appendScript: (filepath) => {
		if ($('head script[src="' + filepath + '"]').length > 0)
			return;

		var el = document.createElement('script');
		el.setAttribute("src", filepath);
		$('head').append(el);
	},

	appendStyle: (filepath) => {
		if ($('head link[href="' + filepath + '"]').length > 0)
			return;

		var el = document.createElement('link');
		el.setAttribute("type", "text/css");
		el.setAttribute("rel", "Stylesheet");
		el.setAttribute("href", filepath);
		$('head').append(el);
	}
};
window.App = App();
