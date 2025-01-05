import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home, AlertCircle, Bell, User, Settings, LogOut, Menu, Map } from 'lucide-react';
import Footer from './Footer';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility on mobile

  const navigation = [
    { name: 'Home', href: '/home', icon: Home },
    { name: 'Issues', href: '/issues', icon: AlertCircle },
    { name: 'Maps', href: '/maps', icon: Map },
    { name: 'Notices', href: '/notices', icon: Bell },
    { name: 'Profile', href: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Header */}
      <div className="flex items-center h-16 px-4 bg-white border-b md:hidden">
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-600 focus:outline-none">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="ml-4 flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-indigo-600" />
          <span className="text-xl font-bold">Communitifx</span>
        </Link>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:z-auto`}
      >
        <div className="flex items-center h-16 px-4 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold">Communitifx</span>
          </Link>
        </div>
        <nav className="p-4 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  location.pathname === item.href
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t">
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <button
            onClick={() => {
              /* Add logout logic */
            }}
            className="w-full flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-grow">
        <main className="flex-grow py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
