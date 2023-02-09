import dayjs, { Dayjs } from 'dayjs'
import { groupBy } from 'lodash';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import weekOfYear from 'dayjs/plugin/weekOfYear';

dayjs.extend(weekOfYear)
dayjs.extend(LocalizedFormat)


interface GetDatesInMonthParams {
    options?: {
        groupByWeek?: boolean;
        includeOutsideDates?: boolean;
    },
    month: number;
    year?: number
}

export default function getDatesInMonth({ month, year = dayjs().year(), options = {} }: GetDatesInMonthParams) {
    const { groupByWeek = false, includeOutsideDates = false } = options;
    /** 
     * https://day.js.org/docs/en/get-set/month 
     * https://day.js.org/docs/en/get-set/year
     * https://day.js.org/docs/en/manipulate/start-of
     * https://day.js.org/docs/en/manipulate/end-of
     * https://day.js.org/docs/en/query/is-same
     * https://day.js.org/docs/en/display/format
    */ 
   const baseDate = dayjs().set('month', month).set('year', year).startOf('month');
   const startDate = includeOutsideDates ? baseDate.startOf('week') : baseDate;
   const endDate = includeOutsideDates ? baseDate.endOf('month').endOf('week') : baseDate.endOf('month');
    
   const dates: Dayjs[] = [startDate];

    while (!(dates[dates.length - 1].isSame(endDate, 'day'))) {
        dates.push(
            dates[dates.length - 1].add(1, 'day')
        )
    }

    if (groupByWeek) {
        return Object.values(groupBy(dates, (date: Dayjs) => date.week()));
    }

    return dates;
}