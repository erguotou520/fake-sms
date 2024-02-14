export function json(data: any, status = 200, headers?: Headers): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: headers || {}
  })
}

export function getCommonResponse(data: any, msg?: string) {
  return {
    data,
    msg
  }
}
