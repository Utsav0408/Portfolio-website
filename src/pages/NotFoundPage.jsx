import { Helmet } from 'react-helmet-async'
import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Container } from '../components/ui/Container.jsx'
import { Button } from '../components/ui/Button.jsx'

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Page not found | Utsav Rai</title>
      </Helmet>
      <section className="grid min-h-screen place-items-center py-24">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-300/90">404</p>
          <h1 className="mt-4 text-5xl font-semibold text-white md:text-7xl">This page drifted off the grid.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            The route you requested does not exist. Return to the main portfolio and continue exploring the case studies.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button onClick={() => navigate('/')}>
              Back home
              <FiArrowLeft />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}