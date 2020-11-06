/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Neil Enns. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as logger from "winston";

logger.remove(logger.transports.Console); // remove the default options

logger.configure({
  level: process.env.LOG_LEVEL ?? "info",
  transports: [new logger.transports.Console()],
  format: logger.format.combine(logger.format.prettyPrint()),
});

export default logger;
