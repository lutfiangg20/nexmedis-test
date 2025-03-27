import { Home, User, type LucideProps } from "lucide-vue-next"
import type { FunctionalComponent } from "vue"

type Data = {
  name: string
  url: string
  icon?: FunctionalComponent<LucideProps, {}, any, {}>
}

export const menuList: Data[] = [
  {
    name: 'Home',
    url: '/home',
    icon: Home,
  },
  {
    name: 'Profile',
    url: '/profile',
    icon: User,
  },
]
