import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      icon: MessageCircle,
      title: "Chat on WhatsApp",
      info: "-",
      description: "Get instant support on WhatsApp",
      // WhatsApp Link – auto opens chat with preset message
      link: "https://wa.me/918740864334?text=Hi%20Pinnacle%20Bridge%20AI,%20I%20want%20to%20discuss%20a%20project.",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 8740864334",
      description: "Primary Business Line",
      // Opens dialer on mobile or call through supported devices
      link: "tel:+918740864334",
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 7014066291",
      description: "Sales & Support Line",
      link: "tel:+917014066291",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@pinnaclebridgeai.com",
      description: "We’ll reply within 24 hours",
      // Opens default mail client with prefilled subject and body
      link: `mailto:info@pinnaclebridgeai.com?subject=${encodeURIComponent(
        "Project Inquiry"
      )}&body=${encodeURIComponent(
        "Hi Pinnacle Bridge AI, I want to discuss a web or app development project."
      )}`,
    },
    // If you want to enable location again, just uncomment this section.
    /*
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Udaipur, Rajasthan, India",
      description: "Our main office location",
      link: "https://www.google.com/maps/place/Udaipur,+Rajasthan",
    },
    */
  ];

  return (
    <div className="min-h-screen dark:bg-black pt-28 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white mb-4">
          Contact <span className="gradient-text">Pinnacle Bridge AI</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Let’s build something amazing together. Reach us instantly through
          WhatsApp, phone, or email — we’re always ready to help.
        </p>
      </section>

      {/* Contact Cards */}
      <div className="px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="dark:bg-black rounded-xl shadow-md hover:shadow-xl border-gray-200 hover:border-green-400 transition-all duration-300 transform hover:-translate-y-1 p-8 flex flex-col items-center text-center"
              style={{ borderWidth: ".25px" }}
            >
              <div className="p-4 dark:bg-black rounded-full mb-4">
                <item.icon className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold dark:text-white mb-1">
                {item.title}
              </h3>
              <p className="text-base text-gray-500 font-medium">
                {item.info}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm">
          <Clock className="w-5 h-5 text-green-500 mr-2" />
          <p className="text-gray-700 font-medium">
            Business Hours:{" "}
            <span className="text-green-600">Mon–Sat, 9 AM – 6 PM</span>
          </p>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pinnacle Bridge AI. All rights reserved.
      </div>
    </div>
  );
}
