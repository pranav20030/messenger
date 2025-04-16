"use client"

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps {
    
    icon: any;
    href: string;
    onClick?: () => void;
    active?: boolean
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    active,
    onClick,
    icon: Icon,
}) => {
    const handleClick  = () => {
        if(onClick){
            return onClick();
        }
    }
  return (
    <Link href={href}
    onClick={handleClick}
    className={clsx(`
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
        active ? 'bg-gray-100 text-black' : 'text-gray-500')}
    >
     <Icon className="h-6 w-6 shrink-0" />
    </Link>
  )
}

export default MobileItem