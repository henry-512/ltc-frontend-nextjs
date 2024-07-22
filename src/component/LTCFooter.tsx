import { LuExternalLink } from 'react-icons/lu'

export default function LTCFooter() {
  return (
    <footer className="absolute bottom-0 w-full">
      <div className="flex items-center text-md bg-gray-100 dark:bg-gray-800  space-x-3">
        <span>powered by magic</span>
        <LuExternalLink fontSize="20" />
      </div>
    </footer>
  )
}
