export enum TimeOfDayEnum {
  Morning = "morning",
  Afternoon = "afternoon",
  Evening = "evening",
}

export enum WeekStartsEnum {
  Sunday,
  Monday,
}

//horizontal to vertical array magic
export const orderTimeArray = (time: Array<Date>) => {
  let ret: Array<any> = []
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      ret[i * 4 + j] = time[i + j * 4]
    }
  }
  return ret
}

//function that handles time of day
export const getTimeOfDay = (date: Date): TimeOfDayEnum => {
  if (
    date.getHours() < 11 ||
    (date.getHours() === 11 && date.getMinutes() < 45)
  ) {
    return TimeOfDayEnum.Morning
  }
  if (
    date.getHours() < 15 ||
    (date.getHours() === 15 && date.getMinutes() < 45)
  ) {
    return TimeOfDayEnum.Afternoon
  }

  return TimeOfDayEnum.Evening
}
