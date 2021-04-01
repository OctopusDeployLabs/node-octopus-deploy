// Octopus REST API v2021.2.1290

import { CommitDetails } from "./commit-details";
import { WorkItemLink } from "./work-item-link";

/**
 *
 * @export
 * @interface OctopusPackageVersionBuildInformationMappedResource
 */
export interface OctopusPackageVersionBuildInformationMappedResource {
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Branch?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  BuildEnvironment?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  BuildNumber?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  BuildUrl?: string;
  /**
   *
   * @type {Array<CommitDetails>}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Commits?: Array<CommitDetails>;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Created?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  IncompleteDataWarning?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  IssueTrackerName?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  PackageId?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  VcsCommitNumber?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  VcsCommitUrl?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  VcsRoot?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  VcsType?: string;
  /**
   *
   * @type {string}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  Version?: string;
  /**
   *
   * @type {Array<WorkItemLink>}
   * @memberof OctopusPackageVersionBuildInformationMappedResource
   */
  WorkItems?: Array<WorkItemLink>;
}
