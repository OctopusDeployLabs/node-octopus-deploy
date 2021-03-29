// Octopus REST API v2020.6.4722

import { ReleasePackageVersionBuildInformationResource } from './release-package-version-build-information-resource';
import { SelectedPackage } from './selected-package';
import { VersionControlReferenceResource } from './version-control-reference-resource';

/**
 * 
 * @export
 * @interface ReleaseResource
 */
export interface ReleaseResource {
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    Assembled?: string;
    /**
     * 
     * @type {Array<ReleasePackageVersionBuildInformationResource>}
     * @memberof ReleaseResource
     */
    BuildInformation?: Array<ReleasePackageVersionBuildInformationResource>;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    ChannelId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReleaseResource
     */
    IgnoreChannelRules?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleaseResource
     */
    LibraryVariableSetSnapshotIds?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ReleaseResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    ProjectDeploymentProcessSnapshotId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    ProjectId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    ProjectVariableSetSnapshotId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    ReleaseNotes?: string;
    /**
     * 
     * @type {Array<SelectedPackage>}
     * @memberof ReleaseResource
     */
    SelectedPackages?: Array<SelectedPackage>;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseResource
     */
    Version: string;
    /**
     * 
     * @type {VersionControlReferenceResource}
     * @memberof ReleaseResource
     */
    VersionControlReference?: VersionControlReferenceResource;
}
