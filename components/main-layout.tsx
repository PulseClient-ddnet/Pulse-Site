"use client"

import React from "react"
import Link from "next/link"
import { LayoutGrid, Settings, Trophy, Users, Newspaper, LogOut, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

interface MainLayoutProps {
  children: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useMobile()
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" onClick={toggleSidebar} className="fixed top-4 left-4 z-50 md:hidden">
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-zinc-900 border-r border-zinc-800",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-zinc-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
                <LayoutGrid size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                DDRNet Mod
              </h1>
            </div>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            <NavItem href="/" icon={<Users size={18} />} label="Servers" />
            <NavItem href="/stats" icon={<Trophy size={18} />} label="Stats" />
            <NavItem href="/settings" icon={<Settings size={18} />} label="Settings" />
            <NavItem href="/news" icon={<Newspaper size={18} />} label="News" />
          </nav>

          <div className="p-4 border-t border-zinc-800">
            <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white">
              <LogOut size={18} className="mr-2" />
              Exit Client
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={cn("flex-1 transition-all duration-300 ease-in-out", sidebarOpen ? "md:ml-64" : "ml-0")}>
        <main className="p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

function NavItem({ href, icon, label }: NavItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center px-3 py-2 text-sm rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
    >
      <span className="mr-3">{icon}</span>
      {label}
    </Link>
  )
}
