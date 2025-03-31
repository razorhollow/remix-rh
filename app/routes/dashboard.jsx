import { json, redirect } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);
  if (!user) return redirect("/login");
  return json({ user });
};

export default function DashboardPage() {
  const { user } = useLoaderData();

  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between bg-slate-800 p-4 text-white">
        <h1 className="text-3xl font-bold">
          <Link to=".">Admin Dashboard</Link>
        </h1>
        <p>{user.email}</p>
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
          >
            Logout
          </button>
        </Form>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 border-r bg-gray-50 overflow-y-auto">
          <nav className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Tools</h2>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/notes"
                  className={({ isActive }) =>
                    `block p-2 rounded-md ${
                      isActive ? "bg-gray-100 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  📝 Notes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/blog"
                  className={({ isActive }) =>
                    `block p-2 rounded-md ${
                      isActive ? "bg-gray-100 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  📚 Blog Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/emaillist"
                  className={({ isActive }) =>
                    `block p-2 rounded-md ${
                      isActive ? "bg-gray-100 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                    }`
                  }
                >
                  📧 Subscriber List
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
