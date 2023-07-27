'use client'

import MenuBar from "@/layout/MenuBar"
import Table from "@/components/Table"

export default function Home() {
  return (
    <>
      <MenuBar />

      <main className="container mx-auto px-4 mt-20">
        <Table/>
      </main>
    </>
  )
}
