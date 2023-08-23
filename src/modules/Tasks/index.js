import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Tasks() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [iscomplete, setIscomplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      //hàm async hàm bất đồng bộ dùng từ khóa await
      //await Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả
      const respone = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/todos`
      );
      const data = await respone.json();
      setTasks(data);
    };
    fetchProduct();
  }, [id]);

  if (!Object.keys(tasks).length > 0) return <div>Loading.....</div>;
  const sortTasks = tasks?.sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? -1 : 1
  );

  const result = tasks.filter((i) => i.completed === true).length;

  const handleChange = () => {
    setIsLoading(true);
    setIscomplete(true);
    const fetchupdate = async () => {
      const respone = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${tasks.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            completed: iscomplete,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await respone.json();
      if (data) {
        setIsLoading(false);
      }
    };
    fetchupdate();
  };
  return (
    <section className="text-gray-600 body-font">
      <h4 className="text-center text-4xl text-orange-200">Danh Sách Task</h4>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {sortTasks.map((user, index) => {
            const { userId, id, title } = user;

            return (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
              >
                <div className="mt-4">
                  <h4 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    id :{id}
                  </h4>
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    userId :{userId}
                  </h3>
                  <h2 className="text-gray-900 title-font text-xl font-medium">
                    title : {title}
                  </h2>
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out bg-indigo-500 rounded-md shadow cursor-not-allowed hover:bg-indigo-400"
                    onClick={() => handleChange(tasks, true)}
                  >
                    {isLoading && (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          // stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    )}
                    mark done
                  </button>
                </div>
              </div>
            );
          })}
          <h4 className="text-center  text-4xl tex-blue-200">
            Số task true: {result} <br />
            Tổng số Task: {tasks.length}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Tasks;
