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
exports.ListBaseHandler = void 0;
const imperative_1 = require("@zowe/imperative");
/**
 * Command handler for listing profile args
 * @export
 * @class ProfileArgsHandler
 * @implements {ICommandHandler}
 */
class ListBaseHandler {
    /**
     * Process a command in the list command group.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof ProfileArgsHandler
     */
    process(params) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mParams = params;
            // use the user's zosmf profile to create a session to the desired zosmf subsystem
            const session = yield this.createSessCfgFromArgs(params.arguments);
            this.processWithSession(params, session);
        });
    }
    /**
     * Given command line arguments, create a REST Client Session.
     * @static
     * @param {ICommandArguments} args - The arguments specified by the user
     * @param {boolean} doPrompting - Whether to prompt for missing arguments (defaults to true)
     * @returns {Session} - A session for usage with the sample API
     */
    createSessCfgFromArgs(args, doPrompting = true) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create session config with connection info to access service
            const sessCfg = {
                hostname: args.host,
                port: args.port,
                basePath: args.basePath,
                rejectUnauthorized: args.rejectUnauthorized,
                protocol: args.protocol || "https"
            };
            // Add credentials to session config and prompt the user for any missing arguments
            const sessCfgWithCreds = yield imperative_1.ConnectionPropsForSessCfg.addPropsOrPrompt(sessCfg, args, { doPrompting, parms: this.mParams });
            return new imperative_1.Session(sessCfgWithCreds);
        });
    }
}
exports.ListBaseHandler = ListBaseHandler;
//# sourceMappingURL=ListBaseHandler.js.map