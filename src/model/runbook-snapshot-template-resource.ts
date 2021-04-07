// Octopus REST API v2021.2.1387

import { ReleaseTemplatePackage } from "./release-template-package";

/**
 *
 * @export
 * @interface RunbookSnapshotTemplateResource
 */
export interface RunbookSnapshotTemplateResource {
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof RunbookSnapshotTemplateResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  NextNameIncrement?: string;
  /**
   *
   * @type {Array<ReleaseTemplatePackage>}
   * @memberof RunbookSnapshotTemplateResource
   */
  Packages?: Array<ReleaseTemplatePackage>;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  RunbookId?: string;
  /**
   *
   * @type {string}
   * @memberof RunbookSnapshotTemplateResource
   */
  RunbookProcessId?: string;
}
