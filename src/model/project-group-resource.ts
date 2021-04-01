// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface ProjectGroupResource
 */
export interface ProjectGroupResource {
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  Description?: string;
  /**
   *
   * @type {Set<string>}
   * @memberof ProjectGroupResource
   */
  EnvironmentIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ProjectGroupResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  RetentionPolicyId?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectGroupResource
   */
  SpaceId?: string;
}
