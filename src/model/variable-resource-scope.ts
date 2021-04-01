// Octopus REST API v2021.2.1290

/**
 *
 * @export
 * @interface VariableResourceScope
 */
export interface VariableResourceScope {
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Project?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Environment?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Machine?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Role?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  TargetRole?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Action?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  User?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Trigger?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  ParentDeployment?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Private?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Channel?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  TenantTag?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  Tenant?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof VariableResourceScope
   */
  ProcessOwner?: Array<string>;
}
