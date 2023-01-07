import dateFormat from "dateformat";

const currentDate = new Date();

const getDate = () => {
  return dateFormat(currentDate, "dddd, d mmmm yyyy");
};

export default getDate;
