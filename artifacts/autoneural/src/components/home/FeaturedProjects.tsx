import { motion } from 'framer-motion';
import { ArrowUpRight, CircleCheck } from 'lucide-react';

export function FeaturedProjects() {
  return (
      <section id="projects" className="bg-background py-28 md:py-32" data-testid="featured-projects-section">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <motion.p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-primary" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Selected Work
              </motion.p>
              <motion.h2 className="font-serif text-5xl font-semibold leading-[0.94] text-foreground md:text-6xl lg:text-7xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
                Examples of what we can build for you.
              </motion.h2>
            </div>
            <motion.p className="max-w-2xl text-lg leading-8 text-secondary-foreground" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              Every project starts with a real business problem: too much manual work, slow replies, scattered data, missed follow-ups, or reports that take hours to prepare.
            </motion.p>
          </div>
          <motion.div className="mb-8 rounded-lg border border-primary/25 bg-primary/5 px-5 py-4 text-sm leading-6 text-secondary-foreground" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span className="font-semibold text-foreground">
              Client privacy note:
            </span>
            we do not publish live client systems or disclose confidential technology. These examples show the type of solutions we build while protecting client work, data, and business processes.
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-0" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="AI Seafood Trade Operating System" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%230D1D22'/%3e%3cpath%20d='M0%200h1200v675H0z'%20fill='url(%23bg)'/%3e%3cg%20opacity='.18'%3e%3cpath%20d='M70%20170c170%2028%20245%20124%20390%20112%20154-13%20216-142%20385-126%20116%2011%20197%2082%20285%20160'%20stroke='%238ADDC9'%20stroke-width='3'/%3e%3cpath%20d='M102%20458c150-93%20250-78%20354-33%20155%2068%20254%2057%20392-50%2085-67%20168-90%20272-61'%20stroke='%23DB8C4A'%20stroke-width='3'/%3e%3c/g%3e%3cg%20transform='translate(96%2092)'%3e%3crect%20width='445'%20height='414'%20rx='22'%20fill='%23102B31'%20stroke='%232A6570'/%3e%3crect%20x='30'%20y='30'%20width='385'%20height='58'%20rx='14'%20fill='%23173D44'/%3e%3ccircle%20cx='61'%20cy='59'%20r='15'%20fill='%23DB6A26'/%3e%3crect%20x='92'%20y='49'%20width='210'%20height='10'%20rx='5'%20fill='%23B7DCD4'%20opacity='.7'/%3e%3crect%20x='30'%20y='122'%20width='175'%20height='122'%20rx='18'%20fill='%2313343B'/%3e%3cpath%20d='M58%20207c37-52%2078-72%20124-62'%20stroke='%237CE7CA'%20stroke-width='8'%20stroke-linecap='round'/%3e%3cpath%20d='M74%20191c31%204%2065%2016%2098%2037'%20stroke='%23DB6A26'%20stroke-width='8'%20stroke-linecap='round'/%3e%3crect%20x='232'%20y='122'%20width='183'%20height='122'%20rx='18'%20fill='%2313343B'/%3e%3cpath%20d='M261%20213h124M261%20185h92M261%20157h139'%20stroke='%23B7DCD4'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.7'/%3e%3crect%20x='30'%20y='276'%20width='385'%20height='92'%20rx='18'%20fill='%2313343B'/%3e%3cpath%20d='M66%20331c47-42%2088-41%20125%200%2044%2048%2092%2049%20145%200'%20stroke='%237CE7CA'%20stroke-width='9'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(656%20120)'%3e%3crect%20x='0'%20y='260'%20width='395'%20height='88'%20rx='14'%20fill='%2311282E'%20stroke='%232A6570'/%3e%3cpath%20d='M42%20260v-72h178l54%2072'%20fill='%23173D44'/%3e%3cpath%20d='M72%20205h103M72%20231h137'%20stroke='%238ADDC9'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.65'/%3e%3cpath%20d='M274%20260h82l-18-50h-83l19%2050z'%20fill='%23DB6A26'%20opacity='.85'/%3e%3ccircle%20cx='98'%20cy='363'%20r='38'%20fill='%230D1D22'%20stroke='%238ADDC9'%20stroke-width='12'/%3e%3ccircle%20cx='306'%20cy='363'%20r='38'%20fill='%230D1D22'%20stroke='%238ADDC9'%20stroke-width='12'/%3e%3cpath%20d='M58%20160c88-64%20184-92%20287-83'%20stroke='%23E7C89D'%20stroke-width='4'%20stroke-dasharray='10%2016'%20opacity='.8'/%3e%3ccircle%20cx='60'%20cy='160'%20r='10'%20fill='%23DB6A26'/%3e%3ccircle%20cx='345'%20cy='77'%20r='10'%20fill='%237CE7CA'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(780%20120)%20rotate(120)%20scale(740%20520)'%3e%3cstop%20stop-color='%231F6A64'/%3e%3cstop%20offset='.55'%20stop-color='%23123037'/%3e%3cstop%20offset='1'%20stop-color='%230D1D22'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    Seafood Export &amp; Trading
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  One place to manage buyers, prices, papers, and shipments.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    AI Seafood Trade Operating System
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A business platform for seafood exporters that helps teams prepare quotes, match buyers with products, create export documents, track shipments, and understand profit margins.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Find suitable buyers faster
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Prepare export papers with less manual work
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      See prices and margins clearly
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Next.js
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    NestJS
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    OpenAI
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    PostgreSQL
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    AWS
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-1" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="Healthcare AI Operations Copilot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23121A2A'/%3e%3crect%20width='1200'%20height='675'%20fill='url(%23bg)'/%3e%3cg%20opacity='.13'%20stroke='%23BFD3FF'%20stroke-width='2'%3e%3cpath%20d='M0%20150h1200M0%20300h1200M0%20450h1200M250%200v675M500%200v675M750%200v675M1000%200v675'/%3e%3c/g%3e%3cg%20transform='translate(106%2082)'%3e%3crect%20width='420'%20height='475'%20rx='28'%20fill='%2317233A'%20stroke='%2331496C'/%3e%3crect%20x='36'%20y='36'%20width='348'%20height='64'%20rx='18'%20fill='%23223254'/%3e%3cpath%20d='M70%2068h70M170%2068h166'%20stroke='%23BFD3FF'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.7'/%3e%3crect%20x='36'%20y='138'%20width='348'%20height='102'%20rx='20'%20fill='%231C2A45'/%3e%3cpath%20d='M70%20191h63M165%20191h64M261%20191h88'%20stroke='%237ED7C1'%20stroke-width='12'%20stroke-linecap='round'/%3e%3ccircle%20cx='89'%20cy='296'%20r='42'%20fill='%23263B61'/%3e%3cpath%20d='M89%20270v52M63%20296h52'%20stroke='%23FF7F50'%20stroke-width='14'%20stroke-linecap='round'/%3e%3cpath%20d='M166%20285h178M166%20319h126'%20stroke='%23BFD3FF'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.65'/%3e%3crect%20x='36'%20y='380'%20width='145'%20height='50'%20rx='16'%20fill='%232B426B'/%3e%3crect%20x='204'%20y='380'%20width='180'%20height='50'%20rx='16'%20fill='%232B426B'/%3e%3c/g%3e%3cg%20transform='translate(642%20120)'%3e%3ccircle%20cx='215'%20cy='202'%20r='155'%20fill='%23192845'%20stroke='%2331496C'/%3e%3cpath%20d='M122%20230c43-92%20112-127%20206-104'%20stroke='%237ED7C1'%20stroke-width='12'%20stroke-linecap='round'/%3e%3cpath%20d='M124%20232c50%2018%2086%2047%20108%2088%2030-98%2082-157%20156-176'%20stroke='%23FF7F50'%20stroke-width='12'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cg%20opacity='.9'%3e%3ccircle%20cx='98'%20cy='100'%20r='18'%20fill='%23FF7F50'/%3e%3ccircle%20cx='346'%20cy='286'%20r='18'%20fill='%237ED7C1'/%3e%3ccircle%20cx='338'%20cy='94'%20r='12'%20fill='%23BFD3FF'/%3e%3ccircle%20cx='88'%20cy='318'%20r='12'%20fill='%23BFD3FF'/%3e%3c/g%3e%3cpath%20d='M98%20100c96-48%20177-50%20240-6M88%20318c90%2048%20176%2038%20258-32'%20stroke='%23BFD3FF'%20stroke-width='4'%20stroke-dasharray='10%2014'%20opacity='.45'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(832%20172)%20rotate(126)%20scale(734%20550)'%3e%3cstop%20stop-color='%2331496C'/%3e%3cstop%20offset='.55'%20stop-color='%2317233A'/%3e%3cstop%20offset='1'%20stop-color='%23121A2A'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    Healthcare
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Less paperwork for healthcare teams.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    Healthcare AI Operations Copilot
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A support tool that helps collect patient details, organize follow-ups, prepare summaries, route appointments, and give staff clearer daily reports.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Collect patient information
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Summarize notes for staff
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Track follow-ups and appointments
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    React
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Python
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    LLMs
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    MongoDB
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Azure
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-2" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="Manufacturing Quality Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23171614'/%3e%3crect%20width='1200'%20height='675'%20fill='url(%23bg)'/%3e%3cg%20transform='translate(94%2092)'%3e%3crect%20x='0'%20y='282'%20width='1012'%20height='92'%20rx='20'%20fill='%232A2925'%20stroke='%235A554A'/%3e%3cpath%20d='M40%20328h920'%20stroke='%23E7C89D'%20stroke-width='14'%20stroke-linecap='round'%20stroke-dasharray='1%2046'%20opacity='.7'/%3e%3cg%20transform='translate(86%2098)'%3e%3crect%20width='212'%20height='172'%20rx='22'%20fill='%232C302C'%20stroke='%236B765F'/%3e%3cpath%20d='M48%2094h118M48%20128h82'%20stroke='%23E7C89D'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.75'/%3e%3ccircle%20cx='161'%20cy='48'%20r='18'%20fill='%23DB6A26'/%3e%3cpath%20d='M151%2048h20M161%2038v20'%20stroke='%23171614'%20stroke-width='6'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(392%2056)'%3e%3crect%20width='232'%20height='214'%20rx='24'%20fill='%23242827'%20stroke='%233E8B75'/%3e%3ccircle%20cx='116'%20cy='104'%20r='64'%20fill='%2317211F'%20stroke='%237CE7CA'%20stroke-width='12'/%3e%3cpath%20d='M83%20104l23%2023%2049-58'%20stroke='%23DB6A26'%20stroke-width='14'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M54%20186h124'%20stroke='%23E7C89D'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.65'/%3e%3c/g%3e%3cg%20transform='translate(742%2098)'%3e%3crect%20width='188'%20height='172'%20rx='22'%20fill='%232C302C'%20stroke='%236B765F'/%3e%3cpath%20d='M42%20128h104M42%2098h76M42%2068h120'%20stroke='%23E7C89D'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.75'/%3e%3cpath%20d='M148%2038l22%2022M170%2038l-22%2022'%20stroke='%23DB6A26'%20stroke-width='8'%20stroke-linecap='round'/%3e%3c/g%3e%3cpath%20d='M192%2098V38h314v18M508%2056v-40h328v82'%20stroke='%237CE7CA'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.6'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(788%20238)%20rotate(139)%20scale(684%20482)'%3e%3cstop%20stop-color='%234B463A'/%3e%3cstop%20offset='.55'%20stop-color='%23242421'/%3e%3cstop%20offset='1'%20stop-color='%23171614'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    Manufacturing
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Spot quality issues earlier.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    Manufacturing Quality Automation
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A factory support system that flags product issues, records shift performance, alerts managers, and helps teams take action before small problems become costly.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Find defects quickly
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Create shift reports
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Alert managers when action is needed
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Python
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    TensorFlow
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Redis
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Docker
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    GCP
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-3" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="Enterprise CRM &amp; ERP Automation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23111827'/%3e%3crect%20width='1200'%20height='675'%20fill='url(%23bg)'/%3e%3cg%20opacity='.18'%20stroke='%2394A3B8'%20stroke-width='2'%3e%3cpath%20d='M100%20118h1000M100%20552h1000M178%2070v535M1024%2070v535'/%3e%3c/g%3e%3cg%20transform='translate(126%2098)'%3e%3crect%20width='286'%20height='430'%20rx='26'%20fill='%23182235'%20stroke='%23334155'/%3e%3ccircle%20cx='76'%20cy='76'%20r='38'%20fill='%2324344F'/%3e%3cpath%20d='M55%2081c18-27%2042-27%2061%200'%20stroke='%237CE7CA'%20stroke-width='10'%20stroke-linecap='round'/%3e%3cpath%20d='M145%2058h94M145%2092h64'%20stroke='%23CBD5E1'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.65'/%3e%3crect%20x='38'%20y='148'%20width='210'%20height='54'%20rx='14'%20fill='%2322304A'/%3e%3crect%20x='38'%20y='226'%20width='210'%20height='54'%20rx='14'%20fill='%2322304A'/%3e%3crect%20x='38'%20y='304'%20width='210'%20height='54'%20rx='14'%20fill='%2322304A'/%3e%3cpath%20d='M68%20175h104M68%20253h136M68%20331h82'%20stroke='%23CBD5E1'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.65'/%3e%3c/g%3e%3cg%20transform='translate(516%20138)'%3e%3ccircle%20cx='148'%20cy='196'%20r='118'%20fill='%23162B2C'%20stroke='%233E8B75'/%3e%3cpath%20d='M148%2090v212M42%20196h212'%20stroke='%237CE7CA'%20stroke-width='10'%20stroke-linecap='round'/%3e%3ccircle%20cx='148'%20cy='196'%20r='42'%20fill='%23DB6A26'/%3e%3cpath%20d='M132%20196h32M148%20180v32'%20stroke='%23111827'%20stroke-width='8'%20stroke-linecap='round'/%3e%3cpath%20d='M24%20196H-104M252%20196h134M148%2078V-8M148%20314v90'%20stroke='%237CE7CA'%20stroke-width='5'%20stroke-linecap='round'%20opacity='.7'/%3e%3c/g%3e%3cg%20transform='translate(846%20126)'%3e%3crect%20width='240'%20height='360'%20rx='26'%20fill='%23182235'%20stroke='%23334155'/%3e%3crect%20x='34'%20y='42'%20width='172'%20height='58'%20rx='16'%20fill='%2322304A'/%3e%3crect%20x='34'%20y='130'%20width='172'%20height='58'%20rx='16'%20fill='%2322304A'/%3e%3crect%20x='34'%20y='218'%20width='172'%20height='58'%20rx='16'%20fill='%2322304A'/%3e%3cpath%20d='M66%2071h110M66%20159h82M66%20247h122'%20stroke='%23CBD5E1'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.65'/%3e%3ccircle%20cx='196'%20cy='296'%20r='22'%20fill='%237CE7CA'/%3e%3cpath%20d='M187%20296l7%208%2015-18'%20stroke='%23111827'%20stroke-width='6'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(675%20228)%20rotate(134)%20scale(700%20510)'%3e%3cstop%20stop-color='%23263C56'/%3e%3cstop%20offset='.6'%20stop-color='%23141F31'/%3e%3cstop%20offset='1'%20stop-color='%23111827'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    Professional Services
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Sales, support, billing, and reports stay updated.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    Enterprise CRM &amp; ERP Automation
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A system that updates customer records, follows up with leads, summarizes calls, keeps billing tasks moving, and syncs information across business tools.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Prioritize better leads
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Summarize calls and emails
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Keep business records in sync
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Node.js
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    LangChain
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    n8n
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Redis
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    APIs
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="E-commerce Support Intelligence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23102018'/%3e%3crect%20width='1200'%20height='675'%20fill='url(%23bg)'/%3e%3cg%20transform='translate(98%2090)'%3e%3crect%20width='338'%20height='470'%20rx='34'%20fill='%23142D21'%20stroke='%232B684C'/%3e%3crect%20x='36'%20y='44'%20width='205'%20height='64'%20rx='24'%20fill='%231E4A34'/%3e%3crect%20x='96'%20y='138'%20width='206'%20height='64'%20rx='24'%20fill='%23203A30'/%3e%3crect%20x='36'%20y='232'%20width='246'%20height='64'%20rx='24'%20fill='%231E4A34'/%3e%3crect%20x='84'%20y='326'%20width='218'%20height='64'%20rx='24'%20fill='%23203A30'/%3e%3cpath%20d='M74%2076h112M134%20170h128M74%20264h168M122%20358h136'%20stroke='%23D5F7DF'%20stroke-width='10'%20stroke-linecap='round'%20opacity='.7'/%3e%3ccircle%20cx='276'%20cy='72'%20r='28'%20fill='%2325D366'/%3e%3cpath%20d='M263%2076c16%2017%2034%208%2038-13'%20stroke='%23102018'%20stroke-width='7'%20stroke-linecap='round'/%3e%3c/g%3e%3cg%20transform='translate(572%20126)'%3e%3crect%20x='0'%20y='118'%20width='210'%20height='178'%20rx='24'%20fill='%23183A2A'%20stroke='%232B684C'/%3e%3cpath%20d='M38%20118l26-58h82l28%2058'%20fill='%23DB6A26'/%3e%3cpath%20d='M56%20176h98M56%20216h132M56%20256h74'%20stroke='%23D5F7DF'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.7'/%3e%3ccircle%20cx='178'%20cy='54'%20r='34'%20fill='%2325D366'/%3e%3cpath%20d='M162%2055l11%2012%2022-26'%20stroke='%23102018'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cg%20transform='translate(846%20132)'%3e%3crect%20width='230'%20height='300'%20rx='28'%20fill='%23142D21'%20stroke='%232B684C'/%3e%3cpath%20d='M54%2086h122M54%20132h82M54%20178h142'%20stroke='%23D5F7DF'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.7'/%3e%3cpath%20d='M56%20238c38-42%2078-42%20118%200'%20stroke='%2325D366'%20stroke-width='12'%20stroke-linecap='round'/%3e%3ccircle%20cx='186'%20cy='52'%20r='20'%20fill='%23DB6A26'/%3e%3c/g%3e%3cpath%20d='M440%20330h112M782%20272h54'%20stroke='%2325D366'%20stroke-width='6'%20stroke-linecap='round'%20stroke-dasharray='14%2018'/%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(735%20186)%20rotate(128)%20scale(700%20510)'%3e%3cstop%20stop-color='%23245C3E'/%3e%3cstop%20offset='.55'%20stop-color='%23143323'/%3e%3cstop%20offset='1'%20stop-color='%23102018'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    E-commerce
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Answer customers faster on WhatsApp and web chat.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    E-commerce Support Intelligence
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A support setup that answers product questions, checks order status, handles returns, warns staff about unhappy customers, and passes important chats to humans.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      WhatsApp and website chatbot
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Order and return updates
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Clear support dashboard
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Next.js
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    OpenAI
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    WhatsApp API
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    MongoDB
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Vercel
                  </span>
                </div>
              </div>
            </motion.div>
            <motion.div className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-clay" data-testid="project-card-5" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img alt="Finance Document Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="data:image/svg+xml,%3csvg%20width='1200'%20height='675'%20viewBox='0%200%201200%20675'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='1200'%20height='675'%20fill='%23201714'/%3e%3crect%20width='1200'%20height='675'%20fill='url(%23bg)'/%3e%3cg%20transform='translate(130%2082)'%3e%3crect%20x='0'%20y='42'%20width='292'%20height='420'%20rx='26'%20fill='%232B211D'%20stroke='%235D4032'/%3e%3cpath%20d='M58%20114h176M58%20162h116M58%20210h152M58%20306h176M58%20354h96'%20stroke='%23F3D6B5'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.72'/%3e%3crect%20x='58'%20y='246'%20width='176'%20height='32'%20rx='12'%20fill='%23DB6A26'%20opacity='.85'/%3e%3ccircle%20cx='234'%20cy='382'%20r='34'%20fill='%237CE7CA'/%3e%3cpath%20d='M218%20382l11%2012%2024-29'%20stroke='%23201714'%20stroke-width='8'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M212%2042V0l80%2080h-42c-21%200-38-17-38-38z'%20fill='%233B2A24'/%3e%3c/g%3e%3cg%20transform='translate(500%20146)'%3e%3crect%20width='232'%20height='318'%20rx='24'%20fill='%232B211D'%20stroke='%235D4032'/%3e%3ccircle%20cx='116'%20cy='88'%20r='46'%20fill='%233B2A24'/%3e%3cpath%20d='M94%2090h44M116%2068v44'%20stroke='%23DB6A26'%20stroke-width='10'%20stroke-linecap='round'/%3e%3cpath%20d='M54%20176h124M54%20218h96M54%20260h142'%20stroke='%23F3D6B5'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.72'/%3e%3c/g%3e%3cg%20transform='translate(822%2092)'%3e%3crect%20width='250'%20height='410'%20rx='26'%20fill='%232B211D'%20stroke='%235D4032'/%3e%3cpath%20d='M48%2092h154M48%20142h110M48%20192h140'%20stroke='%23F3D6B5'%20stroke-width='12'%20stroke-linecap='round'%20opacity='.72'/%3e%3crect%20x='48'%20y='252'%20width='154'%20height='76'%20rx='18'%20fill='%233B2A24'/%3e%3cpath%20d='M78%20290h92'%20stroke='%237CE7CA'%20stroke-width='12'%20stroke-linecap='round'/%3e%3ccircle%20cx='206'%20cy='348'%20r='26'%20fill='%23DB6A26'/%3e%3cpath%20d='M194%20348l8%209%2018-22'%20stroke='%23201714'%20stroke-width='7'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cpath%20d='M426%20294h62M742%20294h66'%20stroke='%237CE7CA'%20stroke-width='6'%20stroke-linecap='round'%20stroke-dasharray='12%2016'/%3e%3cdefs%3e%3cradialGradient%20id='bg'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(754%20202)%20rotate(136)%20scale(680%20502)'%3e%3cstop%20stop-color='%235D4032'/%3e%3cstop%20offset='.55'%20stop-color='%232B211D'/%3e%3cstop%20offset='1'%20stop-color='%23201714'/%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/55 via-foreground/8 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/25 bg-white/86 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-foreground backdrop-blur">
                    Finance
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </div>
              <div className="p-6">
                <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Invoices and files move faster.
                </p>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-foreground">
                    Finance Document Processing
                  </h3>
                </div>
                <p className="mb-5 text-sm leading-7 text-secondary-foreground">
                  A finance tool that reads invoices, pulls out important details, checks them, sends them for approval, and keeps a clean record for audits.
                </p>
                <div className="mb-5 space-y-2 border-y border-border py-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Read invoices automatically
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Send files for approval
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Keep audit records organized
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Python
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Gemini
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    PostgreSQL
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Docker
                  </span>
                  <span className="rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-secondary-foreground">
                    Azure
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
