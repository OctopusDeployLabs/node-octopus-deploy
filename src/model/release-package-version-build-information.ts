// Octopus REST API v2021.2.1290

import { CommitDetails } from "./commit-details";
import { WorkItemLink } from "./work-item-link";

/**
 *
 * @export
 * @interface ReleasePackageVersionBuildInformation
 */
export interface ReleasePackageVersionBuildInformation {
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  Branch?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  BuildEnvironment?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  BuildNumber?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  BuildUrl?: string;
  /**
   *
   * @type {Array<CommitDetails>}
   * @memberof ReleasePackageVersionBuildInformation
   */
  Commits?: Array<CommitDetails>;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  PackageId?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  VcsCommitNumber?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  VcsCommitUrl?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  VcsRoot?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  VcsType?: string;
  /**
   *
   * @type {string}
   * @memberof ReleasePackageVersionBuildInformation
   */
  Version?: string;
  /**
   *
   * @type {Array<WorkItemLink>}
   * @memberof ReleasePackageVersionBuildInformation
   */
  WorkItems?: Array<WorkItemLink>;
}
