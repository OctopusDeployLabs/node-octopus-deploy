// Octopus REST API v2021.2.1290

import { OctopusPackageVersionBuildInformationMappedResource } from "./octopus-package-version-build-information-mapped-resource";

/**
 *
 * @export
 * @interface PackageFromBuiltInFeedResource
 */
export interface PackageFromBuiltInFeedResource {
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Description?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  FeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  FileExtension?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Hash?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Id?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  LastModifiedBy?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  LastModifiedOn?: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof PackageFromBuiltInFeedResource
   */
  Links?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  NuGetFeedId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  NuGetPackageId?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  PackageId?: string;
  /**
   *
   * @type {number}
   * @memberof PackageFromBuiltInFeedResource
   */
  PackageSizeBytes?: number;
  /**
   *
   * @type {OctopusPackageVersionBuildInformationMappedResource}
   * @memberof PackageFromBuiltInFeedResource
   */
  PackageVersionBuildInformation?: OctopusPackageVersionBuildInformationMappedResource;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Published?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  ReleaseNotes?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Summary?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Title?: string;
  /**
   *
   * @type {string}
   * @memberof PackageFromBuiltInFeedResource
   */
  Version?: string;
}
