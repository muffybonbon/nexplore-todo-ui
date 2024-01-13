import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { AxiosErrorEnum } from '../enums/AxiosErrorEnum';
import { HTTPStatusEnum } from '../enums/HTTPStatusEnum';

interface ISuccessResponse<T> {
  data: T;
  message: string;
}

class APIService {
  private axiosInstance: AxiosInstance;
  private BASE_URL = process.env.API_URL;

  constructor(version: string) {
    const baseURL = this.getBaseURL(version);
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.initializeInterceptors();
  }

  private getBaseURL(version: string): string {
    return `${this.BASE_URL}/api/${version}`;
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<ISuccessResponse<T>> = await this.axiosInstance(config);
      if (response.status !== HTTPStatusEnum.OK) {
        toast(response.data.message, { type: 'success' });
      }
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }

  private initializeInterceptors() {
    const requestInterceptor = this.axiosInstance.interceptors.request.use((request) => {
      return request;
    });

    const responseInterceptor = this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        let errorMessage = 'An unexpected error occurred';
        if (error.code === AxiosErrorEnum.ERR_NETWORK) {
          errorMessage = 'Network Error';
        } else if (error.code === AxiosErrorEnum.ERR_BAD_REQUEST && error.response) {
          errorMessage = error.response.data?.message;
        }
        toast(`Error occurred. Reason: ${errorMessage}`, { type: 'error' });
        return Promise.reject(new Error(errorMessage));
      }
    );

    return () => {
      this.axiosInstance.interceptors.request.eject(requestInterceptor);
      this.axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET', url });
  }

  post<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST', url, data });
  }

  put<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT', url, data });
  }

  patch<T, U>(url: string, data?: U, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH', url, data });
  }

  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE', url });
  }
}

export default APIService;
