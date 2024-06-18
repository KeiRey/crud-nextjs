import { FaLongArrowAltLeft } from "react-icons/fa";
import ToggleTheme from "./ToggleTheme";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface PageHeadingProps {
  title: string;
  description?: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  const path = usePathname();
  return (
    <>
      <div className="flex items-center gap-2">
        {path !== "/" && (
          <Link href={"/"} className="">
            <FaLongArrowAltLeft />
          </Link>
        )}
        <h1 className="font-sora text-2xl font-medium">{title}</h1>
      </div>
      <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:!text-neutral-400">
        {description}
      </p>
    </>
  );
}
