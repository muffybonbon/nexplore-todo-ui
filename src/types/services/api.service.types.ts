export type ISuccessResponse<T> = {
  message: string;
  data: T;
};

export type IErrorResponse = {
  message: string;
};
