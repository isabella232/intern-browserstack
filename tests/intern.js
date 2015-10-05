define({
	proxyPort: 9000,

	proxyUrl: 'http://localhost:9000/',

	capabilities: {
    build: 'build',
		'browserstack.selenium-version': '2.45.0'
	},

	environments: [
		{ browser: 'Opera', browser_version: '12.16', os: 'Windows', os_version: '8.1' },
		{ browser: 'Firefox', browser_version: '40.0', os: 'Windows', os_version: 'XP' },
		{ browser: 'IE', browser_version: '8.0', os: 'Windows', os_version: '7' },
		{ browser: 'Chrome', browser_version: '44.0', os: 'OS X', os_version: 'Yosemite' }
	],

	maxConcurrency: 2,

	tunnel: 'BrowserStackTunnel',
	//tunnel: 'NullTunnel',

	tunnelOptions: {
	  verbose: true,
	  username: "<BrowserStack-username>",
	  accessKey: "<BrowserStack-accessKey>"
	},

	reporters: [ 'Console' ],

	loaderOptions: {
		packages: null
	},

	suites: null,

	functionalSuites: [ 'tests/utils' ],

	excludeInstrumentation: /^(tests|node_modules)\//
});
