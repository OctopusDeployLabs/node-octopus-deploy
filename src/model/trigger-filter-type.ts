// Octopus REST API v2021.2.1387

/**
 *
 * @export
 * @enum {string}
 */

export enum TriggerFilterType {
  MachineFilter = "MachineFilter",
  DailySchedule = "DailySchedule",
  DaysPerWeekSchedule = "DaysPerWeekSchedule",
  DaysPerMonthSchedule = "DaysPerMonthSchedule",
  CronExpressionSchedule = "CronExpressionSchedule",
  OnceDailySchedule = "OnceDailySchedule",
  ContinuousDailySchedule = "ContinuousDailySchedule",
}
