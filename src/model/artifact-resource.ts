// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface ArtifactResource
 */
export interface ArtifactResource {
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  Filename: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ArtifactResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  LogCorrelationId?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  ServerTaskId?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  Source?: string;
  /**
   *
   * @type {string}
   * @memberof ArtifactResource
   */
  SpaceId?: string;
}
