import { boot } from "quasar/wrappers"
import ganttastic from "@infectoone/vue-ganttastic"
import type { App } from "vue"

export default boot(({ app }: { app: App }) => {
  app.use(ganttastic)
})
