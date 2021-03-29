// Octopus REST API v2020.6.4722

import { CommitDetails } from './commit-details';
import { ReleasePackageVersionBuildInformation } from './release-package-version-build-information';
import { WorkItemLink } from './work-item-link';

/**
 * 
 * @export
 * @interface ReleaseChanges
 */
export interface ReleaseChanges {
    /**
     * 
     * @type {Array<ReleasePackageVersionBuildInformation>}
     * @memberof ReleaseChanges
     */
    BuildInformation?: Array<ReleasePackageVersionBuildInformation>;
    /**
     * 
     * @type {Array<CommitDetails>}
     * @memberof ReleaseChanges
     */
    Commits?: Array<CommitDetails>;
    /**
     * 
     * @type {string}
     * @memberof ReleaseChanges
     */
    ReleaseNotes?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleaseChanges
     */
    Version?: string;
    /**
     * 
     * @type {Array<WorkItemLink>}
     * @memberof ReleaseChanges
     */
    WorkItems?: Array<WorkItemLink>;
}
