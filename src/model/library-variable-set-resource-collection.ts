// Octopus REST API v2021.2.1387

import { LibraryVariableSetResource } from "./library-variable-set-resource";

/**
 *
 * @export
 * @interface LibraryVariableSetResourceCollection
 */
export interface LibraryVariableSetResourceCollection {
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<LibraryVariableSetResource>}
   * @memberof LibraryVariableSetResourceCollection
   */
  Items?: Array<LibraryVariableSetResource>;
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof LibraryVariableSetResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof LibraryVariableSetResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof LibraryVariableSetResourceCollection
   */
  TotalResults?: number;
}
