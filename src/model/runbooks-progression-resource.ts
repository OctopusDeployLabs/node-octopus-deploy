// Octopus REST API v2021.2.1387

import { ReferenceDataItem } from "./reference-data-item";
import { RunbooksDashboardItemResource } from "./runbooks-dashboard-item-resource";

/**
 *
 * @export
 * @interface RunbooksProgressionResource
 */
export interface RunbooksProgressionResource {
  /**
   *
   * @type {Array<ReferenceDataItem>}
   * @memberof RunbooksProgressionResource
   */
  Environments?: Array<ReferenceDataItem>;
  /**
   *
   * @type {string}
   * @memberof RunbooksProgressionResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof RunbooksProgressionResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbooksProgressionResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbooksProgressionResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {{ [key: string]: Array<RunbooksDashboardItemResource>; }}
   * @memberof RunbooksProgressionResource
   */
  RunbookRuns?: { [key: string]: Array<RunbooksDashboardItemResource> };
}
