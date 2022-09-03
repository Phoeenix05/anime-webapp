
/**
 * It returns an array containing an AbortController and a timeout ID
 * @returns An array of two elements. The first element is an AbortController and the second element is
 * a timeoutId.
 */
export const getTimeoutController = (): [AbortController, NodeJS.Timeout] => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 5000)
  return [controller, timeoutId]
}
