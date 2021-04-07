// Octopus REST API v2021.2.1387

import { PropertyMetadata } from "./property-metadata";

/**
 *
 * @export
 * @interface TypeMetadata
 */
export interface TypeMetadata {
  /**
   *
   * @type {string}
   * @memberof TypeMetadata
   */
  Name?: string;
  /**
   *
   * @type {Array<PropertyMetadata>}
   * @memberof TypeMetadata
   */
  Properties?: Array<PropertyMetadata>;
}
