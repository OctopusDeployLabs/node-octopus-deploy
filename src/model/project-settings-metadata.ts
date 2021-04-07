// Octopus REST API v2021.2.1387

import { Metadata } from "./metadata";

/**
 *
 * @export
 * @interface ProjectSettingsMetadata
 */
export interface ProjectSettingsMetadata {
  /**
   *
   * @type {string}
   * @memberof ProjectSettingsMetadata
   */
  ExtensionId?: string;
  /**
   *
   * @type {Metadata}
   * @memberof ProjectSettingsMetadata
   */
  Metadata?: Metadata;
}
