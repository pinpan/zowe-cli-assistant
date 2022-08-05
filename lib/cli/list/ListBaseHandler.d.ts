/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
import { ICommandHandler, IHandlerParameters, Session } from "@zowe/imperative";
/**
 * Command handler for listing profile args
 * @export
 * @class ProfileArgsHandler
 * @implements {ICommandHandler}
 */
export declare abstract class ListBaseHandler implements ICommandHandler {
    /**
     * Command parameters object
     */
    private mParams;
    /**
     * Process a command in the list command group.
     * @param {IHandlerParameters} params
     * @returns {Promise<void>}
     * @memberof ProfileArgsHandler
     */
    process(params: IHandlerParameters): Promise<void>;
    /**
     * Process a command given its parameters and an already loaded session.
     * @abstract
     * @param {IHandlerParameters} params
     * @param {Session} session
     * @returns {Promise<void>}
     * @memberof ProfileArgsHandler
     */
    abstract processWithSession(params: IHandlerParameters, session: Session): Promise<void>;
    /**
     * Given command line arguments, create a REST Client Session.
     * @static
     * @param {ICommandArguments} args - The arguments specified by the user
     * @param {boolean} doPrompting - Whether to prompt for missing arguments (defaults to true)
     * @returns {Session} - A session for usage with the sample API
     */
    private createSessCfgFromArgs;
}
