interface SearchingActionInterface {
  type: string;
  payload: string | string[];
}

interface SuccessActionInterface {
  type: string;
  payload: string | string[];
}

interface ErrorActionInterface {
  type: string;
  payload: string | string[];
}

export type Actions =
  | SearchingActionInterface
  | SuccessActionInterface
  | ErrorActionInterface;
