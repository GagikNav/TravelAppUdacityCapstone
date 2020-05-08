const daysCalc = (startDate, endDate) => {
   let date1 = startDate;
   let date2 = endDate;
   let toDay = new Date().toLocaleDateString();
   // First we split the values to arrays date1[0] is the year, [1] the month and [2] the day
   toDay = toDay.split('/');
   date1 = date1.split('-');
   date2 = date2.split('-');

   // Now we convert the array to a Date object, which has several helpful methods
   toDay = new Date(toDay[2], toDay[0], toDay[1]);
   date1 = new Date(date1[0], date1[1], date1[2]);
   date2 = new Date(date2[0], date2[1], date2[2]);

   // We use the getTime() method and get the unixtime (in milliseconds, but we want seconds, therefore we divide it through 1000)
   const date1_unixtime = parseInt(date1.getTime() / 1000);
   const date2_unixtime = parseInt(date2.getTime() / 1000);
   const toDay_unixtime = parseInt(toDay.getTime() / 1000);
   // This is the calculated difference in seconds
   let timeDifference = date2_unixtime - date1_unixtime;
   let untilDepDay = date1_unixtime - toDay_unixtime;
   // in Hours
   let timeDifferenceInHours = timeDifference / 60 / 60;
   let untilDepDayInHour = untilDepDay / 60 / 60;
   let untilDepDayInDays = untilDepDayInHour / 24;
   //in Days
   const timeDifferenceInDays = timeDifferenceInHours / 24;
   return { timeDifferenceInDays, untilDepDayInDays, untilDepDayInHour };
};
export { daysCalc };
