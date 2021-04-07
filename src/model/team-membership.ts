// Octopus REST API v2021.2.1387

import { NamedReferenceItem } from "./named-reference-item";

/**
 *
 * @export
 * @interface TeamMembership
 */
export interface TeamMembership {
  /**
   *
   * @type {Array<NamedReferenceItem>}
   * @memberof TeamMembership
   */
  ExternalSecurityGroups?: Array<NamedReferenceItem>;
  /**
   *
   * @type {boolean}
   * @memberof TeamMembership
   */
  IsDirectlyAssigned?: boolean;
  /**
   *
   * @type {string}
   * @memberof TeamMembership
   */
  SpaceId?: string;
  /**
   *
   * @type {string}
   * @memberof TeamMembership
   */
  TeamId?: string;
  /**
   *
   * @type {string}
   * @memberof TeamMembership
   */
  TeamName?: string;
  /**
   *
   * @type {string}
   * @memberof TeamMembership
   */
  UserId?: string;
}
