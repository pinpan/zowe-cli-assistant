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
//import { DataSetsDefinition } from "./data-sets/DataSets.definition";
const AssistantDefinition: ICommandDefinition = {
    name: "assistant"
    , summary: "Initialize Zowe CLI Assistant"
    , description: "Parse and cache available commands syntax and structur to assist users while typing. Display default settings and variables set during previous sessions. Allow interactive settings modification."
    , type: "group"
    , children: [Init, OnOffDefinition]
};

export = AssistantDefinition;