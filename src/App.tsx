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
        <section className="bg-white grid grid-cols-1 overflow-hidden rounded-lg tb:grid-cols-3">
          <h1 className="sr-only">List of vehicles available</h1>
          <ArticleCard
            baseColor="#E28625"
            description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
            icon={<IconSedans />}
            title="Sedans"
          />
          <ArticleCard
            baseColor="#006971"
            description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
            icon={<IconSuvs />}
            title="Suvs"
          />
          <ArticleCard
            baseColor="#004140"
            description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
            icon={<IconLuxury />}
            title="Luxury"
          />
        </section>
      </main>

      <Attribution />
    </>
  )
}
