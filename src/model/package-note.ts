// Octopus REST API v2021.2.1290

import { PackageNotesResult } from "./package-notes-result";

/**
 *
 * @export
 * @interface PackageNote
 */
export interface PackageNote {
  /**
   *
   * @type {string}
   * @memberof PackageNote
   */
  FeedId?: string;
  /**
   *
   * @type {PackageNotesResult}
   * @memberof PackageNote
   */
  Notes?: PackageNotesResult;
  /**
   *
   * @type {string}
   * @memberof PackageNote
   */
  PackageId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageNote
   */
  Version?: string;
}
