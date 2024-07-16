export function Searchbar() {
  return (
    <form id="search-form"
      className="
      bg-white 
      border-2 
      mt-5 h-12 px-5 
      w-full
      flex items-center justify-between 
      rounded-full 
      focus-within:border-fuchsia-300 
      transition-all duration-300

      xl:w-[60%]
      lg:w-[55%]
      md:w-[35%]
      md:h-10	
      md:m-0
      md:ml-2
      lg:ml-0
      
    ">
      <input
        type="search"
        id="input-search"
        placeholder="Pesquise produtos e marcas"
        className="
          h-full w-full outline-none 
          text-lg
          mr-4

          md:text-sm
          "
      />
      <button>
        <i className="fa-solid fa-magnifying-glass fa-lg text-gray-500"></i>
      </button>
    </form >
  );
}