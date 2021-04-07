// Octopus REST API v2021.2.1387

import { PackageNote } from "./package-note";

/**
 *
 * @export
 * @interface PackageNoteListResource
 */
export interface PackageNoteListResource {
  /**
   *
   * @type {string}
   * @memberof PackageNoteListResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageNoteListResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageNoteListResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageNoteListResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Array<PackageNote>}
   * @memberof PackageNoteListResource
   */
  Packages?: Array<PackageNote>;
}
