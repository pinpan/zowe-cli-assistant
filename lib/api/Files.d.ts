/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
/**
 * Class of utility file APIs for usage within the CLI and programmatically from node scripts.
 * @export
 * @class ListFiles
 */
export declare class Files {
    /**
     * Returns a list of attribute objects for the the contents of a directory.
     * @static
     * @param {string} dir - The directory for which to list the contents.
     * @throws ImperativeError
     * @memberof ListFiles
     */
    static listDirectoryContents(dir: string): any[];
}
