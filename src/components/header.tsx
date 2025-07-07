import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h1 className="text-lg font-semibold">header</h1>

      {/* Clerk profile button */}
      <UserButton afterSignOutUrl="/signin" />
    </div>
  );
};

export default Header;
