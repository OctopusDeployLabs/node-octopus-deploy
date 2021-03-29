// Octopus REST API v2020.6.4722

import { EmailPriority } from './email-priority';
import { EventNotificationSubscriptionFilter } from './event-notification-subscription-filter';

/**
 * 
 * @export
 * @interface EventNotificationSubscription
 */
export interface EventNotificationSubscription {
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    EmailDigestLastProcessed?: string;
    /**
     * 
     * @type {number}
     * @memberof EventNotificationSubscription
     */
    EmailDigestLastProcessedEventAutoId?: number;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    EmailFrequencyPeriod?: string;
    /**
     * 
     * @type {EmailPriority}
     * @memberof EventNotificationSubscription
     */
    EmailPriority?: EmailPriority;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    EmailShowDatesInTimeZoneId?: string;
    /**
     * 
     * @type {Set<string>}
     * @memberof EventNotificationSubscription
     */
    EmailTeams?: Set<string>;
    /**
     * 
     * @type {EventNotificationSubscriptionFilter}
     * @memberof EventNotificationSubscription
     */
    Filter?: EventNotificationSubscriptionFilter;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    WebhookHeaderKey?: string;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    WebhookHeaderValue?: string;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    WebhookLastProcessed?: string;
    /**
     * 
     * @type {number}
     * @memberof EventNotificationSubscription
     */
    WebhookLastProcessedEventAutoId?: number;
    /**
     * 
     * @type {Set<string>}
     * @memberof EventNotificationSubscription
     */
    WebhookTeams?: Set<string>;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    WebhookTimeout?: string;
    /**
     * 
     * @type {string}
     * @memberof EventNotificationSubscription
     */
    WebhookURI?: string;
}
