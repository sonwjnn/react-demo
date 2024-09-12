// Type cho dữ liệu trả về từ API
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Type cho state và action của reducer
export interface State {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export type Action =
  | { type: "FETCH_START" } // action này sẽ được gọi khi fetch bắt đầu
  | { type: "FETCH_SUCCESS"; payload: Post[] } // action này sẽ được gọi khi fetch thành công
  | { type: "FETCH_ERROR"; payload: string }; // action này sẽ được gọi khi fetch thất bại
