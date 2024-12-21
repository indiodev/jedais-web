import { Sidebar } from "@/components/global/sidebar";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { ChevronsRight, LoaderCircle } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

function Fallback(): React.ReactElement {
  return (
    <main className="container gap-4 max-w-full w-full h-full flex flex-col">
      <div className="flex-1 flex justify-center items-center">
        <LoaderCircle className="w-12 h-12 animate-spin" />
      </div>
    </main>
  );
}

export function School(): React.ReactElement {
  const { toggleSidebar, isMobile } = useSidebar();

  return (
    <React.Fragment>
      <Sidebar />
      <React.Suspense fallback={<Fallback />}>
        <main className="p-2 flex-1 overflow-hidden h-screen space-y-1">
          {isMobile && (
            <section className="inline-flex w-full justify-start">
              <Button
                data-sidebar="trigger"
                variant="ghost"
                size="icon"
                className="border  p-0 w-6 h-6"
                onClick={toggleSidebar}
              >
                <ChevronsRight className="w-5 h-5 " />
              </Button>
            </section>
          )}

          <section className="flex h-full flex-1 flex-col gap-4 w-full overflow-y-auto p-4">
            <Outlet />
          </section>
        </main>
      </React.Suspense>
    </React.Fragment>
  );
}