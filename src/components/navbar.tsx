import Image from "next/image";

function Navabar() {
  return (
    <div className="flex  items-center justify-between py-4  gap-4">
      <div className="flex items-center  justify-between gap-12 xl:gap-20 ">
        <h1 className="text-[color:var(--primary-dark-500)] text-2xl font-[700]">
          MORENT
        </h1>
        <div className="flex border border-[color:var(--secondary-light-100)] px-6 py-3 gap-6 rounded-full items-center">
          <label htmlFor="search" className="block">
            <Image
              src={"/icons/search.svg"}
              alt="search"
              width={24}
              height={24}
            />
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="border-none  focus:outline-none w-full"
            placeholder="Search something here."
          />
          <Image
            className="cursor-pointer"
            src={"/icons/filter.svg"}
            alt="filter"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-4">
          <Image
            className="cursor-pointer"
            src={"/icons/heart.svg"}
            alt="heart"
            width={24}
            height={24}
          />
          <div className="relative cursor-pointer ">
            <Image src={"/icons/bell.svg"} alt="bell" width={24} height={24} />
            <span className="absolute top-0 right-0 w-[8px] rounded-full h-[8px] bg-red-600"></span>
          </div>
          <Image
            className="cursor-pointer"
            src={"/icons/setting.svg"}
            alt="setting"
            width={24}
            height={24}
          />
        </div>
        <div className="w-[44px] h-[44px] cursor-pointer">
          <Image src={"/images/Profil.png"} alt="user" width={44} height={44} />
        </div>
      </div>
    </div>
  );
}

export default Navabar;
