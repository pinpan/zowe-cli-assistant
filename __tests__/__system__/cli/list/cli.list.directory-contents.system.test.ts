/**
 * This program and the accompanying materials are made available and may be used, at your option, under either:
 * * Eclipse Public License v2.0, available at https://www.eclipse.org/legal/epl-v20.html, OR
 * * Apache License, version 2.0, available at http://www.apache.org/licenses/LICENSE-2.0
 *
 * SPDX-License-Identifier: EPL-2.0 OR Apache-2.0
 *
 * Copyright Contributors to the Zowe Project.
 */

import { ITestEnvironment, TestEnvironment, runCliScript } from "@zowe/cli-test-utils";
import { ITestPropertiesSchema } from "../../../__src__/environment/doc/ITestPropertiesSchema";

// Test environment will be populated in the "beforeAll"
let TEST_ENVIRONMENT: ITestEnvironment<ITestPropertiesSchema>;

describe("zowe-cli-sample list directory-contents", () => {

    // Create the unique test environment
    beforeAll(async () => {
        TEST_ENVIRONMENT = await TestEnvironment.setUp({
            testName: "list_directory_command",
            installPlugin: true,
            tempProfileTypes: ["zosmf"]
        });
    });

    afterAll(async () => {
        await TestEnvironment.cleanUp(TEST_ENVIRONMENT);
    });

    it("should list the contents of the example directory", () => {
        const response = runCliScript(__dirname + "/__scripts__/list_directory-contents.sh", TEST_ENVIRONMENT,
            [__dirname + "/../../../__resources__/example_directory"]);

        expect(response.stderr.toString()).toBe("");
        expect(response.status).toBe(0);
        expect(response.stdout.toString()).toContain("We just got a valid z/OSMF status response");
        expect(response.stdout.toString()).toContain("ExampleFile.txt");
        expect(response.stdout.toString()).toContain("ExampleFolder");
    });
});
