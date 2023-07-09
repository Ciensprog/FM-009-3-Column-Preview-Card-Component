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
          <ArticleCard baseColor="#E28625" title="Sedans" />
          <ArticleCard baseColor="#006971" title="Suvs" />
          <ArticleCard baseColor="#004140" title="Luxury" />
        </section>
      </main>

      <Attribution />
    </>
  )
}
