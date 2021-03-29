// Octopus REST API v2020.6.4722

import { ActionUpdatePackageUsedBy } from './action-update-package-used-by';

/**
 * 
 * @export
 * @interface ActionUpdateRemovedPackageUsage
 */
export interface ActionUpdateRemovedPackageUsage {
    /**
     * 
     * @type {string}
     * @memberof ActionUpdateRemovedPackageUsage
     */
    PackageReference?: string;
    /**
     * 
     * @type {ActionUpdatePackageUsedBy}
     * @memberof ActionUpdateRemovedPackageUsage
     */
    UsedBy?: ActionUpdatePackageUsedBy;
    /**
     * 
     * @type {string}
     * @memberof ActionUpdateRemovedPackageUsage
     */
    UsedById?: string;
    /**
     * 
     * @type {string}
     * @memberof ActionUpdateRemovedPackageUsage
     */
    UsedByName?: string;
}
