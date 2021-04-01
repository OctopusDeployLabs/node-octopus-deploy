// Octopus REST API v2021.2.1290

import { ConfigurationSectionMetadata } from "./configuration-section-metadata";

/**
 *
 * @export
 * @interface ConfigurationSectionMetadataCollection
 */
export interface ConfigurationSectionMetadataCollection {
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadataCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ConfigurationSectionMetadata>}
   * @memberof ConfigurationSectionMetadataCollection
   */
  Items?: Array<ConfigurationSectionMetadata>;
  /**
   *
   * @type {number}
   * @memberof ConfigurationSectionMetadataCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadataCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadataCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ConfigurationSectionMetadataCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ConfigurationSectionMetadataCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ConfigurationSectionMetadataCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ConfigurationSectionMetadataCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ConfigurationSectionMetadataCollection
   */
  TotalResults?: number;
}
