import { useState, useEffect } from "react";

function ExampleComponent() {
  // Khởi tạo state bằng useState
  const [count, setCount] = useState(0);

  // Sử dụng useEffect thay thế cho lifecycle methods
  useEffect(() => {
    // Thực hiện sau khi component đã được render lần đầu
    // (tương đương với componentDidMount)
    console.log("Component did mount");

    // Cleanup function tương đương với componentWillUnmount
    return () => {
      console.log("Component will unmount");
    };
  }, []); // [] đại diện cho dependencies, rỗng nghĩa là sẽ chỉ thực hiện
  // một lần sau lần render đầu tiên

  // Sử dụng cú pháp arrow function để cập nhật state
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Render component
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
