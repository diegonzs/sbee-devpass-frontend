'use client'
import { Button } from '@/components/ui'
import { Accordion, AccordionItem } from '@nextui-org/accordion'

const FAQs = [
  {
    id: '1',
    question: 'Why Join Us?',
    answer: `Impactful Work: Contribute to an open-source project that redefines funding norms and champions meaningful initiatives. Innovate with Freedom: Thrive in a space where you can implement features that enhance transparency and accountability. Community and Collaboration: Collaborate with a global network of developers and crypto enthusiasts who are determined to transform the traditional funding landscape.`,
  },
  {
    id: '2',
    question: 'Why Join Us?',
    answer: `Impactful Work: Contribute to an open-source project that redefines funding norms and champions meaningful initiatives. Innovate with Freedom: Thrive in a space where you can implement features that enhance transparency and accountability. Community and Collaboration: Collaborate with a global network of developers and crypto enthusiasts who are determined to transform the traditional funding landscape.`,
  },
  {
    id: '3',
    question: 'Why Join Us?',
    answer: `Impactful Work: Contribute to an open-source project that redefines funding norms and champions meaningful initiatives. Innovate with Freedom: Thrive in a space where you can implement features that enhance transparency and accountability. Community and Collaboration: Collaborate with a global network of developers and crypto enthusiasts who are determined to transform the traditional funding landscape.`,
  },
  {
    id: '4',
    question: 'Why Join Us?',
    answer: `Impactful Work: Contribute to an open-source project that redefines funding norms and champions meaningful initiatives. Innovate with Freedom: Thrive in a space where you can implement features that enhance transparency and accountability. Community and Collaboration: Collaborate with a global network of developers and crypto enthusiasts who are determined to transform the traditional funding landscape.`,
  },
]

export const FAQsSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-[544px] flex-col items-center gap-[70px] pb-[50px] pt-[118px]">
      <h3 className="text-center text-40 font-bold">
        Frequently Asked Questions
      </h3>
      <Accordion variant="splitted">
        {FAQs.map((faq) => (
          <AccordionItem
            classNames={{
              base: '!px-6 !shadow-none border border-[#1D1C1D] border-opacity-10',
              title: 'text-sm font-bold',
              content: 'text-xs pb-6 pt-2',
            }}
            key={faq.id}
            aria-label={faq.question}
            title={faq.question}
          >
            {faq.answer}
          </AccordionItem>
        ))}
      </Accordion>
      <Button color="primary" className="rounded-lg shadow-button">
        Apply for a grant now
      </Button>
    </section>
  )
}
