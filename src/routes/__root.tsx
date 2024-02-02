import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

// components
import { ModeToggle } from "@/components/shared/ModeToggle";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<ModeToggle />
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
