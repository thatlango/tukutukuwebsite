import { isRouteErrorResponse, useRouteError, Link } from "react-router";

export function RouteError() {
  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred while loading this page.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    message = typeof error.data === "string" ? error.data : message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center rounded-2xl border border-border bg-card p-8">
        <h1 className="text-2xl font-bold text-primary mb-3">{title}</h1>
        <p className="text-muted-foreground mb-6">{message}</p>
        <Link to="/" className="inline-flex rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
          Return Home
        </Link>
      </div>
    </main>
  );
}
