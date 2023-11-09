
const habits = [{ name: 'subuh'}, { name: 'zikir' }, { name: '7k steps'}, { name: 'dhuha'}, { name: 'doa'}]

export function HabitList() {
  return (
    <div className="space-y-2">
      {habits.map((habit, i) => {
        return (
          <div className="flex items-center bg-slate-100 p-4 rounded-md">
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