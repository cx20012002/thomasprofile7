import Accordion from "@/components/Accordion";
import React from "react";

const items = [
  {
    title: "How do I book a photography session with you?",
    content: (
      <p>
        You can book a session by filling out the contact form on my website or by emailing me directly at [your email address]. I'll get back to you
        within 24 hours to discuss the details and schedule your shoot.
      </p>
    ),
  },
  {
    title: "What are your rates for photography sessions?",
    content: (
      <p>
        You can book a session by filling out the contact form on my website or by emailing me directly at [your email address]. I'll get back to you
        within 24 hours to discuss the details and schedule your shoot.
      </p>
    ),
  },
  {
    title: "What is your photography style?",
    content: (
      <p>
        My photography style is a blend of candid and posed shots, focusing on capturing genuine emotions and moments. I aim to create timeless and
        natural images that tell a story.
      </p>
    ),
  },
  {
    title: "Do you offer photo editing services?",
    content: (
      <p>
        Yes, all of my photography packages include basic photo editing services. This includes color correction, exposure adjustment, and minor
        retouching. Additional editing services can be provided upon request.
      </p>
    ),
  },
  {
    title: "How long does it take to receive the final photos?",
    content: (
      <p>
        The turnaround time for receiving your final photos is typically 2-3 weeks. However, this can vary depending on the season and the number of
        sessions I have. I will provide you with an estimated delivery date when we schedule your session.
      </p>
    ),
  },
  {
    title: "Do you offer prints or albums?",
    content: (
      <p>
        Yes, I offer a variety of print and album options. You can choose from different sizes, finishes, and styles to create a custom package that
        suits your needs. Please contact me for more information on pricing and options.
      </p>
    ),
  },
  {
    title: "What should I wear for my photography session?",
    content: (
      <p>
        I recommend wearing something that makes you feel comfortable and confident. Solid colors and simple patterns work best for photos. Avoid
        clothing with large logos or busy patterns. If you need help deciding, feel free to reach out to me for advice.
      </p>
    ),
  },
  {
    title: "Can I bring props or pets to my session?",
    content: (
      <p>
        Absolutely! Props and pets can add a personal touch to your photos. Just let me know in advance so I can plan accordingly. If you have any
        specific ideas or themes in mind, we can discuss them during our consultation.
      </p>
    ),
  },
  {
    title: "What is your cancellation policy?",
    content: (
      <p>
        If you need to cancel or reschedule your session, please let me know at least 48 hours in advance. Cancellations made within 48 hours of the
        scheduled session may be subject to a cancellation fee. I understand that things come up, and I will do my best to accommodate your needs.
      </p>
    ),
  },
];

export default function Faq() {
  return (
    <section className="relative mx-auto flex w-full flex-col justify-between gap-[60px] px-5 md:px-10 pb-[60px] pt-[30px] font-ClashDisplay font-thin text-primary md:flex-row md:py-[150px]">
      <div className="w-full">
        <div className="sticky top-[90px] w-full text-center md:text-left">
          <h2 className="subtitle text-orange">FAQ Frenzy:</h2>
          <h2 className="summary">All your answers here</h2>
        </div>
      </div>
      <div className="w-full">
        <Accordion items={items} />
      </div>
    </section>
  );
}
