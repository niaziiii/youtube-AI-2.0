import React from "react";

const radioTypes = [
  {
    type: "Title",
  },
  {
    type: "Description",
  },
  {
    type: "Tags",
  },
];

interface IScreen {
  setQuery: any;
  query: any;
  title: string;
  description: string;
  setType: any;
  type: any;
  generateHandler: () => void;
  placeholder: string;
  loading?: boolean;
}

const SearchingScreen = (props: IScreen) => {
  const {
    setQuery,
    query,
    title,
    description,
    setType,
    type,
    placeholder,
    generateHandler,
    loading,
  } = props;

  return (
    <div
      style={{ zIndex: "1" }}
      className=" z-10 flex-1 flex items-center justify-center text-white m-auto"
    >
      <div className="w-full  md:w-[70%] lg:w-[60%] xl:w-[50%]   h-full m-auto  flex flex-col items-start justify-center">
        <div className="flex flex-wrap justify-center ">
          <h1 className=" capitalize text-3xl md:text-4xl font-bold text-center">
            {title}
          </h1>
          <p className="mt-6 text-sm capitalize text-center w-[80%] m-auto">
            {description}
          </p>
        </div>
        <div className="px-2  w-[90%]  m-auto mt-6">
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-4 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-lg border-s-gray-50  border-gray-300 focus:ring-blue-500 focus:border-none focus:outline-none"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value as any)}
              required
            />
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            {radioTypes.map((radioType) => (
              <button
                key={radioType.type}
                onClick={() => setType(radioType.type)}
                className="w-[90px] text-sm sm:text-[16px] sm:w-[120px] rounded-md md:font-semibold py-1"
                style={{
                  background: type === radioType.type ? "#0B7666" : "white",
                  color: type === radioType.type ? "white" : "black",
                }}
              >
                {radioType.type}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center mt-6">
            <button
              onClick={generateHandler}
              className="w-[120px] rounded-md font-semibold py-2 bg-[#0B7666] text-white"
            >
              {loading ? "loading..." : "Generate"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchingScreen;
