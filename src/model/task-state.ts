// Octopus REST API v2020.6.4722


/**
 * 
 * @export
 * @enum {string}
 */
export enum TaskState {
    Queued = 'Queued',
    Executing = 'Executing',
    Failed = 'Failed',
    Canceled = 'Canceled',
    TimedOut = 'TimedOut',
    Success = 'Success',
    Cancelling = 'Cancelling'
}

