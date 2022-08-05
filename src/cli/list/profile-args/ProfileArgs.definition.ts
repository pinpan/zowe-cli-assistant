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
import { ProfileConstants } from "../../../api/ProfileConstants";
/**
 * Command one [object] definition. This definition is of imperative type "command" and therefore must have a
 * command handler (which performs the "work" for this command).
 *
 * In this case, "error-messages" will simply print console error (stderr) messages.
 *
 * Property Summary:
 * =================
 * "name" of the [object]. Should be a noun (e.g. data-set)
 * "aliases" normally contains a shortened form of the command
 * "summary" will display when issuing the help on this [objects] [action]
 * "type" is "command" which means a handler is required
 * "handler" is the file path to the handler (does the work)
 * "options" an array of options
 */
export const ProfileArgsDefinition: ICommandDefinition = {
    name: "profile-args",
    aliases: ["pa"],
    summary: "Lists profile args",
    description: "[objects] in Zowe CLI are the entities on which [actions] are performed. [objects] are always nouns. " +
        "For example, for command \"zowe zos-files delete data-set\", the [object] is \"data-set\".\n\nFor this command, " +
        "we list contents of the specified directory.",
    type: "command",
    handler: __dirname + "/ProfileArgs.handler",
    profile: {
        optional: ["sample"],
    },
    options: [...ProfileConstants.SAMPLE_CONNECTION_OPTIONS]
};
