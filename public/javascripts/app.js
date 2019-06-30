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
	onChangeState: function (event) {
		let href = event.target.href,
			routeTarget = document.getElementsByClassName('container')[0].getElementsByClassName('route')[0],
			routeName = event.target.getAttribute('href').split('/').pop();
		
		event.stopPropagation();
		event.preventDefault();

		function updateContent(data) {
			routeTarget.innerHTML = data.content;
			history.pushState(data.content, event.target.textContent, href);
		}

		fetch(href).then(function (response) {
            return response.text();
        }).then(function (data) {
            updateContent({
				content: data
			});
        });
	}
};
window.App = App();
