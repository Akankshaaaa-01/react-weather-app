import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const menuItems = [
  { name: "Home", icon: HomeOutlinedIcon },
  { name: "Forecast", icon: ExploreOutlinedIcon },
  { name: "Locations", icon: LocationOnOutlinedIcon },
  { name: "Analytics", icon: PieChartOutlinedIcon },
  { name: "Calendar", icon: CalendarMonthOutlinedIcon },
  { name: "Settings", icon: SettingsOutlinedIcon },
];

function SidebarItem({ icon: Icon, name }) {
  return (
    <li className="flex group items-center m-2 gap-4 p-5 rounded-xl hover:bg-white/15 cursor-pointer border-l-4 border-transparent hover:border-indigo-400 transition-all">
      <span className="text-gray-300 group-hover:text-white group-hover:scale-110 transition-all">
        <Icon />
      </span>
      <span className="text-sm group-hover:text-white group-hover:text-base transition-all">{name}</span>
    </li>
  );
}

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-indigo-950 text-white/55 fixed">
      <ul className="space-y-8 mt-24">
        {menuItems.map(item => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
}