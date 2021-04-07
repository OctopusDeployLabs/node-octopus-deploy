// Octopus REST API v2021.2.1387

import { ArtifactResource } from "./artifact-resource";

/**
 *
 * @export
 * @interface ArtifactResourceCollection
 */
export interface ArtifactResourceCollection {
  /**
   *
   * @type {string}
   * @memberof ArtifactResourceCollection
   */
  Id?: string;
  /**
   *
   * @type {Array<ArtifactResource>}
   * @memberof ArtifactResourceCollection
   */
  Items?: Array<ArtifactResource>;
  /**
   *
   * @type {number}
   * @memberof ArtifactResourceCollection
   */
  ItemsPerPage?: number;
  /**
   *
   * @type {string}
   * @memberof ArtifactResourceCollection
   */
  ItemType?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResourceCollection
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResourceCollection
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {number}
   * @memberof ArtifactResourceCollection
   */
  LastPageNumber?: number;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ArtifactResourceCollection
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {number}
   * @memberof ArtifactResourceCollection
   */
  NumberOfPages?: number;
  /**
   *
   * @type {number}
   * @memberof ArtifactResourceCollection
   */
  TotalResults?: number;
}
