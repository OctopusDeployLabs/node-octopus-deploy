// Octopus REST API v2020.6.4722

import { EventNotificationSubscription } from './event-notification-subscription';
import { SubscriptionType } from './subscription-type';

/**
 * 
 * @export
 * @interface SubscriptionResource
 */
export interface SubscriptionResource {
    /**
     * 
     * @type {EventNotificationSubscription}
     * @memberof SubscriptionResource
     */
    EventNotificationSubscription?: EventNotificationSubscription;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResource
     */
    Id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SubscriptionResource
     */
    IsDisabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResource
     */
    LastModifiedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResource
     */
    LastModifiedOn?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof SubscriptionResource
     */
    Links?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResource
     */
    Name?: string;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionResource
     */
    SpaceId?: string;
    /**
     * 
     * @type {SubscriptionType}
     * @memberof SubscriptionResource
     */
    Type?: SubscriptionType;
}
