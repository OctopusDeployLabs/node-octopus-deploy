// Octopus REST API v2021.2.1290

import { NamedReferenceItem } from "./named-reference-item";

/**
 *
 * @export
 * @interface ProjectedTeamReferenceDataItem
 */
export interface ProjectedTeamReferenceDataItem {
  /**
   *
   * @type {Array<NamedReferenceItem>}
   * @memberof ProjectedTeamReferenceDataItem
   */
  ExternalSecurityGroups?: Array<NamedReferenceItem>;
  /**
   *
   * @type {string}
   * @memberof ProjectedTeamReferenceDataItem
   */
  Id?: string;
  /**
   *
   * @type {boolean}
   * @memberof ProjectedTeamReferenceDataItem
   */
  IsDirectlyAssigned?: boolean;
  /**
   *
   * @type {string}
   * @memberof ProjectedTeamReferenceDataItem
   */
  Name?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectedTeamReferenceDataItem
   */
  SpaceId?: string;
}
