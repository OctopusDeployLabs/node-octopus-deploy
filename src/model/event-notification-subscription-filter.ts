// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @interface EventNotificationSubscriptionFilter
 */
export interface EventNotificationSubscriptionFilter {
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  DocumentTypes?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  Environments?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  EventAgents?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  EventCategories?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  EventGroups?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  ProjectGroups?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  Projects?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  Tags?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  Tenants?: Set<string>;
  /**
   *
   * @type {Set<string>}
   * @memberof EventNotificationSubscriptionFilter
   */
  Users?: Set<string>;
}
