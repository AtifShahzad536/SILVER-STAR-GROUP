import React, { useState } from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';
import NavigationDrawer from './NavigationDrawer';
import PartnerMegaMenu from './PartnerMegaMenu';

const Navbar = () => {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const drawerData = {
    PRODUCTS: {
      categories: [
        {
          name: 'BALLS',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=150&auto=format&fit=crop' },
            { name: 'FOOTBALLS', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&auto=format&fit=crop' },
            { name: 'HANDBALLS', image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=150&auto=format&fit=crop' },
            { name: 'FUTSAL', image: 'https://images.unsplash.com/photo-1518605388461-9c1682f63eef?q=80&w=150&auto=format&fit=crop' },
            { name: 'OTHER BALLS', image: 'https://images.unsplash.com/photo-1587329310686-91414b8e3cb7?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'CLOTHING',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop' },
            { name: 'MATCH & TRAINING WEAR', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' },
            { name: 'LEISURE WEAR', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=150&auto=format&fit=crop' },
            { name: 'GOALKEEPER WEAR', image: 'https://images.unsplash.com/photo-1556815302-09bb5e2f750c?q=80&w=150&auto=format&fit=crop' },
            { name: 'REFEREE WEAR', image: 'https://images.unsplash.com/photo-1584844284814-c10f84aab73f?q=80&w=150&auto=format&fit=crop' },
            { name: 'BASELAYER', image: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?q=80&w=150&auto=format&fit=crop' },
            { name: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1585834887375-7b1897b6a94f?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'TEAMGEAR',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=150&auto=format&fit=crop' },
            { name: 'SHIN GUARDS', image: 'https://images.unsplash.com/photo-1590483256059-e31460c5cff9?q=80&w=150&auto=format&fit=crop' },
            { name: 'BALL- & SPORTS BAGS', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=150&auto=format&fit=crop' },
            { name: 'RESIN PRODUCTS', image: 'https://images.unsplash.com/photo-1584735935682-167814db35ed?q=80&w=150&auto=format&fit=crop' },
            { name: 'BALL EQUIPMENT', image: 'https://images.unsplash.com/photo-1624880357913-a8539238165b?q=80&w=150&auto=format&fit=crop' },
            { name: 'TRAINING EQUIPMENT', image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?q=80&w=150&auto=format&fit=crop' },
            { name: 'REFEREE EQUIPMENT', image: 'https://images.unsplash.com/photo-1588612143162-87a718d09553?q=80&w=150&auto=format&fit=crop' },
            { name: 'TRAINING PACKAGES', image: 'https://images.unsplash.com/photo-1518605388461-9c1682f63eef?q=80&w=150&auto=format&fit=crop' },
            { name: 'BIBS & CAPTAINS BAND', image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=150&auto=format&fit=crop' },
            { name: 'OTHER', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'PROFCARE',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=150&auto=format&fit=crop' },
            { name: 'SPORTS SUPPORTS', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=150&auto=format&fit=crop' },
            { name: 'SPORTS CARE', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'MY TRAINING',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop' },
            { name: 'TRAINING BANDS', image: 'https://images.unsplash.com/photo-1588612143162-87a718d09553?q=80&w=150&auto=format&fit=crop' },
            { name: 'GYM BALLS', image: 'https://images.unsplash.com/photo-1518605388461-9c1682f63eef?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'GOALKEEPER',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1556815302-09bb5e2f750c?q=80&w=150&auto=format&fit=crop' },
            { name: 'GOALKEEPER GLOVES', image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=150&auto=format&fit=crop' },
            { name: 'WEAR', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'REFEREE',
          subCategories: [
            { name: 'CLOTHING', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=150&auto=format&fit=crop' },
            { name: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'KIDS',
          subCategories: [
            { name: 'SEE ALL', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=150&auto=format&fit=crop' },
            { name: 'BALLS', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&auto=format&fit=crop' },
            { name: 'CLOTHING', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' },
            { name: 'SPORTS SUPPORT', image: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=150&auto=format&fit=crop' },
            { name: 'GOALKEEPER GLOVES', image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=150&auto=format&fit=crop' }
          ]
        }
      ],
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop',
        alt: 'My Training',
        badge: 'NEW',
        title: 'SELECT MY TRAINING'
      }
    },
    SPORT: {
      categories: [
        {
          name: 'FOOTBALL',
          subCategories: [
            { name: 'FOOTBALLS', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&auto=format&fit=crop' },
            { name: 'CLOTHING', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' },
            { name: 'GOALKEEPER GLOVES', image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=150&auto=format&fit=crop' },
            { name: 'SHINGUARDS', image: 'https://images.unsplash.com/photo-1590483256059-e31460c5cff9?q=80&w=150&auto=format&fit=crop' },
            { name: 'CARE & SUPPORTS', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=150&auto=format&fit=crop' },
            { name: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'HANDBALL',
          subCategories: [
            { name: 'HANDBALLS', image: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=150&auto=format&fit=crop' },
            { name: 'CLOTHING', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' },
            { name: 'CARE & SUPPORTS', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=150&auto=format&fit=crop' },
            { name: 'RESIN PRODUCTS', image: 'https://images.unsplash.com/photo-1584735935682-167814db35ed?q=80&w=150&auto=format&fit=crop' },
            { name: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'FUTSAL',
          subCategories: [
            { name: 'FUTSAL BALLS', image: 'https://images.unsplash.com/photo-1518605388461-9c1682f63eef?q=80&w=150&auto=format&fit=crop' },
            { name: 'CLOTHING', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=150&auto=format&fit=crop' },
            { name: 'GLOVES', image: 'https://images.unsplash.com/photo-1614632537190-23e4146777db?q=80&w=150&auto=format&fit=crop' },
            { name: 'CARE & SUPPORTS', image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=150&auto=format&fit=crop' },
            { name: 'EQUIPMENT', image: 'https://images.unsplash.com/photo-1541252260730-0412e8e2108e?q=80&w=150&auto=format&fit=crop' }
          ]
        },
        {
          name: 'OTHER',
          subCategories: [
            { name: 'BALLS', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=150&auto=format&fit=crop' }
          ]
        }
      ],
      bottomImage: [
        {
          src: 'https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=800&auto=format&fit=crop',
          alt: 'Other balls',
          badge: '',
          title: 'Other balls'
        },
        {
          src: 'https://images.unsplash.com/photo-1574629810360-7efbc193988b?q=80&w=800&auto=format&fit=crop',
          alt: 'Handballs',
          badge: '',
          title: 'Handballs'
        }
      ]
    },
     EXPLORE: {
      categories: [
        'GUIDES', 'CATALOGUE', 'SELECT LAB'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
        alt: 'Brochure',
        isRawImage: true
      }
    },
    'ABOUT US': {
      categories: [
        'ABOUT SELECT', 'CONTACT', 'CSR', 'ENVIROMENTAL TRANSITION', 
        'PRESS & NEWS', 'CHARITY', 'SPONSORSHIPS'
      ],
      hideChevrons: true,
      bottomImage: {
        src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?q=80&w=800&auto=format&fit=crop', 
        alt: 'Environmental transition',
        title: 'Environmental transition',
        isRawImage: true,
        noRotate: true
      }
    }
  };

  const navLinks = [
    'PRODUCTS',
    'SPORT',
    'EXPLORE',
    'PARTNER WITH US',
    'ABOUT US'
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 flex flex-col items-center justify-center">
            <div className="absolute top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-black group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter mt-1">SELECT</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div 
              key={link} 
              className="flex items-center gap-1 cursor-pointer group"
              onClick={() => {
                if (link === 'PRODUCTS' || link === 'SPORT' || link === 'EXPLORE' || link === 'PARTNER WITH US' || link === 'ABOUT US') {
                  if (activeDrawer === link) {
                    setActiveDrawer(null); // toggle off
                  } else {
                    setActiveDrawer(link);
                  }
                }
              }}
            >
              <span className={`nav-link text-xs tracking-widest ${activeDrawer === link ? 'font-bold' : ''}`}>{link}</span>
              {(link === 'PRODUCTS' || link === 'SPORT' || link === 'EXPLORE' || link === 'PARTNER WITH US' || link === 'ABOUT US') && (
                <ChevronDown size={14} className={`transition-transform duration-300 ${(activeDrawer === link) ? 'rotate-180' : 'group-hover:rotate-180'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-blue-600">
              <Globe size={14} className="text-white" />
            </div>
            <span className="text-xs font-normal flex items-center gap-1">
              International <ChevronDown size={12} />
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      
      <NavigationDrawer 
        isOpen={!!activeDrawer && activeDrawer !== 'PARTNER WITH US'} 
        onClose={() => setActiveDrawer(null)} 
        data={activeDrawer && activeDrawer !== 'PARTNER WITH US' ? drawerData[activeDrawer] : null}
      />

      <PartnerMegaMenu
        isOpen={activeDrawer === 'PARTNER WITH US'}
        onClose={() => setActiveDrawer(null)}
      />
    </nav>
  );
};

export default Navbar;
