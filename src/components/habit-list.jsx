import { useQuery } from '@tanstack/react-query'
import { Link, Outlet } from '@tanstack/react-router'

export function HabitList({ useRouteContext }) {
  const { queryOptions } = useRouteContext()
  const { isLoading, isError, data, error } = useQuery(queryOptions)

  return (
    <div className="space-y-2">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data.documents?.map((habit, i) => {
          return (
            <Link
              activeOptions={{ exact: true }}
              from={'/app'}
              to="$id"
              params={{ id: habit.$id }}
              key={i}
              preload="intent"
              className="flex items-center bg-slate-100 p-4 rounded-md"
            >
              {({ isActive }) => {
                return (
                  <>
                    <div className="ml-2 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {habit.name}
                      </p>
                    </div>
                    {isActive && <Outlet />}
                  </>
                )
              }}
            </Link>
          )
        })
      )}
    </div>
  )
}
