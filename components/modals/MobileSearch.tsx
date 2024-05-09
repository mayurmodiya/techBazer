import React from "react";
import { Input } from "../ui/input";
import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { useMobileSearchModal } from "@/store/mobileSearchStore";

const MobileSearch = () => {
  const { closeModal, isOpen } = useMobileSearchModal();

  if (isOpen) {
    return (
      <div className="fixed top-0 h-[5rem] bg-white dark:bg-slate-950 w-full flex items-center justify-center z-50">
        <div className="flex items-center gap-4 w-full mx-4">
          <form className="flex items-center w-full gap-2 px-4 rounded-lg border focus-visible:ring-2">
            <Input
              placeholder="Search Product..."
              className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
            />
            <button className="bg-transparent border-none" type="submit">
            <Search />
            </button>
          </form>
          <Button variant={"destructive"} onClick={closeModal}>
            <X />
          </Button>
        </div>
      </div>
    );
  }
};

export default MobileSearch;
