//@ts-check

(function () {
    const vscode = acquireVsCodeApi();

    window.addEventListener('message', event => {
        const v = event.data.command;
        
        selectPanel(v);
        showPanel(v);
    });

    function init() {
        vscode.postMessage({type: 'showPanel'});
    }

    function selectPanel(v) {
        document.querySelectorAll('.changeCodePanel option').forEach(elm => {
            elm.removeAttribute("selected");
        });
        if(v === 'js') document.querySelector('.changeCodePanel').querySelector("option[value='js']").setAttribute("selected", "selected");
        else if(v === 'php') document.querySelector('.changeCodePanel').querySelector("option[value='php']").setAttribute("selected", "selected");
        else if (v === 'py') document.querySelector('.changeCodePanel').querySelector("option[value='py']").setAttribute("selected", "selected");
    }

    function showPanel(v) {
        document.querySelectorAll('.panel').forEach(function(elm) {
            elm.style.display = 'none';
        });
        if(v === 'js') document.querySelector('.panel-js').style.display = 'block';
        else if(v === 'php') document.querySelector('.panel-php').style.display = 'block';
        else if (v === 'py') document.querySelector('.panel-py').style.display = 'block';
    }

    var FunctionList = {
        // javascript
        'jsIF': function () { vscode.postMessage({ type: 'jsIF' }); },
        'jsSwitch': function () { vscode.postMessage({ type: 'jsSwitch' }); },
        'jsFor': function () { vscode.postMessage({ type: 'jsFor' }); },
        'jsWhile': function () { vscode.postMessage({ type: 'jsWhile' }); },
        'jsDoWhile': function () { vscode.postMessage({ type: 'jsDoWhile' }); },
        'jsFunction': function () { vscode.postMessage({ type: 'jsFunction' }); },
        'jsAsyncFunction': function () { vscode.postMessage({ type: 'jsAsyncFunction' }); },
        'jsClass': function () { vscode.postMessage({ type: 'jsClass' }); },
        'jsGet': function () { vscode.postMessage({ type: 'jsGet' }); },
        'jsPost': function () { vscode.postMessage({ type: 'jsPost' }); },
        'jsJson': function () { vscode.postMessage({ type: 'jsJson' }); },
        'jsTry': function () { vscode.postMessage({ type: 'jsTry' }); },
        'jsHello': function () { vscode.postMessage({ type: 'jsHello' }); },
            
        // php
        'phpIF': function () { vscode.postMessage({ type: 'phpIF' }); },
        'phpSwitch': function () { vscode.postMessage({ type: 'phpSwitch' }); },
        'phpFor': function () { vscode.postMessage({ type: 'phpFor' }); },
        'phpWhile': function () { vscode.postMessage({ type: 'phpWhile' }); },
        'phpDoWhile': function () { vscode.postMessage({ type: 'phpDoWhile' }); },
        'phpFunction': function () { vscode.postMessage({ type: 'phpFunction' }); },
        'phpClass': function () { vscode.postMessage({ type: 'phpClass' }); },
        'phpGet': function () { vscode.postMessage({ type: 'phpGet' }); },
        'phpPost': function () { vscode.postMessage({ type: 'phpPost' }); },
        'phpJson': function () { vscode.postMessage({ type: 'phpJson' }); },
        'phpMail': function () { vscode.postMessage({ type: 'phpMail' }); },
        'phpTry': function () { vscode.postMessage({ type: 'phpTry' }); },
        'phpHello': function () { vscode.postMessage({ type: 'phpHello' }); },
            
        // python
        'pyIF': function () { vscode.postMessage({ type: 'pyIF' }); },
        'pyWith': function () { vscode.postMessage({ type: 'pyWith' }); },
        'pyDictionary': function () { vscode.postMessage({ type: 'pyDictionary' }); },
        'pyFor': function () { vscode.postMessage({ type: 'pyFor' }); },
        'pyWhile': function () { vscode.postMessage({ type: 'pyWhile' }); },
        'pyDef': function () { vscode.postMessage({ type: 'pyDef' }); },
        'pyClass': function () { vscode.postMessage({ type: 'pyClass' }); },
        'pyGet': function () { vscode.postMessage({ type: 'pyGet' }); },
        'pyPost': function () { vscode.postMessage({ type: 'pyPost' }); },
        'pyJson': function () { vscode.postMessage({ type: 'pyJson' }); },
        'pyTry': function () { vscode.postMessage({ type: 'pyTry' }); },
        'pyHello': function () { vscode.postMessage({ type: 'pyHello' }); }
    };

    document.querySelector('.changeCodePanel').addEventListener('change', (event) => {
        showPanel(event.target.value);
        switch (event.target.value) {
            case 'js':
                break;
            case 'php':
                break;
            case 'py':
                break;
        }
    }, false);

    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            if (typeof FunctionList[btn.dataset.act] === 'function') FunctionList[btn.dataset.act]();
        }, false);
    });

    init();
}());
