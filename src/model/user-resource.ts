// Octopus REST API v2021.2.1387

import { IdentityResource } from "./identity-resource";

/**
 *
 * @export
 * @interface UserResource
 */
export interface UserResource {
  /**
   *
   * @type {boolean}
   * @memberof UserResource
   */
  CanPasswordBeEdited?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  DisplayName: string;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  EmailAddress?: string;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  Id?: string;
  /**
   *
   * @type {Array<IdentityResource>}
   * @memberof UserResource
   */
  Identities?: Array<IdentityResource>;
  /**
   *
   * @type {boolean}
   * @memberof UserResource
   */
  IsActive?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserResource
   */
  IsRequestor?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserResource
   */
  IsService?: boolean;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof UserResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  Password?: string;
  /**
   *
   * @type {string}
   * @memberof UserResource
   */
  Username?: string;
}
