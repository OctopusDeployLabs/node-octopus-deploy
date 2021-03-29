// Octopus REST API v2020.6.4722

import { CommitDetails } from './commit-details';
import { WorkItemLink } from './work-item-link';

/**
 * 
 * @export
 * @interface ReleasePackageVersionBuildInformationResource
 */
export interface ReleasePackageVersionBuildInformationResource {
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    Branch?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    BuildEnvironment?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    BuildNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    BuildUrl?: string;
    /**
     * 
     * @type {Array<CommitDetails>}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    Commits?: Array<CommitDetails>;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    IssueTrackerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    PackageId?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    VcsCommitNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    VcsCommitUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    VcsRoot?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    VcsType?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    Version?: string;
    /**
     * 
     * @type {Array<WorkItemLink>}
     * @memberof ReleasePackageVersionBuildInformationResource
     */
    WorkItems?: Array<WorkItemLink>;
}
