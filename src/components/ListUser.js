import { Link } from "react-router-dom";
function ListUser({ user = [] }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            User
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Danh sách User
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {user.map((user, index) => {
            const { id, name, email } = user;
            return (
              <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src="https://dummyimage.com/80x80"
                  />
                  <Link to={`/tasks/${id}`} className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      {name}
                    </h2>
                    <p className="text-gray-500">{email}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ListUser;
