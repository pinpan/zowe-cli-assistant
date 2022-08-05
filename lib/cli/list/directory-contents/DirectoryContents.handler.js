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
const imperative_1 = require("@zowe/imperative");
const Files_1 = require("../../../api/Files");
const zosmf_for_zowe_sdk_1 = require("@zowe/zosmf-for-zowe-sdk");
const ListBaseHandler_1 = require("../ListBaseHandler");
/**
 * Command handler for listing directory contents
 * @export
 * @class DirectoryContentsHandler
 * @implements {ICommandHandler}
 */
class DirectoryContentsHandler extends ListBaseHandler_1.ListBaseHandler {
    /**
     * Process the list directory contents command.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof DirectoryContentsHandler
     */
    processWithSession(params, session) {
        return __awaiter(this, void 0, void 0, function* () {
            /* We call a Zowe CLI API, just to show that it can be done.
             * We chose zosmf check status, since it is the simplest.
             */
            try {
                const zosResponse = yield zosmf_for_zowe_sdk_1.CheckStatus.getZosmfInfo(session);
                params.response.console.log("We just got a valid z/OSMF status response from system = " +
                    zosResponse.zosmf_hostname + "\n");
            }
            catch (except) {
                params.response.console.log("We just got an exception calling Zowe CLI's CheckStatus.getZosmfInfo API.\n" +
                    "Reason = " + except.message +
                    "\nWe will continue on anyway.\n");
            }
            // Extract the directory specified
            let dir = params.arguments.directory;
            if (dir == null) {
                dir = ".";
            }
            // Set the message
            params.response.data.setMessage(`Listing contents of "${dir}"`);
            // Get the directory contents
            const contents = Files_1.Files.listDirectoryContents(dir);
            params.response.data.setObj(contents);
            params.response.console.log(Buffer.from(imperative_1.TextUtils.getTable(contents, "blue", DirectoryContentsHandler.MAX_WIDTH, true, false, false)));
        });
    }
}
exports.default = DirectoryContentsHandler;
/**
 * Max table width
 * @static
 * @memberof DirectoryContentsHandler
 */
DirectoryContentsHandler.MAX_WIDTH = 9999;
//# sourceMappingURL=DirectoryContents.handler.js.map