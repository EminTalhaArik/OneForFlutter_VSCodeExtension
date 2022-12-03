// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as cpanel from './cpanel/run';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// vscode.window.showInformationMessage('Hello World! ');

	const provider = new CodePanelViewProvider(context.extensionUri);
	
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	
	vscode.commands.registerCommand('code-panel.CodePanelView', () => {
		context.subscriptions.push(
			vscode.window.registerWebviewViewProvider(CodePanelViewProvider.viewType, provider));
	});
}

class CodePanelViewProvider implements vscode.WebviewViewProvider {

	public static readonly viewType = 'code-panel.CodePanelView';

	constructor(
		private readonly _extensionUri: vscode.Uri,
	) { }

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken,
	) {

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,
			enableForms: true,
			enableCommandUris:true,

			localResourceRoots: [
				this._extensionUri
			]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		webviewView.webview.onDidReceiveMessage(data => {
			// select text
			const active = vscode.window.activeTextEditor;
			if (!active) { return; } // null check

			const selection = active.selection;
			if (!selection) { return; } // null check

			switch (data.type) {
				// Javascript
				case 'FlatBtn':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('if'));
					});
					break;
				case 'jsSwitch':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('switch'));
					});
					break;
				case 'jsFor':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('for'));
					});
					break;
				case 'jsWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('while'));
					});
					break;
				case 'jsDoWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('dowhile'));
					});
					break;
				case 'jsFunction':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('function'));
					});
					break;
				case 'jsAsyncFunction':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('async_function'));
					});
					break;
				case 'jsClass':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('class'));
					});
					break;
				case 'jsGet':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('get'));
					});
					break;
				case 'jsPost':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('post'));
					});
					break;
				case 'jsJson':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('json'));
					});
					break;
				case 'jsTry':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('try'));
					});
					break;
				case 'jsHello':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.js('hello'));
					});
					break;
				
				// PHP
				case 'phpIF':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('if'));
					});
					break;
				case 'phpSwitch':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('switch'));
					});
					break;
				case 'phpFor':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('for'));
					});
					break;
				case 'phpWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('while'));
					});
					break;
				case 'phpDoWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('dowhile'));
					});
					break;
				case 'phpFunction':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('function'));
					});
					break;
				case 'phpAsyncFunction':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('async_function'));
					});
					break;
				case 'phpClass':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('class'));
					});
					break;
				case 'phpGet':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('get'));
					});
					break;
				case 'phpPost':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('post'));
					});
					break;
				case 'phpJson':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('json'));
					});
					break;
				case 'phpMail':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('mail'));
					});
					break;
				case 'phpTry':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('try'));
					});
					break;
				case 'phpHello':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.php('hello'));
					});
					break;
				
				//  Python
				case 'pyIF':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('if'));
					});
					break;
				case 'pyWith':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('with'));
					});
					break;
				case 'pyDictionary':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('dictionary'));
					});
					break;
				case 'pyFor':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('for'));
					});
					break;
				case 'pyWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('while'));
					});
					break;
				case 'pyDef':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('def'));
					});
					break;
				case 'pyClass':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('class'));
					});
					break;
				case 'pyGet':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('get'));
					});
					break;
				case 'pyPost':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('post'));
					});
					break;
				case 'pyJson':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('json'));
					});
					break;
				case 'pyTry':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('try'));
					});
					break;
				case 'pyHello':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.py('hello'));
					});
					break;
				
				//  Dart
				case 'dtIF':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('if'));
					});
					break;
				case 'dtSwitch':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('switch'));
					});
					break;
				case 'dtFor':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('for'));
					});
					break;
				case 'dtForEach':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('foreach'));
					});
					break;
				case 'dtWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('while'));
					});
					break;
				case 'dtDoWhile':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('dowhile'));
					});
					break;
				case 'dtFunction':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('function'));
					});
					break;
				case 'dtAssert':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('assert'));
					});
					break;
				case 'dtClass':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('class'));
					});
					break;
				case 'dtGet':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('get'));
					});
					break;
				case 'dtPost':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('post'));
					});
					break;
				case 'dtJson':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('json'));
					});
					break;
				case 'dtTry':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('try'));
					});
					break;
				case 'dtMain':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('main'));
					});
					break;
				case 'dtHello':
					active.edit(editBuilder => {
						const code: cpanel.CodeInterface = new cpanel.Code(this._extensionUri);
						editBuilder.replace(selection, code.dt('hello'));
					});
					break;
				
				// showPanel
				case 'showPanel':
					this.showPanel(webviewView.webview);
					break;
			}
		});

		vscode.window.onDidChangeActiveTextEditor((editor) => {
			this.showPanel(webviewView.webview);
		});
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// Do the same for the stylesheet.
		const styleBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap.min.css'));
		// const styleBootStrapIconUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap-icon', 'bootstrap-icons.css'));
		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));

		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		const scriptBootStrapUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'bootstrap.min.js'));
		const scriptMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));


		// Use a nonce to only allow a specific script to be run.
		const nonce = getNonce();
		const cpBody = getCodePanelBody();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self' data: ${webview.cspSource}; font-src 'self' data: ${webview.cspSource}; img-src 'self' data: ${webview.cspSource}; script-src 'nonce-${nonce}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${styleBootStrapUri}" rel="stylesheet">
				<link href="${styleMainUri}" rel="stylesheet">

				<title>Code Panel</title>
			</head>
			<body class="text-white" oncopy="return false;">
				${cpBody}
				<script nonce="${nonce}" src="${scriptBootStrapUri}"></script>
				<script nonce="${nonce}" src="${scriptMainUri}"></script>
			</body>
			</html>`;
	}

	private showPanel(webview: vscode.Webview) {
		const active = vscode.window.activeTextEditor;
		if (!active) return;
		const type = active.document.fileName.split('.').pop();
		webview.postMessage({ command: type });
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

function getCodePanelBody() {
	const htmlBody = `
    <div class="container m-2">
        <div class="pt-0 ps-1 pe-1 pb-0">
            <h3 class="m-0 mb-2">Code Select</h3>
			<select class="form-select form-select-sm bg-secondary text-white border-secondary mb-3 changeCodePanel">
				<option value="">Code choice</option>
				<option value="js">Javascript</option>
				<option value="php">PHP</option>
				<option value="py">Python</option>
				<option value="dt">Dart</option>
			</select>
		</div>

		<!--
			// ///////////////////////////////
			// Javascript Panel
			// ///////////////////////////////
		-->
        <div class="panel panel-primary panel-js">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsIF"><span class="panel-title">IF</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsSwitch"><span class="panel-title">Switch</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsFor"><span class="panel-title">For</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsWhile"><span class="panel-title">While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsDoWhile"><span class="panel-title">Do While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsFunction"><span class="panel-title">Function</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsAsyncFunction"><span class="panel-title">Async Function</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsClass"><span class="panel-title">Class</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsTry"><span class="panel-title">Try Catch</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>Net</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsGet"><span class="panel-title">GET</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsPost"><span class="panel-title">POST</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsJson"><span class="panel-title">JSON</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>ETC</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="jsHello"><span class="panel-title">Hello</span></a>
                    </div>
                </div>
            </div>
		</div>

		<!--
			// ///////////////////////////////
			// PHP Panel
			// ///////////////////////////////
		-->
        <div class="panel panel-primary panel-php">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpIF"><span class="panel-title">IF</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpSwitch"><span class="panel-title">Switch</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpFor"><span class="panel-title">For</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpWhile"><span class="panel-title">While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpDoWhile"><span class="panel-title">Do While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpFunction"><span class="panel-title">Function</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpClass"><span class="panel-title">Class</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpTry"><span class="panel-title">Try Catch</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>Net</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpGet"><span class="panel-title">GET</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpPost"><span class="panel-title">POST</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpJson"><span class="panel-title">JSON</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpMail"><span class="panel-title">Mail</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>ETC</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpHello"><span class="panel-title">Hello</span></a>
                    </div>
                </div>
            </div>

<!--
            <div class="panel-heading">
                <h3>MySQL</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpXXXXX"><i class="bi bi-list-columns"></i><span class="panel-title">List</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpXXXXX"><i class="bi bi-journal-plus"></i><span class="panel-title">New</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpXXXXX"><i class="bi bi-journal-text"></i><span class="panel-title">Update</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpXXXXX"><i class="bi bi-journal-x"></i><span class="panel-title">Delete</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="phpXXXXX"><i class="bi bi-server"></i><span class="panel-title">Connect</span></a>
                    </div>
                </div>
            </div>
-->
		</div>

		<!--
			// ///////////////////////////////
			// Python Panel
			// ///////////////////////////////
		-->
        <div class="panel panel-primary panel-py">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyIF"><span class="panel-title">IF</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyWith"><span class="panel-title">With</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyDictionary"><span class="panel-title">Dictionary</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyFor"><span class="panel-title">For</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyWhile"><span class="panel-title">While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyDef"><span class="panel-title">Def</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyClass"><span class="panel-title">Class</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyTry"><span class="panel-title">Try Catch</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>Net</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyGet"><span class="panel-title">GET</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyPost"><span class="panel-title">POST</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyJson"><span class="panel-title">JSON</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>ETC</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="pyHello"><span class="panel-title">Hello</span></a>
                    </div>
                </div>
            </div>
		</div>

		<!--
			// ///////////////////////////////
			// Dart Panel
			// ///////////////////////////////
		-->
		<div class="panel panel-primary panel-dt">
            <div class="panel-heading">
                <h3>Usual</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtIF"><span class="panel-title">IF</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtAssert"><span class="panel-title">Assert</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtFor"><span class="panel-title">For</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtForEach"><span class="panel-title">For Each</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtWhile"><span class="panel-title">While</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtClass"><span class="panel-title">Class</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtTry"><span class="panel-title">Try Catch</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtMain"><span class="panel-title">Main</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>Net</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtGet"><span class="panel-title">GET</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtPost"><span class="panel-title">POST</span></a>
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtJson"><span class="panel-title">JSON</span></a>
                    </div>
                </div>
            </div>

            <div class="panel-heading">
                <h3>ETC</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-12 col-xs-12 col-md-12">
                        <a href="#" class="btn btn-secondary btn-sm m-1" role="button" data-act="dtHello"><span class="panel-title">Hello</span></a>
                    </div>
                </div>
            </div>
		</div>
    </div><div id="check"></div>
	`;
	
	return htmlBody;
}

// this method is called when your extension is deactivated
export function deactivate() {}
