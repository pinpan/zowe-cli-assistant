/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
import { ICommandDefinition } from "@zowe/imperative";
/**
 * Command one [object] defintion. This definition is of imperative type "command" and therefore must have a
 * command handler (which performs the "work" for this command).
 *
 * In this case, "command-with-positionals" is a command that requires positional arguments
 *
 * Property Summary:
 * =================
 * "name" of the [object]. Should be a noun (e.g. data-set)
 * "aliases" normally contains a shortened form of the command
 * "summary" will display when issuing the help on this [objects] [action]
 * "type" is "command" which means a handler is required
 * "handler" is the file path to the handler (does the work)
 * "positionals" is an array of positional parameters
 */
export declare const CommandWithPositionalsDefinition: ICommandDefinition;