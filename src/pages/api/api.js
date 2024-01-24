import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL,
});

// Products API
export const getProductById = (productId) => api.get(`/products/${productId}`);
export const updateProduct = (
  productId,
  name,
  description,
  price,
  formData
) => {
  return api.put(
    `/products/${productId}?name=${name}&description=${description}&price=${price}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
};
export const deleteProduct = (productId) =>
  api.delete(`/products/${productId}`);
export const getAllProducts = () => api.get("/products");
export const createProduct = (name, description, price, formData) =>
  api.post(
    `/products?name=${name}&description=${description}&price=${price}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

export const getAllComplaints = () => api.get("/complaints");
export const createComplaint = (description, orderId, formData) =>
  api.post(
    `/complaints?description=${description}&orderId=${orderId}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
export const manageComplaint = (complaintId, action) =>
  api.post(`/complaints/${complaintId}/manage?action=${action}`);
export const sendMessageToWorker = (complaintId, toWorker, message, picture) =>
  api.post(
    `/complaints/${complaintId}/chat/send?toWorker=${toWorker}&message=${message}`,
    picture,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
export const getComplaintById = (complaintId) =>
  api.get(`/complaints/${complaintId}`);
export const getChatMessages = (complaintId) =>
  api.get(`/complaints/${complaintId}/chat`);

// Orders API
export const getAllOrders = () => api.get("/orders");

// Images API
export const getImageById = (imageId) => api.get(`/images/${imageId}`);
