import {useQuery} from "@tanstack/react-query";
import {databases} from "@/lib/database";

const habits = [{ name: 'subuh'}, { name: 'zikir' }, { name: '7k steps'}, { name: 'dhuha'}, { name: 'doa'}]

export function HabitList() {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['habits'],
    queryFn: async () => {
      return await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_COLLECTION_ID
    );
    },
  })

  return (
    <div className="space-y-2">
      {
        isLoading ? <div>Loading</div> :
        data.documents.map((habit, i) => {
        return (
          <div key={i} className="flex items-center bg-slate-100 p-4 rounded-md">
            <div className="ml-2 space-y-1">
              <p className="text-sm font-medium leading-none">{habit.name}</p>
              {/*<p className="text-sm text-muted-foreground">*/}
              {/*  olivia.martin@email.com*/}
              {/*</p>*/}
            </div>
            {/*<div className="ml-auto font-medium">+$1,999.00</div>*/}
          </div>
        )
      })}
    </div>
  )
}