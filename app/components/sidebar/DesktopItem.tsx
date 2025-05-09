"use client";

import clsx from "clsx";
import Link from "next/link";

interface DesktopItemProps {
    label: string;
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    icon:Icon,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if(onClick){
            return onClick();
        }
    };
  return (
    <li onClick={handleClick}>
        <Link href={href} className={clsx(`
            group
            flex
            gap-x-3
            rounded-md
            p-3
            text-sm
            leading-6
            font-semibold
            
            hover:text-black
            hover:bg-gray-100
             items-center
            `,
            active ? 'bg-gray-100 text-black' : 'text-gray-500')}>
        <Icon className="h-6 w-6 shrink-0" />
         <span className="sr-only">{label}</span>
        </Link>

    </li>
  )
}

export default DesktopItem;