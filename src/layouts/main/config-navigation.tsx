// routes
import { paths } from 'src/routes/paths';
// config
// import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: '服務介紹',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
    children: [
      {
        subheader: '',
        items: [
          { title: 'CRM', path: '/solution' },
          { title: 'KM', path: '/solution' },
          { title: 'CMS', path: '/solution' },
          { title: 'HRM', path: '/solution' },
        ],
      },
    ],
  },
  {
    title: '產品特點',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: paths.solution,
    scrollTo: 'home-trial',
  },
  {
    title: '客戶回饋',
    path: paths.contact,
    icon: <Iconify icon="solar:file-bold-duotone" />,
    scrollTo: 'customer-feedback',
  },
  {
    title: '精選案例',
    path: '/account',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: '',
        items: [
          { title: '總覽', path: paths.about },
          { title: '總覽1', path: paths.contact },
          { title: '案例2', path: paths.faqs },
          { title: '案例3', path: paths.payment },
        ],
      },
    ],
  },
  {
    title: '費用說明',
    icon: <Iconify icon="olar:file-bold-duotone" />,
    path: paths.pricing,
  },

  // {
  //   title: 'Documentation',
  //   icon: <Iconify icon="solar:notebook-bold-duotone" />,
  //   path: paths.documentation,
  // },
];
