// Octopus REST API v2020.6.4722

import { OnboardingTaskResource } from './onboarding-task-resource';

/**
 * 
 * @export
 * @interface OnboardingResource
 */
export interface OnboardingResource {
    /**
     * 
     * @type {string}
     * @memberof OnboardingResource
     */
    Id?: string;
    /**
     * 
     * @type {string}
     * @memberof OnboardingResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof OnboardingResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof OnboardingResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {Array<OnboardingTaskResource>}
     * @memberof OnboardingResource
     */
    Tasks?: Array<OnboardingTaskResource>;
}
