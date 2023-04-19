import { index } from ".contentlayer/generated"
import Mdx from "@/app/mdx-wrapper"

export const metadata = {
  title: index.title,
}

export default function Page() {
  const { code } = index.body

  return <Mdx>{code}</Mdx>
}
