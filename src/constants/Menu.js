import { IoHomeOutline, IoReceiptOutline } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsCartCheck, BsWallet } from 'react-icons/bs';

const Menu = [
  {
    id: 'menu-item-1',
    text: 'الرئيسية',
    Icon: IoHomeOutline,
    href: '#!',
    class: 'active',
  },
  {
    id: 'menu-item-2',
    text: 'المحفظة',
    Icon: BsWallet,
    href: '#!',
    class: '',
  },
  {
    id: 'menu-item-3',
    text: 'المبيعات',
    Icon: IoReceiptOutline,
    href: '#!',
    class: '',
  },
  {
    id: 'menu-item-4',
    text: 'طلبات مسبقة',
    Icon: BsCartCheck,
    href: '#!',
    class: '',
  },
  {
    id: 'menu-item-5',
    text: 'المزيد',
    Icon: FiMoreHorizontal,
    href: '#!',
    class: '',
  },
];
export default Menu;
