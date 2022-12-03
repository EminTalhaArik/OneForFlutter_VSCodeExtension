"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const fs = require("fs");
class Code {
    constructor(_extensionUri) {
        this._extensionUri = _extensionUri;
        // Path conditions
        this.ListPath = {
            // javascript
            'js': { 'FlatButton': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'async_function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true },
            // php
            'php': { 'if': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'mail': true, 'try': true, 'hello': true },
            // python
            'py': { 'if': true, 'dictionary': true, 'with': true, 'for': true, 'while': true, 'def': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true },
            // dart
            'dt': { 'if': true, 'switch': true, 'for': true, 'foreach': true, 'while': true, 'dowhile': true, 'function': true, 'assert': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'main': true, 'hello': true }
        };
    }
    path(type, file) {
        switch (type) {
            case 'js':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'php':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'py':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'dt':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }
        return __dirname + '/code/js/hello.txt';
    }
    setup_database(type) {
        let path = null;
        switch (type) {
            case 'php':
                path = __dirname;
                break;
        }
        return path;
    }
    // Javascript
    js(code_type) {
        let code = '';
        if (fs.existsSync(this.path('js', code_type)))
            code = fs.readFileSync(this.path('js', code_type), 'utf-8');
        return code;
    }
    // PHP
    php(code_type) {
        let code = '';
        if (fs.existsSync(this.path('php', code_type)))
            code = fs.readFileSync(this.path('php', code_type), 'utf-8');
        return code;
    }
    //  Python
    py(code_type) {
        let code = '';
        if (fs.existsSync(this.path('py', code_type)))
            code = fs.readFileSync(this.path('py', code_type), 'utf-8');
        return code;
    }
    //  Dart
    dt(code_type) {
        let code = '';
        if (fs.existsSync(this.path('dt', code_type)))
            code = fs.readFileSync(this.path('dt', code_type), 'utf-8');
        return code;
    }
}
exports.Code = Code;
//# sourceMappingURL=run.js.map