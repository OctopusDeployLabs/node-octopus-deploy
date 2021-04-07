// Octopus REST API v2021.2.1387

import { ReferenceDataItem } from "./reference-data-item";
import { ReleaseProgressionResource } from "./release-progression-resource";

/**
 *
 * @export
 * @interface ProgressionResource
 */
export interface ProgressionResource {
  /**
   *
   * @type {{ [key: string]: Array<ReferenceDataItem>; }}
   * @memberof ProgressionResource
   */
  ChannelEnvironments?: { [key: string]: Array<ReferenceDataItem> };
  /**
   *
   * @type {Array<ReferenceDataItem>}
   * @memberof ProgressionResource
   */
  Environments?: Array<ReferenceDataItem>;
  /**
   *
   * @type {string}
   * @memberof ProgressionResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ProgressionResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ProgressionResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProgressionResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<ReleaseProgressionResource>}
   * @memberof ProgressionResource
   */
  Releases?: Array<ReleaseProgressionResource>;
}
