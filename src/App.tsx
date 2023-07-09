import { IconLuxury } from '@/assets/icons/luxury'
import { IconSedans } from '@/assets/icons/sedans'
import { IconSuvs } from '@/assets/icons/suvs'

import { ArticleCard } from '@/components/ArticleCard'
import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <section className="bg-white overflow-hidden rounded-lg">
          <h1 className="sr-only">List of vehicles available</h1>
          <ArticleCard
            baseColor="#E28625"
            icon={<IconSedans />}
            title="Sedans"
          />
          <ArticleCard baseColor="#006971" icon={<IconSuvs />} title="Suvs" />
          <ArticleCard
            baseColor="#004140"
            icon={<IconLuxury />}
            title="Luxury"
          />
        </section>
      </main>

      <Attribution />
    </>
  )
}
