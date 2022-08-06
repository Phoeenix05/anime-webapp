
export const getTimeoutController = (): [AbortController, NodeJS.Timeout] => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)
  return [controller, timeoutId]
}
