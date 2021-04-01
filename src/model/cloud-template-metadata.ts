// Octopus REST API v2021.2.1290

import { Metadata } from "./metadata";

/**
 *
 * @export
 * @interface CloudTemplateMetadata
 */
export interface CloudTemplateMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof CloudTemplateMetadata
   */
  Metadata?: Metadata;
  /**
   *
   * @type {object}
   * @memberof CloudTemplateMetadata
   */
  Values?: object;
}
