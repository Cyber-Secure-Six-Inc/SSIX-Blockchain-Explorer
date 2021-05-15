var api = 'https://wallet.cybersecuresix.com/services/node_web';
var apiList = ["http://65.21.159.250:8200", "http://51.15.252.228:32348"];

var blockTargetInterval = 240;
var coinUnits = 10;
var symbol = 'SSIX';
var refreshDelay = 30000;
var blocksPerPage = 20;
var whiteTheme = "css/light.css";
var nightTheme = "css/dark.css";
var addressPattern = new RegExp("^K[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$");
// pools stats by MainCoins
var poolsStat = 
	[
		["karbo.hashvault.pro", "https://karbo.hashvault.pro/api/pool/stats"],
		["cnpool.cc/krb", "https://cnpool.cc/api/krb/stats"]
    ];

	