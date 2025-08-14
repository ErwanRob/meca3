import { FaLayerGroup } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

interface MenuItemIconProps {
  level: number;
  isActive: boolean;
  isExactActive: boolean;
}

export const MenuItemIcon: React.FC<MenuItemIconProps> = ({
  level,
  isActive,
  isExactActive,
}) => {
  if (level === 0) {
    const iconColor = isActive ? "text-gray-700" : "text-gray-300";
    return <FaLayerGroup className={iconColor} />;
  }

  if (isExactActive) {
    return <GoDotFill className="text-xs text-orange-500" />;
  }

  if (isActive) {
    return <GoDotFill className="text-xs text-gray-700" />;
  }

  return <GoDotFill className="text-xs text-gray-300" />;
};
