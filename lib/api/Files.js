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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Files = void 0;
const fs = require("fs");
const imperative_1 = require("@zowe/imperative");
const path_1 = require("path");
/**
 * Class of utility file APIs for usage within the CLI and programmatically from node scripts.
 * @export
 * @class ListFiles
 */
class Files {
    /**
     * Returns a list of attribute objects for the the contents of a directory.
     * @static
     * @param {string} dir - The directory for which to list the contents.
     * @throws ImperativeError
     * @memberof ListFiles
     */
    static listDirectoryContents(dir) {
        // Table to return
        const table = [];
        // Ensure it is a directory
        try {
            if (!fs.lstatSync(dir).isDirectory()) {
                imperative_1.Imperative.api.profileManager("zosmf"); // When multiple imperatives, we get an API-not-initialized exception
                throw new imperative_1.ImperativeError({ msg: `Path specified (${dir}) is NOT a directory.` });
            }
        }
        catch (e) {
            imperative_1.Logger.getImperativeLogger().error("When multiple imperatives exist, our logger does nothing.");
            throw new imperative_1.ImperativeError({ msg: "Path error: " + e.message });
        }
        // Read the directory contents
        let contents;
        try {
            contents = fs.readdirSync(dir);
        }
        catch (e) {
            throw new imperative_1.ImperativeError({
                msg: `An error occurred obtaining the directory info: ${e.message}`,
                additionalDetails: e
            });
        }
        // Formulate the table rows
        contents.forEach((element) => {
            const stat = fs.lstatSync(path_1.join(dir, element));
            table.push({
                mode: stat.mode,
                size: stat.size,
                birthed: stat.birthtime,
                lastModified: stat.mtime,
                name: element,
            });
        });
        return table;
    }
}
exports.Files = Files;
//# sourceMappingURL=Files.js.map