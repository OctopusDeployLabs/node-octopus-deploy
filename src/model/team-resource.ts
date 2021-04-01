// Octopus REST API v2021.2.1290

import { NamedReferenceItem } from "./named-reference-item";

/**
 *
 * @export
 * @interface TeamResource
 */
export interface TeamResource {
  /**
   *
   * @type {boolean}
   * @memberof TeamResource
   */
  CanBeDeleted?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TeamResource
   */
  CanBeRenamed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TeamResource
   */
  CanChangeMembers?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof TeamResource
   */
  CanChangeRoles?: boolean;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  Description?: string;
  /**
   *
   * @type {Array<NamedReferenceItem>}
   * @memberof TeamResource
   */
  ExternalSecurityGroups?: Array<NamedReferenceItem>;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof TeamResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {Set<string>}
   * @memberof TeamResource
   */
  MemberUserIds?: Set<string>;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof TeamResource
   */
  SpaceId?: string;
}
