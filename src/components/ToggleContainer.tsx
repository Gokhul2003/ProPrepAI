import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAuth } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import NavigationRoutes from "./NavigationRoutes";

const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
    <Sheet>
      {/* Trigger visible only on small screens */}
      <SheetTrigger className="block md:hidden p-2">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent side="left" className="w-[250px] sm:w-[300px]">
        <SheetHeader>
          <SheetTitle className="text-xl">Menu</SheetTitle>
        </SheetHeader>

        <nav className="mt-4 flex flex-col gap-4 items-start">
          <NavigationRoutes isMobile />

          {userId && (
            <SheetClose asChild>
              <NavLink
                to="/generate"
                className={({ isActive }) =>
                  cn(
                    "text-base text-neutral-600 transition-colors hover:text-neutral-900",
                    isActive && "font-semibold text-neutral-900"
                  )
                }
              >
                Take An Interview
              </NavLink>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default ToggleContainer;
