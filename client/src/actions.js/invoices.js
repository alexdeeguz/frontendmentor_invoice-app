import axios from "axios";

export const getInvoices = () => {
  return axios.get("/api/invoices");
};

export const createInvoice = (data) => {
  return axios.post("/api/invoices", data);
};

export const getDetails = (id) => {
  return axios.get(`/api/invoices/${id}`);
};

export const deleteInvoice = (data) => {
  return axios.post("/api/invoices/delete", data);
};

export const editInvoice = (data) => {
  return axios.post("/api/invoices/edit", data)
}
