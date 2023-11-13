import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'

export const dynamic = "force-dynamic";
 
export async function POST(request: NextRequest) {
  revalidateTag('test')

  return Response.json({ revalidated: true, now: Date.now() })
}
