import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  const whatsappUrl = "https://wa.me/256792131316?text=Hi%20Tuku-Tuku%2C%20I'd%20like%20to%20learn%20more%20about%20your%20programs.";

  // Show attention bubble after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat tooltip */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-border w-72 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    TT
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Tuku-Tuku Team</p>
                    <p className="text-xs text-white/70">Typically replies within an hour</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Body */}
            <div className="p-5 bg-[#ECE5DD]">
              <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm max-w-[85%] text-sm text-gray-800 leading-relaxed">
                👋 Hi there! Ready to build something great?
                <br /><br />
                Got a startup idea, a partnership in mind, or just a question? We're here to help.
                <span className="block text-[10px] text-gray-400 mt-2 text-right">Tuku-Tuku Team</span>
              </div>
            </div>
            {/* Footer CTA */}
            <div className="p-4 bg-white border-t border-gray-100">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b85a] text-white font-semibold text-sm py-3 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                Start a conversation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Attention bubble */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl rounded-br-none shadow-xl border border-border px-4 py-2.5 text-sm text-foreground max-w-[200px] cursor-pointer"
            onClick={() => { setIsOpen(true); setShowBubble(false); }}
          >
            💬 Chat with us on WhatsApp!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => { setIsOpen(!isOpen); setShowBubble(false); }}
        className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20b85a] shadow-2xl flex items-center justify-center transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-7 w-7 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-7 w-7 text-white fill-white/20" />
            </motion.div>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
        )}
      </motion.button>
    </div>
  );
}
