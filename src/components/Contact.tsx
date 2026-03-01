import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Phone, MapPin, Globe, Upload } from "lucide-react";
import toast from "react-hot-toast"; // ✅ added

export default function Contact() {

  // ✅ form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const [isSending, setIsSending] = useState(false); // ✅ added

  // ✅ handle input change
  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ WhatsApp submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // ✅ simple validation (no UI change)
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill required fields");
      return;
    }

    setIsSending(true);

    const phoneNumber = "8801766352718";

    const text = `
New Portfolio Message

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Attachment: ${formData.file ? formData.file.name : "No file attached"}
    `;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    // ✅ success toast BEFORE redirect
    toast.success("Opening WhatsApp...", {
      duration: 2000,
    });

    // small delay → feels like success animation
    setTimeout(() => {
      window.open(whatsappURL, "_blank");

      // reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        file: null,
      });

      setIsSending(false);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE INFO (unchanged) */}
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">
              Get in Touch
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold mb-8">
              Let's build something <br />
              <span className="text-primary italic">extraordinary</span> together.
            </h3>

            <p className="text-text-muted text-lg mb-12 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hello,
              I'm always open to discussing new opportunities and challenges.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "nmrahman1652@gmail.com" },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+8801766352718" },
                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Dhaka, Bangladesh" },
                { icon: <Globe className="w-5 h-5" />, label: "Timezone", value: "BST (UTC+6)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-border flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary/30 transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold tracking-wider">{item.label}</p>
                    <p className="font-medium text-text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-border focus:border-primary/50 focus:outline-none"
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-border focus:border-primary/50 focus:outline-none"
                />
              </div>

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-border focus:border-primary/50 focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-border focus:border-primary/50 focus:outline-none resize-none"
              />

              {/* FILE UPLOAD */}
              <label className="flex items-center gap-3 cursor-pointer border border-dashed border-border rounded-2xl p-4 hover:border-primary/40 transition">
                <Upload className="w-5 h-5 text-primary" />
                <span className="text-sm text-text-muted">
                  {formData.file ? formData.file.name : "Upload PDF / Figma / DOCX"}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.fig,.figma,.png,.jpg"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}