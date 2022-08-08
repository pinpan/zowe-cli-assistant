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
//import { ProfileConstants } from "./api/ProfileConstants";
const config = {
    commandModuleGlobs: ["**/cli/*/*.definition!(.d).*s"],
    pluginHealthCheck: __dirname + "/healthCheck.Handler",
    pluginSummary: "Zowe CLI command typing assistant",
    pluginAliases: ["zcta"],
    rootCommandDescription: "Welcome to the Assistant plug-in for Zowe CLI!\n\n This plug-in " +
        "(& CLI) follows the Zowe CLI command syntax 'zowe [group] [action] [object] [options]'. " +
        "Where, in the case of the plugin, " +
        "the [group] is the package.json name, " +
        "the [actions] are defined in the project under 'src/cli/', " +
        "& the [objects] (definitions & handler) are defined in the project under 'src/cli/'.",
    productDisplayName: "Zowe CLI Assistant",
    name: "zowe-cli-assistant",
};
module.exports = config;
//# sourceMappingURL=imperative.js.map