import { BaseTemplate } from '@/components/templates/BaseTemplate'
import { Header } from '@/components/organisms/Header'

export default function Home() {
  return (
    <BaseTemplate>
      <Header isAdmin={true} />
    </BaseTemplate>
  )
}
