import * as fs from 'fs';
import { Uri } from 'vscode';

export interface CodeInterface {
    _extensionUri: Uri;
    js(code_type: string): string;
    php(code_type: string): string;
    py(code_type: string): string;
}

export class Code implements CodeInterface {
    constructor(readonly _extensionUri: Uri) { }

    private path(type: string, file: string) {
        switch (type) {
            case 'js':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'php':
                return __dirname + '/code/' + type + '/' + file + '.txt';
            case 'py':
                return __dirname + '/code/' + type + '/' + file + '.txt';
        }

        return __dirname + '/code/js/hello.txt';
    }

    private setup_database(type: string) {
        let path = null;
        switch (type) {
            case 'php':
                path = __dirname;
                break;
        }

        return path;
    }

    // Path conditions
    private ListPath: {[key: string]: {[key: string]: boolean}} = {
        // javascript
        'js':{'if': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'async_function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true},
        
        // php
        'php': { 'if': true, 'switch': true, 'for': true, 'while': true, 'dowhile': true, 'function': true, 'class': true, 'get': true, 'post': true, 'json': true, 'mail': true, 'try': true, 'hello': true },
        
        // python
        'py':{'if': true, 'dictionary': true, 'with': true, 'for': true, 'while': true, 'def': true, 'class': true, 'get': true, 'post': true, 'json': true, 'try': true, 'hello': true}
    };

    // Javascript
    js(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('js', code_type))) code = fs.readFileSync(this.path('js', code_type), 'utf-8');

        return code;
    }

    // PHP
    php(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('php', code_type))) code = fs.readFileSync(this.path('php', code_type), 'utf-8');

        return code;
    }

    //  Python
    py(code_type: string) {
        let code = '';

        if (fs.existsSync(this.path('py', code_type))) code = fs.readFileSync(this.path('py', code_type), 'utf-8');

        return code;
    }
}