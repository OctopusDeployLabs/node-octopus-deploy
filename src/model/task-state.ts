// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @enum {string}
 */
export enum TaskState {
  Queued = "Queued",
  Executing = "Executing",
  Failed = "Failed",
  Canceled = "Canceled",
  TimedOut = "TimedOut",
  Success = "Success",
  Cancelling = "Cancelling",
}
