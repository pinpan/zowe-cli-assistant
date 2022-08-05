/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
import { IHandlerParameters, Session } from "@zowe/imperative";
import { ListBaseHandler } from "../ListBaseHandler";
/**
 * Command handler for listing directory contents
 * @export
 * @class DirectoryContentsHandler
 * @implements {ICommandHandler}
 */
export default class DirectoryContentsHandler extends ListBaseHandler {
    /**
     * Max table width
     * @static
     * @memberof DirectoryContentsHandler
     */
    static readonly MAX_WIDTH = 9999;
    /**
     * Process the list directory contents command.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof DirectoryContentsHandler
     */
    processWithSession(params: IHandlerParameters, session: Session): Promise<void>;
}
