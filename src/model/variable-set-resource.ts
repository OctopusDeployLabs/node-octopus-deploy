// Octopus REST API v2021.2.1387

import { VariableResource } from "./variable-resource";
import { VariableScopeValues } from "./variable-scope-values";

/**
 *
 * @export
 * @interface VariableSetResource
 */
export interface VariableSetResource {
  /**
   *
   * @type {string}
   * @memberof VariableSetResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof VariableSetResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof VariableSetResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof VariableSetResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof VariableSetResource
   */
  OwnerId?: string;
  /**
   *
   * @type {VariableScopeValues}
   * @memberof VariableSetResource
   */
  ScopeValues?: VariableScopeValues;
  /**
   *
   * @type {string}
   * @memberof VariableSetResource
   */
  SpaceId?: string;
  /**
   *
   * @type {Array<VariableResource>}
   * @memberof VariableSetResource
   */
  Variables?: Array<VariableResource>;
  /**
   *
   * @type {number}
   * @memberof VariableSetResource
   */
  Version?: number;
}
