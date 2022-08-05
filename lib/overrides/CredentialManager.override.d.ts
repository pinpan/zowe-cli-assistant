/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */
import { Logger, SecureCredential } from "@zowe/imperative";
declare const _default: {
    new (service: string, displayName: string): {
        consoleLog: Logger;
        deleteCredentials(account: string): Promise<void>;
        loadCredentials(account: string): Promise<string>;
        saveCredentials(account: string, credentials: SecureCredential): Promise<void>;
        initialize?(): Promise<void>;
        readonly service: string;
        displayName: any;
        readonly name: string;
        delete(account: string): Promise<void>;
        load(account: string, optional?: boolean): Promise<string>;
        save(account: string, secureValue: string): Promise<void>;
        secureErrorDetails(): string;
        readonly possibleSolutions: string[];
    };
};
export = _default;
