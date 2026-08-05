import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full max-w-7xl mx-auto md:px-2">
        <TitleHeader
          title="Open a connection"
          sub="contact"
          index="07"
        />

        <div className="grid-12-cols mt-12 items-stretch">
          {/* form */}
          <div className="xl:col-span-5">
            <div className="panel p-8 md:p-10 h-full">
              <div className="mono text-xs text-signal mb-6">
                <span className="status-dot inline-block mr-2 align-middle" />
                POST /messages, and I usually write back within a day
              </div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-6"
              >
                <div>
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email">email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message">message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="what would you like to build or talk about?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className="cta-wrapper w-full">
                  <div className="cta-button group w-full">
                    <span className="text">
                      {loading ? "sending…" : sent ? "sent ✓ thanks!" : "$ send it my way"}
                    </span>
                    <span className="arrow" aria-hidden="true">↵</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* photo */}
          <div className="xl:col-span-7">
            <div className="panel p-2 h-full">
              <div className="rounded-lg overflow-hidden h-full min-h-[420px]" style={{ height: "100%" }}>
                <img
                  src="/images/profile.jpg"
                  alt="Sanjana Reddy Gurrappagaru"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 35%", minHeight: "420px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
