/** */
export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-CL", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";
