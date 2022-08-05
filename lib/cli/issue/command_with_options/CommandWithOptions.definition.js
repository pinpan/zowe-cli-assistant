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
exports.CommandWithOptionsDefinition = void 0;
/**
 * Command one [object] defintion. This definition is of imperative type "command" and therefore must have a
 * command handler (which performs the "work" for this command).
 *
 * In this case, "command-with-options" will echo options specified on the command.
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
exports.CommandWithOptionsDefinition = {
    name: "command-with-options",
    aliases: ["cwo"],
    summary: "[object] command-with-options requires options",
    description: "[objects] in Zowe CLI are the entities on which [actions] are perfomed. [objects] are always nouns. " +
        "For example, for command \"zowe zos-files delete data-set\", the [object] is \"data-set\".\n\nFor this command, " +
        "we require options to be specified.",
    type: "command",
    handler: __dirname + "/CommandWithOptions.handler",
    options: [
        {
            name: "use-the-string",
            description: "Boolean flag, that if specified, requires that you also specify a string for option \"the string\"",
            type: "boolean",
            implies: ["the-string"]
        },
        {
            name: "the-string",
            description: "A string type option that is required if \"use-the-string\" is specified.",
            type: "string",
        },
        {
            name: "required-number",
            description: "A required number.",
            type: "number",
            required: true
        }
    ]
};
//# sourceMappingURL=CommandWithOptions.definition.js.map