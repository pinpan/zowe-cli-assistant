"use strict";
/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class CommandWithOptionsHandler {
    process(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Log the command issued and set the API message (for JSON response)
            const msg = `"zowe ${params.arguments._.join(" ")}" command issued!`;
            params.response.data.setMessage(msg);
            params.response.console.log(msg);
            // If "use-the-string" (notice that hyphenated words are converted to camel case) is specified, print the string
            if (params.arguments.useTheString) {
                params.response.console.log(`The string specified:\n"${params.arguments.theString}"`);
            }
            // Print the number specified
            params.response.console.log(`The number specified was "${params.arguments.requiredNumber}".`);
        });
    }
}
exports.default = CommandWithOptionsHandler;
//# sourceMappingURL=CommandWithOptions.handler.js.map