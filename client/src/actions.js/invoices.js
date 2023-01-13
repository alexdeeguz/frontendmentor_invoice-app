import axios from "axios";

export const getInvoices = () => {
  return axios.get("/api/invoices");
};

export const createInvoice = (data) => {
  return axios.post("/api/invoices", data);
};
