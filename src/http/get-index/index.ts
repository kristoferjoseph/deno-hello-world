export async function handler(request) {
  return {
    body: JSON.stringify({ok: true, deno: Deno.version})
  }
}
