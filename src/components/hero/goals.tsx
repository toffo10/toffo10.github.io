
import { Star, Trophy, Users } from "lucide-react"

const goals = function () {
  return (
    <div className="flex flex-wrap gap-6 text-sm">
      <div className="flex items-center space-x-2">
        <Star className="h-5 w-5 text-yellow-500" />
        <span>5+ Years Experience</span>
      </div>
      <div className="flex items-center space-x-2">
        <Users className="h-5 w-5 text-blue-500" />
        <span>200+ Happy Clients</span>
      </div>
      <div className="flex items-center space-x-2">
        <Trophy className="h-5 w-5 text-green-500" />
        <span>Certified Professional</span>
      </div>
    </div>
  )
}

export { goals as Goals }

