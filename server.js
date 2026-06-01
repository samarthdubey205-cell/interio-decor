import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>interio decor | Premium Modular Kitchens & Wardrobes in Varanasi</title>
    <meta name="description" content="Transform your home with luxury modular kitchens and custom wardrobes by Interio Decor. Serving Sigra, Lanka, Nadesar, and across Varanasi. Book a free consultation today.">
    <meta name="keywords" content="modular kitchen Varanasi, wardrobe designers Varanasi, luxury interiors Sigra, kitchen chimney Lanka, home interior interio decor, custom wardrobes Nadesar, Varanasi interior design, modular kitchen installation Varanasi, best interior studio Varanasi">

    <script src="https://cdn.tailwindcss.com"></script>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
        body { background-color: #020617; color: #f8fafc; font-family: 'Inter', sans-serif; overflow-x: hidden; }
       
        /* THEME GRADIENTS */
        .glass-card { background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.05); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .glass-card:hover { transform: translateY(-10px); border-color: #f97316; box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
        /* Add consistent vertical spacing between stacked cards and service tiles */
        .glass-card, .max-w-md, .bg-white.rounded\[2.5rem\], .bg-white.rounded\[3rem\] { margin-bottom: 2.5rem !important; }
        /* Extra spacing for package tiles (2BHK / 3BHK / Luxury) */
        .max-w-3xl > .max-w-md, .grid.md\:grid-cols-2 > .max-w-md { margin-bottom: 3rem; }
        /* Increase horizontal gap for multi-tile rows */
        .flex.gap-16 { gap: 4rem; }
       
        .winner-border { border: 2px solid #f97316; box-shadow: 0 0 50px rgba(249, 115, 22, 0.15); }
       
        /* UI ELEMENTS */
        .float-icon { width: 65px; height: 65px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 15px 30px rgba(0,0,0,0.5); cursor: pointer; z-index: 999; }
        .chat-window { display: none; position: fixed; bottom: 110px; right: 24px; width: 350px; height: 500px; z-index: 1000; border-radius: 2rem; flex-direction: column; }
        .chat-window.active { display: flex; animation: slideUp 0.3s ease; }
       
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

        /* PREPARING WORKSPACE */
        #loader {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 9999; display: flex; flex-direction: column;
            align-items: center; justify-content: center; color: #f97316;
        }
        .progress-bar { width: 280px; height: 4px; background: #1e293b; border-radius: 10px; margin-top: 30px; position: relative; overflow: hidden; }
        .progress-fill { height: 100%; background: linear-gradient(90deg, #ea580c, #fb923c); width: 0%; transition: width 0.1s linear; }

        .service-img { width: 100%; height: 260px; object-cover: cover; transition: 0.5s; }
        .glass-card:hover .service-img { scale: 1.1; }
    </style>
</head>
<body class="selection:bg-orange-500">

    <div id="loader">
        <p class="uppercase tracking-[0.6em] text-[10px] font-bold mb-4 text-slate-500">System Initializing</p>
        <h1 class="text-5xl font-black italic tracking-tighter uppercase mb-2">Preparing Workspace</h1>
        <p class="text-[11px] uppercase font-bold tracking-[0.3em] text-orange-600">Interio Decor Studio</p>
        <div class="progress-bar"><div id="fill" class="progress-fill"></div></div>
        <p id="percent" class="mt-4 text-xs font-mono font-bold">0%</p>
    </div>

    <div class="fixed bottom-8 left-8 flex items-center gap-3 z-50">
        <a href="https://wa.me/9172783704" title="WhatsApp Arun Dubey +91 9172783704" class="float-icon bg-green-600 text-white animate-bounce">
            <i class="fab fa-whatsapp"></i>
        </a>
        <div class="flex flex-col bg-slate-950/90 text-white text-[10px] uppercase tracking-[0.2em] px-3 py-2 rounded-2xl shadow-lg">
            <span class="font-black">Arun Dubey</span>
            <span class="font-semibold">+91 9172783704</span>
        </div>
    </div>
    <div onclick="toggleChat()" class="float-icon fixed bottom-8 right-8 bg-indigo-600 text-white">
        <i class="fas fa-robot"></i>
    </div>

    <nav class="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex justify-between items-center">
        <div class="flex flex-col">
            <h1 class="text-2xl font-black tracking-tighter text-orange-500 uppercase leading-none">INTERIO DECOR</h1>
            <span class="text-[8px] tracking-[0.3em] font-bold text-slate-500">BY ARUN DUBEY</span>
        </div>
        <div class="hidden md:flex gap-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#services" class="hover:text-orange-500 transition">Services</a>
            <a href="#showdown" class="hover:text-orange-500 transition">Winner Score</a>
            <a href="#location" class="hover:text-orange-500 transition">Contact</a>
        </div>
        <button onclick="openContact()" class="bg-orange-600 text-white px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-tighter hover:bg-white hover:text-black transition shadow-lg shadow-orange-900/20">Book Site Visit</button>
    </nav>

    <div id="main-content" class="main-content">
        <section class="relative py-32 px-6 text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-slate-950 to-slate-950 overflow-hidden">
            <div class="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80');"></div>
            <div class="absolute inset-0 bg-black/60 pointer-events-none"></div>
            <div class="relative z-10">
                <h2 class="text-6xl md:text-9xl font-black mb-8 leading-tight uppercase italic tracking-tighter">Your Dream Home.<br><span class="text-orange-500">Perfectly Crafted.</span></h2>
                <p class="text-slate-400 max-w-2xl mx-auto mb-12 uppercase text-xs tracking-widest font-bold">Varanasi's #1 Rated Interior Design Studio for Modular Kitchens & Luxury Homes</p>
                <div class="inline-flex gap-4 justify-center">
                    <button onclick="handleStartConsult()" class="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-xs hover:bg-orange-600 hover:text-white transition">Start Consultation</button>
                    <a id="call-arun" href="tel:+919172783704" title="Call +91 9172783704" onclick="callArun(event)" class="border border-white/20 px-10 py-5 rounded-2xl font-black uppercase text-xs hover:bg-white/10 transition">Call Arun Dubey</a>
                </div>
                <p class="mt-10 text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">Where engineering greets aesthetics. Seamless fits that make your daily routines effortless.</p>
            </div>
        </section>

        <section id="services" class="py-20 px-6 max-w-7xl mx-auto">
            <h3 class="text-4xl font-black uppercase italic mb-16 border-l-8 border-orange-500 pl-6">Premium Interior Solutions</h3>
        <div class="bg-[#111111] p-10 rounded-[3rem] max-w-lg mx-auto border border-white/5 shadow-2xl">
   
    <h2 class="text-white text-4xl font-serif font-bold mb-4 leading-tight">Book Your Free Consultation</h2>
    <p class="text-slate-500 text-sm mb-10 italic">We'll call you back within 2 hours</p>

    <form onsubmit="handleConsult(event)" class="space-y-4">
        <div>
            <input type="text" id="form-name" placeholder="Your name" required
                   class="w-full bg-[#1c1c1c] border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-[#c5a35d] transition-all">
        </div>
       
        <div>
            <input type="tel" id="form-phone" placeholder="Phone number" required
                   class="w-full bg-[#1c1c1c] border border-white/10 p-5 rounded-2xl text-white outline-none focus:border-[#c5a35d] transition-all">
        </div>

        <div>
            <select id="form-area" class="w-full bg-[#1c1c1c] border border-white/10 p-5 rounded-2xl text-slate-400 outline-none focus:border-[#c5a35d] appearance-none transition-all">
                <option value="">Your area</option>
                <option value="Varanasi Main">Varanasi Main</option>
                <option value="Churamanpur">Churamanpur</option>
                <option value="Lanka">Lanka</option>
                <option value="Other">Other</option>
            </select>
        </div>

        <button type="submit" class="w-full bg-[#c5a35d] text-black font-black py-5 rounded-2xl flex justify-center items-center gap-3 uppercase tracking-widest text-xs hover:bg-white transition-all mt-4 shadow-lg shadow-[#c5a35d]/10">
            Get Free Consultation <i class="fas fa-arrow-right"></i>
        </button>
    </form>

    <div class="grid grid-cols-3 gap-2 mt-10 text-[9px] text-slate-500 font-bold uppercase tracking-tighter">
        <div class="flex items-center gap-1">
            <i class="fas fa-check-circle text-emerald-800"></i> No obligation
        </div>
        <div class="flex items-center gap-1">
            <i class="fas fa-check-circle text-emerald-800"></i> EMI available
        </div>
        <div class="flex items-center gap-1">
            <i class="fas fa-check-circle text-emerald-800"></i> Free 3D design
        </div>
    </div>
</div>   
            
               <div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative">
   <!-- View our premium work -->
<section id="gallery" class="py-16 px-4 max-w-7xl mx-auto">
    <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-white mb-2">Our Luxury Creations</h2>
        <p class="text-gray-400">Real modular kitchens designed and installed in Varanasi</p>
    </div>

    <!-- Responsive Photo Grid (3 columns on laptop, 1 on mobile) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       
        <!-- Photo Card 1 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/Y7JL4GCK/arr.webp"
                     alt="Premium Modular Kitchen"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Modern Acrylic Kitchen</h3>
                <p class="text-gray-400 text-sm mb-4">Churamanpur, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
        </div>

        <!-- Photo Card 2 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/cXkjrVNH/matt.webp"
                     alt="Luxury Kitchen Design"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Matt Finish Premium Kitchen</h3>
                <p class="text-gray-400 text-sm mb-4">Lanka, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
        </div>

        <!-- Photo Card 3 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/pvzRsPJz/small.webp"
                     alt="Compact Modular Kitchen"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Space-Saving Modular Setup</h3>
                <p class="text-gray-400 text-sm mb-4">Cantt, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
        </div>
<!-- Photo Card 4 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/mF8c9Vrb/home.jpg"
                     alt="Complete Home Interior"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Complete Home Interior</h3>
                <p class="text-gray-400 text-sm mb-4">Nadesar, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    
    <!-- Photo Card 5 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/0jtGbCKC/bed.avif"
                     alt="Bedroom Furniture"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Bedroom Furniture</h3>
                <p class="text-gray-400 text-sm mb-4">Bhelupur, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    
    <!-- Photo Card 6 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/7dG6QsfS/unit.webp"
                     alt="Puja Unit"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Puja Unit</h3>
                <p class="text-gray-400 text-sm mb-4">Mohamsarai, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    <!-- Photo Card 7 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/CpkBskpS/isr.webp"
                     alt="Wallpaperr Decor"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Wallpaper Decor</h3>
                <p class="text-gray-400 text-sm mb-4">Sigra, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    <!-- Photo Card 8 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://www.asenseinterior.com/assets/uploads/ebab812c7c714c19648dcbe5dd70a049.webp"
                     alt="False Ceiling"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">False Ceiling</h3>
                <p class="text-gray-400 text-sm mb-4">BHU, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    <!-- Photo Card 9 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/99YXfrzb/hall.webp"
                     alt="Hall Interior"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">Hall Interior</h3>
                <p class="text-gray-400 text-sm mb-4">Manrauli, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    <!-- Photo Card 10 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/pvks8gPv/air.jpg"
                     alt="TV Unit"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">TV Unit</h3>
                <p class="text-gray-400 text-sm mb-4">Bhelupur, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
    <!-- Photo Card 11 -->
        <div class="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5 group">
            <div class="h-64 overflow-hidden">
                <img src="https://i.ibb.co/3Y0p2ZqB/5-star.webp"
                     alt="5-Star Interior"
                     class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold text-white mb-1">5-Star Interior</h3>
                <p class="text-gray-400 text-sm mb-4">Cantoment, Varanasi</p>
                <a href="https://wa.me/919172783704?text=Hi!%20I%20want%20to%20book%20the%20Compact%20Modular%20Kitchen%20design." target="_blank" class="inline-block text-sm text-blue-400 font-medium hover:underline">Book Similar Design →</a>
            </div>
    </div>
</section>
    <img
      src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80" class="w-full h-[320px] object-cover"
      alt="MODULAR KITCHEN"
    >

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
      MOST POPULAR
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹1100/sqft
    </div>

  </div>

  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      Modular Kitchen
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      L-shaped, U-shaped, parallel or island — kaff & hettich hardware, pu shutter, and free 3D design included.
    </p>
<p class="text-gray-500 text-lg leading-relaxed mb-8">
         Starting at ₹1100/sqft, our modular kitchens are crafted with premium materials and expert craftsmanship to transform your cooking space into a stylish and functional haven.
we have 3 different packages for modular kitchen starting from 1100/sqft to 1700/sqft & 4000/sqft depending on the material and fittings you choose.
    <div class="border-t pt-5 flex justify-between items-center w-full">
        <div>
            <h3 class="text-2xl font-bold text-black">150+</h3>
            <p class="text-orange-400 text-sm">INSTALLED</p>
        </div>

        <button onclick="openKitchenModal()" type="button" class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 cursor-pointer shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </button>
    </div>

      <div>
        <h3 class="text-2xl font-bold text-black">15 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.9★</h3>
        <p class="text-orange-400 text-sm">91 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>                                  

<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative bg-slate-100">
    <img src="https://i.ibb.co/ZpNZy5Fq/druu.webp" class="w-[90%] mx-auto h-[360px] object-contain" alt="LUXURY WARDROBE" loading="lazy">

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
     SECOND MOST POPULAR
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹24,000
    </div>

  </div>

  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      Luxury Wardrobe
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      Samless integration & material freedom -- adjustable shelving -- custom finishes -- awkward corner solutions.
    </p>
      <div>
        <h3 class="text-2xl font-bold text-black">250+</h3>
        <p class="text-orange-400 text-sm">INSTALLED</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">7 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.5★</h3>
        <p class="text-orange-400 text-sm">75 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>                               

<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative">
   
    <img
        <img src="https://i.ibb.co/Ld3rFbFL/resu.jpg"class="w-full h-[320px]object cover"alt="tv unit">
       
      class="w-full h-[320px] object-cover"
      alt="TV UNIT"
    >

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
     TRENDING
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹37,000
    </div>

  </div>

  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      TV UNIT
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      .Charcoal Louver Panel Finish--Profile LED Strip Backlight-- Hidden Wire Management
    </p>
      <div>
        <h3 class="text-2xl font-bold text-black">100+</h3>
        <p class="text-orange-400 text-sm">INSTALLED</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">12 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.9★</h3>
        <p class="text-orange-400 text-sm">81 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>                             


<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative">
   
    <img src="https://i.ibb.co/jPd0vwkW/geometric-ceiling-designs-feature-sharp-lines.avif" class="w-full h-[400px] object-contain bg-gray-50" alt="FALSE CEILING">
       

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
     HIGHLY DEMANDED
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹87/Sqft
    </div>


  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      false ceiling
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      High-grade Saint Gobain Gypsum with premium lighting layout--
Zero Crack Guarantee--
2-Day Professional Finish--
Fire Resistant Material--
  
    </p>
      <div>
        <h3 class="text-2xl font-bold text-black">71 +</h3>
        <p class="text-orange-400 text-sm">INSTALLED</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">5 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.5★</h3>
        <p class="text-orange-400 text-sm">67 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>       

<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative">
   
    <img src="https://i.ibb.co/wZDR8HZd/rag.jpg" class="w-full h-[320px] object-cover" alt="WALLPAPER DECOR">

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
     TRENDING
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹2,500/Roll
    </div>

  </div>

  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      WALLPAPER DECOR
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      Imported Korean & 3D Texture Wallpapers for every mood
  Washable & Long Lasting  
  Seamless Installation              
   2000+ Patterns Available  
    </p>
      <div>
        <h3 class="text-2xl font-bold text-black">90 +</h3>
        <p class="text-orange-400 text-sm">INSTALLED</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">1-2 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.9★</h3>
        <p class="text-orange-400 text-sm">82 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>       

<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative">

  <div class="relative bg-slate-100">
    <img
      src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80"
      class="w-[90%] mx-auto h-[360px] object-contain"
      alt="WALL FINISHING"
      loading="lazy"
    >

    <div class="absolute top-5 left-5 bg-[#d2ae6d] text-black font-bold px-5 py-2 rounded-full text-sm">
     POPULAR
    </div>

    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">
      ₹20-50/sqft-depending on selection
                        
    </div>

  </div>

  <div class="p-7">

    <h2 class="text-4xl font-black text-black mb-4">
      WALL FINISHING
    </h2>

    <p class="text-gray-500 text-lg leading-relaxed mb-8">
        Imported italian & 3D Texture Wall designs for every mood--
        proper colouring--
        no patches--
        1000+ Patterns Available
    </p>
      <div>
        <h3 class="text-2xl font-bold text-black">75 +</h3>
        <p class="text-orange-400 text-sm">INSTALLED</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">13 Days</h3>
        <p class="text-orange-400 text-sm">SETUP</p>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-black">4.7★</h3>
        <p class="text-orange-400 text-sm">82 REVIEWS</p>
      </div>

    </div>

  </div>

</div>
</div>       



        
       

</space>

<div class="bg-white rounded-[35px] overflow-hidden shadow-xl relative mb-10">
  <div class="relative bg-slate-100">
    <img src="https://i.ibb.co/GfqbSGQ5/inte.jpg" class="w-[90%] mx-auto h-[360px] object-contain" alt="Complete Home Interior Varanasi" loading="lazy">
    <div class="absolute top-5 left-5 bg-[#bd7339] text-black font-bold px-5 py-2 rounded-full text-sm">Trending</div>
    <div class="absolute bottom-5 right-5 bg-[#4b4947] text-white font-bold px-5 py-3 rounded-full text-xl">From ₹2.91L</div>
  </div>
  <div class="p-7">
    <h2 class="text-4xl font-black text-black mb-4">Complete Home Interior Varanasi</h2>
    <p class="text-gray-500 text-lg leading-relaxed mb-8">
      End-to-end turnkey packages for 2BHK & 3BHK — every room designed, built, and installed under one timeline and one contact point.
    </p>
    <div class="grid grid-cols-3 gap-4 text-center">
      <div>
        <h3 class="text-2xl font-bold text-black">55+</h3>
        <p class="text-orange-400 text-sm">Delivered</p>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-black">45 Days</h3>
        <p class="text-orange-400 text-sm">Delivery</p>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-black">4.9★</h3>
        <p class="text-orange-400 text-sm">156 Reviews</p>
      </div>
    </div>
  </div>
</div>

<div class="bg-[#111111] p-12 rounded-[2.5rem] text-center border border-white/5 shadow-2xl max-w-sm mx-auto">
    <h3 class="text-[#c5a35d] uppercase tracking-[0.2em] font-bold text-sm mb-6">2BHK COMPLETE</h3>
   
    <div class="text-white text-7xl font-serif mb-4 tracking-tighter">₹2.95L</div>
   
    <p class="text-slate-500 italic text-sm mb-12">All-inclusive package</p>

    <div class="text-left space-y-0">
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide">Kitchen + Wardrobes</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide">TV Unit + False Ceiling</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide">45-Day Delivery</span>
        </div>
       
        <div class="flex items-center py-5">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide">Single Point Contact</span>
        </div>
    </div>

    <button onclick="showPage('consult')" class="mt-10 w-full bg-[#c5a35d] text-black py-4 rounded-xl font-black uppercase text-xs hover:bg-white transition-colors duration-300">
        Claim This Offer
    </button>
</div>



<div class="bg-[#111111] p-12 rounded-[2.5rem] text-center border border-white/5 shadow-2xl max-w-md mx-auto mb-12">
    <h3 class="text-[#c5a35d] uppercase tracking-[0.2em] font-bold text-sm mb-6">3BHK COMPLETE</h3>
   
    <div class="text-white text-7xl font-serif mb-4 tracking-tighter italic">₹4.54L</div>
   
    <p class="text-slate-500 italic text-sm mb-12">All-inclusive package</p>

    <div class="text-left space-y-0 max-w-xs mx-auto">
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Every Room Covered</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Premium HDHMR Materials</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Free Designer Pooja Unit</span>
        </div>
       
        <div class="flex items-center py-5">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">10-Year Warranty</span>
        </div>
    </div>

    <button onclick="showPage('consult')" class="mt-12 w-full bg-[#c5a35d] text-black py-5 rounded-2xl font-black uppercase text-xs hover:bg-white transition-all duration-300 tracking-widest shadow-lg shadow-[#c5a35d]/10">
        Claim 3BHK Offer
    </button>
</div>



<div class="bg-[#111111] p-12 rounded-[2.5rem] text-center border border-white/5 shadow-2xl max-w-md mx-auto mb-12">
    <h3 class="text-[#c5a35d] uppercase tracking-[0.2em] font-bold text-sm mb-6">LUXURY</h3>
   
    <div class="text-white text-7xl font-serif mb-4 tracking-tighter italic">₹7.91L+</div>
   
    <p class="text-slate-500 italic text-sm mb-12">Complete Home Package</p>

    <div class="text-left space-y-0 max-w-xs mx-auto">
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Premium Kitchen</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Walk-in Wardrobes</span>
        </div>
       
        <div class="flex items-center py-5 border-b border-white/10">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">Designer Furniture</span>
        </div>
       
        <div class="flex items-center py-5">
            <span class="text-[#c5a35d] mr-4 text-sm"><i class="fas fa-check"></i></span>
            <span class="text-slate-300 font-medium tracking-wide uppercase text-[11px]">10-Year Warranty</span>
        </div>
    </div>

    <button onclick="showPage('consult')" class="mt-12 w-full bg-[#c5a35d] text-black py-5 rounded-2xl font-black uppercase text-xs hover:bg-white transition-all duration-300 tracking-widest shadow-lg shadow-[#c5a35d]/10">
        Claim Luxury Offer
    </button>
</div>  
<section class="py-20 px-6 bg-[#0a0a0b] text-center overflow-hidden">
    <div class="max-w-3xl mx-auto relative">
       
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter mb-4 bg-gradient-to-r from-[#d68c52] to-[#f3d1b0] bg-clip-text text-transparent uppercase">
            The Ultimate Showdown
        </h2>

        <h3 class="text-xl md:text-2xl font-bold text-[#bd7339] mb-8 flex items-center justify-center gap-2">
            ⚡ Interio Decor vs Everyone Else ⚡
        </h3>

        <p class="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto mb-16 opacity-90">
            500+ families already made the smart choice. Here's why they chose the champion over ordinary competitors.
        </p>

        <div class="flex items-center justify-center gap-4 relative mt-10">
           
            <div class="bg-gradient-to-b from-[#ffcc33] to-[#e6b800] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(255,204,51,0.4)] flex items-center gap-2 transform -rotate-6">
                <span class="text-sm">🏆</span>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-900">Champion</span>
            </div>

            <div class="bg-gradient-to-b from-[#ffcc33] to-[#e6b800] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(255,204,51,0.4)] flex items-center gap-2 transform rotate-6 -translate-y-4">
                <span class="text-sm text-white">⭐</span>
                <span class="text-[10px] font-black uppercase tracking-widest text-slate-900">Winner</span>
            </div>

        </div>

        <div class="mt-12 border-2 border-[#bd7339]/30 rounded-t-[3rem] h-20 w-full border-b-0"></div>

    </div>
</section>
</section>
        <section id="showdown" class="py-32 bg-slate-950 px-6">
            <div class="max-w-6xl mx-auto">
                <h3 class="text-5xl md:text-7xl font-black mb-20 italic uppercase text-center tracking-tighter">Why Choose Us?</h3>
                <div class="grid md:grid-cols-2 gap-12">
                    <div class="glass-card winner-border p-14 rounded-[4rem] relative overflow-hidden">
                        <div class="absolute -top-4 -right-4 bg-orange-600 text-white px-14 py-4 rotate-45 font-black text-sm uppercase">Industry Winner</div>
                        <h5 class="text-4xl font-black mb-10 text-orange-500 uppercase italic">Interio Decor</h5>
                        <div class="space-y-6">
                            <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> Factory Finished Products</p>
                            <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> 10-Year On-Paper Warranty</p>
                            <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> 24/7 Customer Support</p>
                       <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> proper intallation  </p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i>No dust and garbage </p>    
                       <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> free 3Ddesign</p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> single point contac</p>
                       <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-crown text-orange-500 text-xl"></i> zero hidden charges</p>
                        <div class="mt-20 border-t border-white/10 pt-10 flex justify-between items-end">

                            <p class="text-[10px] uppercase font-black text-slate-500 tracking-[0.5em]">Quality Score</p>
                            <p class="text-9xl font-black italic text-orange-500 leading-none">10</p>
                        </div>
                    </div>
                    <div class="glass-card p-14 rounded-[4rem] opacity-30 grayscale">
                        <h5 class="text-4xl font-black mb-10 uppercase italic">Manual Carpenters</h5>
                        <div class="space-y-6">
                            <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> Rough Hand-Cut Finishing</p>
                           <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> simple pencil design</p>
                    <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> no machine equipment</p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> dust & garbage everywhere</p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> delay in work & installation</p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> No warranties</p>
                        <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i>multiple owner coordination </p>
                        
                            <p class="font-black uppercase text-sm flex gap-4"><i class="fas fa-times-circle text-red-500 text-xl"></i> No After-Sales Support</p>
                        </div>
                        <p class="text-9xl font-black italic text-slate-800 mt-20">02</p>
                    </div>
                </div>
            </div>
        </section>
<div class="max-w-md mx-auto space-y-6 mb-12">

   <section class="py-20 px-6 text-center bg-slate-50/50">
    <div class="max-w-2xl mx-auto">
       
        <div class="inline-flex items-center gap-2 bg-[#bd7339] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-10 shadow-lg shadow-[#bd7339]/20">
            <i class="fas fa-map-pin"></i> Find Us
        </div>

        <h2 class="text-[#bd7339] text-6xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Visit Our <br> Showroom
        </h2>

        <p class="text-slate-600 text-lg md:text-xl font-medium white leading-relaxed max-w-lg mx-auto">
            Experience our premium collection in person.
            We're open 6 days a week to serve you better.
        </p>

    </div>
</section>
    <div class="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
        <div class="h-80 w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8415844837346!2d82.9366532!3d25.3094821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3199341498e7%3A0xc3315a676b0086c8!2sVaranasi%20Interior%20%26%20Furniture!5e0!3m2!1sen!2sin!4v1715671234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>

    <div class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
        <div class="flex items-start gap-6">
            <div class="bg-[#bd7339] p-5 rounded-3xl">
                <i class="fas fa-map-marker-alt text-white text-2xl"></i>
            </div>
           
            <div class="flex-1">
                <h3 class="text-2xl font-bold text-slate-800 mb-1">Address</h3>
                <p class="text-slate-400 text-sm mb-6">Tap for directions</p>
               
                <div class="text-slate-600 font-medium leading-relaxed text-lg mb-8">
                    Shop 6, Churamanpur<br>
                    Varanasi, Uttar Pradesh
                </div>

                <a href="https://maps.app.goo.gl/3QW6p7L6S5K2" target="_blank"
                   class="inline-flex items-center gap-3 bg-[#bd7339] text-white px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:opacity-90 transition-all shadow-lg shadow-[#bd7339]/20">
                    <i class="fas fa-directions"></i> Get Directions
                </a>
            </div>
        </div>
    </div>
</div>
<div class="max-w-md mx-auto space-y-4 px-4 py-10 mb-12">

    <div class="bg-[#bd7339] p-8 rounded-[2.5rem] text-white shadow-xl">
        <div class="flex items-center gap-4 mb-6">
            <div class="bg-white/20 p-4 rounded-2xl">
                <i class="fas fa-phone-alt text-2xl"></i>
            </div>
            <div>
                <h3 class="text-2xl font-bold">Call Us Now</h3>
                <p class="text-white/80 text-xs font-bold uppercase tracking-widest">Available Mon-Sat</p>
            </div>
        </div>
       
        <div class="space-y-3 mb-8">
            <div class="flex items-center gap-3 text-xl font-bold">
                <i class="fas fa-phone-alt text-sm"></i> +91 9172783704
            </div>
            <div class="flex items-center gap-3 text-sm font-medium text-white/90">
                <i class="far fa-clock text-sm"></i> 9 AM - 7 PM (Mon-Sat)
            </div>
        </div>

        <a href="https://wa.me/9172783704" class="flex items-center justify-center gap-2 bg-white text-[#bd7339] w-full py-4 rounded-2xl font-bold uppercase text-xs tracking-widest shadow-lg">
            <i class="fab fa-whatsapp text-lg"></i> WhatsApp Us
        </a>
    </div>

    <div class="bg-white p-6 rounded-[2rem] shadow-md border border-slate-100 flex items-center gap-5">
        <div class="bg-slate-50 p-4 rounded-2xl border border-slate-100">
            <span class="text-[#bd7339] text-2xl font-black">P</span>
        </div>
        <div>
            <h4 class="font-bold text-slate-800 text-lg">Free Parking Available</h4>
            <p class="text-slate-400 text-sm flex items-center gap-2">
                <i class="fas fa-check text-[10px]"></i> Wheelchair Accessible
            </p>
        </div>
    </div>

    <div class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-50 text-center">
    <div class="bg-[#bd7339]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
        <i class="far fa-calendar-check text-[#bd7339] text-3xl"></i>
    </div>
   
    <h3 class="text-2xl font-bold text-slate-800 mb-2">Book Appointment</h3>
    <p class="text-slate-500 text-sm mb-8">Schedule a visit with our experts</p>

    <a href="https://wa.me/9172783704?text=Hello%20Interio%20Decor,%20I%20would%20like%20to%20book%20a%20free%20consultation."
       target="_blank"
       class="inline-flex items-center justify-center gap-2 text-[#bd7339] font-black uppercase text-xs tracking-widest hover:underline mx-auto">
        Book Now <i class="fas fa-arrow-right"></i>
    </a>
    </div>

                <div class="glass-card p-12 rounded-[3.5rem] relative">
                    <i class="fas fa-quote-left text-orange-500 text-5xl absolute -top-6 left-10"></i>
                    <p class="text-lg italic text-slate-200 mb-10">"Their winner showdown is true. I compared them with local guys, but the machine-edge finish at Interio is unbeatable."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center font-black text-xl italic">VS</div>
                        <div>
                            <p class="font-black uppercase text-xs text-slate-400">karan Singh</p>
                            <div class="flex text-yellow-500 text-[10px] mt-1"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="glass-card p-12 rounded-[3.5rem] relative">
                    <i class="fas fa-quote-left text-orange-500 text-5xl absolute -top-6 left-10"></i>
                    <p class="text-lg italic text-slate-200 mb-10">"my experience with Interio was outstanding. The attention to detail and quality of work exceeded my expectations."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center font-black text-xl italic">VS</div>
                        <div>
                            <p class="font-black uppercase text-xs text-slate-400">Raju s Srivastav</p>
                            <div class="flex text-yellow-500 text-[10px] mt-1"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                </div>
<div class="glass-card p-12 rounded-[3.5rem] relative">
                    <i class="fas fa-quote-left text-orange-500 text-5xl absolute -top-6 left-10"></i>
                    <p class="text-lg italic text-slate-200 mb-10">" Iwas worried about my 3BHK house but Arun dubey team completed it in before time as provided by them very happy with their work."</p>
                    <div class="flex items-center gap-4">
                        <div class="w-14 h-14 bg-slate-600 rounded-full flex items-center justify-center font-black text-xl italic">VS</div>
                        <div>
                            <p class="font-black uppercase text-xs text-slate-400">Priyanshu Trivedi</p>
                            <div class="flex text-yellow-500 text-[10px] mt-1"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>

            <div id="consultation-page" class="consultation-section py-20 px-6">
        <div class="max-w-xl mx-auto glass-card p-14 rounded-[3.5rem] border-orange-500/50 shadow-2xl">
            <h2 class="text-5xl font-black uppercase italic text-center mb-6">Site Visit</h2>
            <p class="text-center text-slate-400 text-xs mb-10 uppercase tracking-widest">Book a free professional measurement</p>
            <form onsubmit="handleBooking(event)" class="space-y-6">
                <input id="site-name" type="text" placeholder="FULL NAME" required class="w-full bg-slate-900 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white font-bold uppercase text-xs">
                <input id="site-phone" type="tel" placeholder="PHONE NUMBER" required class="w-full bg-slate-900 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white font-bold uppercase text-xs">
                <button type="submit" class="w-full bg-orange-600 py-6 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition">Confirm Booking</button>
                <p onclick="showPage('home')" class="text-center text-[10px] uppercase font-black text-slate-500 cursor-pointer hover:text-white mt-4 italic">← Return to Main Page</p>
            </form>
        </div>
    </div>
        </section>
<div class="bg-[#243342] p-10 rounded-[3rem] text-center max-w-lg mx-auto border border-white/5 shadow-2xl">
   
    <h2 class="text-white text-3xl font-black mb-4">Get ₹8,000 Off on Your First Project!</h2>
    <p class="text-slate-300 text-sm mb-8">Subscribe to get exclusive deals, design tips, and inspiration.</p>

    <form onsubmit="handleSubscribe(event)" class="flex gap-2 mb-16 bg-[#1b2835] p-2 rounded-2xl w-full">
        <input id="subscribe-email" type="email" placeholder="Enter your email" required
               class="bg-transparent border-none p-4 text-white text-sm w-full outline-none">
        <button type="submit" class="bg-[#bd7339] text-white px-8 py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all">
            Subscribe
        </button>
    </form>

    <div class="space-y-6">
        <h3 class="text-white text-2xl font-bold mb-8">Why Trust Interio Decor?</h3>
       
        <div class="flex flex-wrap justify-center gap-3">
            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-shield-alt"></i> 10-Year Warranty
            </div>

            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-check-circle"></i> 500+ Projects
            </div>

            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-star"></i> 4.8 Google Rating
            </div>

            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-leaf"></i> Eco-Friendly
            </div>

            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-clock"></i> 45-Day Delivery
            </div>

            <div class="bg-[#3a4958] text-white px-6 py-3 rounded-full flex items-center gap-3 text-xs font-bold">
                <i class="fas fa-tools"></i> Kaff & Hettich German Hardware
            </div>
        </div>
    </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 mb-12">
   <section class="py-24 px-6 text-center bg-white">
    <div class="max-w-3xl mx-auto">
       
        <div class="space-y-2 mb-10">
            <h2 class="text-4xl md:text-5xl font-serif font-black text-slate-800 flex items-center justify-center gap-3">
                <span class="text-3xl">🏠</span> Trusted
            </h2>
            <h2 class="text-5xl md:text-7xl font-serif font-black text-slate-800 leading-tight">
                Across All
            </h2>
            <h2 class="text-5xl md:text-7xl font-serif font-black text-slate-800 leading-tight">
                Varanasi
            </h2>
        </div>

        <p class="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto mb-16">
            From Mohansarai to Sarnath, we've transformed 500+ homes. See what your neighbors are saying.
        </p>

        <div class="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                 alt="Modern White Kitchen"
                 class="w-full h-[400px] object-cover">
        </div>

    </div>
</section>
    <div class="relative h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
             class="w-full h-full object-cover"
             alt="Luxury Living Room">
        <div class="absolute top-6 left-0 bg-[#bd7339] text-white px-4 py-1 rounded-r-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
            Trending
        </div>
    </div>
    <div class="p-10">
        <h2 class="text-3xl font-serif font-black text-slate-800 mb-2">SIGRA</h2>
        <p class="text-slate-400 font-medium mb-8">Complete home interiors specialist</p>

        <div class="flex items-center justify-between border-t border-b border-slate-100 py-8 mb-8">
            <div class="text-center flex-1 border-r border-slate-100">
                <div class="text-3xl font-bold text-[#bd7339]">45+</div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Projects Done</div>
            </div>
            <div class="text-center flex-1">
                <div class="text-3xl font-bold text-slate-800 flex items-center justify-center gap-1">
                    4.8<span class="text-[#bd7339] text-xl">★</span>
                </div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Avg Rating</div>
            </div>
        </div>

        <div class="flex items-center gap-3 text-[#bd7339] font-bold mb-10">
            <i class="fas fa-tag"></i>
            <span>Popular: Full Home | Starting ₹2.95L</span>
        </div>

        <div class="bg-slate-50/80 p-8 rounded-3xl relative">
            <p class="text-slate-600 italic leading-relaxed mb-4 text-sm">
                "They completed our 3BHK in just 45 days. Highly recommended!"
            </p>
            <p class="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                — Amit Yadav, Sigra Road
            </p>
        </div>

        <a href="https://wa.me/9172783704?text=I%20saw%20your%20SIGRA%20projects%20and%20want%20to%20discuss%20my%20interior."
           target="_blank"
           class="mt-8 w-full bg-[#bd7339] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#bd7339]/20">
            Consult Specialist <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 mb-12">
   
    <div class="relative h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=800&q=80"
             class="w-full h-full object-cover"
             alt="Traditional Modern Living Room">
    </div>

    <div class="p-10">
        <h2 class="text-4xl font-serif font-black text-slate-800 mb-2">Lanka</h2>
        <p class="text-slate-400 font-medium mb-8">Traditional meets modern design</p>

        <div class="flex items-center justify-between border-t border-b border-slate-100 py-8 mb-8">
            <div class="text-center flex-1 border-r border-slate-100">
                <div class="text-3xl font-bold text-[#bd7339]">70+</div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Projects Done</div>
            </div>
            <div class="text-center flex-1">
                <div class="text-3xl font-bold text-slate-800 flex items-center justify-center gap-1">
                    4.7<span class="text-[#bd7339] text-xl">★</span>
                </div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Avg Rating</div>
            </div>
        </div>

        <div class="flex items-center gap-3 text-[#bd7339] font-bold mb-10">
            <i class="fas fa-tag"></i>
            <span>Popular: Modular Kitchen | Starting ₹4,000</span>
        </div>

        <div class="bg-slate-50/80 p-8 rounded-3xl mb-8">
            <p class="text-slate-600 italic leading-relaxed mb-4 text-sm">
                "Perfect blend of traditional and modern. Love our new Kitchen!"
            </p>
            <p class="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                — Payal Gupta, Lanka
            </p>
        </div>

        <a href="https://wa.me/9172783704?text=I%20want%20to%20view%20your%20Bhelupur%20projects."
           target="_blank"
           class="w-full bg-[#bd7339] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#bd7339]/20">
            Consult Specialist <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 mb-12">
   
    <div class="relative h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
             class="w-full h-full object-cover"
             alt="Luxury Living Interior">
        <div class="absolute top-48 left-0 bg-[#9363a0] text-white px-5 py-1.5 rounded-r-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
            Luxury
        </div>
    </div>

    <div class="p-10">
        <h2 class="text-4xl font-serif font-black text-slate-800 mb-2">Chetganj Colony</h2>
        <p class="text-slate-400 font-medium mb-8">Premium & luxury home interiors</p>

        <div class="flex items-center justify-between border-t border-b border-slate-100 py-8 mb-8">
            <div class="text-center flex-1 border-r border-slate-100">
                <div class="text-3xl font-bold text-[#bd7339]">40+</div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Projects Done</div>
            </div>
            <div class="text-center flex-1">
                <div class="text-3xl font-bold text-slate-800 flex items-center justify-center gap-1">
                    5.0<span class="text-[#bd7339] text-xl">★</span>
                </div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Avg Rating</div>
            </div>
        </div>

        <div class="flex items-center gap-3 text-[#bd7339] font-bold mb-10">
            <i class="fas fa-tag"></i>
            <span>Popular: Premium Home Interiors | Starting ₹1.8L</span>
        </div>

        <div class="bg-slate-50/80 p-8 rounded-3xl mb-8">
            <p class="text-slate-600 italic leading-relaxed mb-4 text-sm">
                "Exceptional quality and attention to detail. True craftsmen!"
            </p>
            <p class="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                — Arvind Paswan, Chetganj Colony
            </p>
        </div>

        <a href="https://wa.me/9172783704?text=I%20want%20to%20discuss%20premium%20interiors%20for%20Nadesar."
           target="_blank"
           class="w-full bg-[#bd7339] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#bd7339]/20">
            Consult Specialist <i class="fab fa-whatsapp"></i>
        </a>
    </div>
</div>
<div class="max-w-md mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 mb-12">
   
    <div class="relative h-64 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
             class="w-full h-full object-cover"
             alt="Modern Architecture Varanasi">
        <div class="absolute top-48 left-0 bg-[#bd7339] text-white px-5 py-1.5 rounded-r-lg text-[10px] font-black uppercase tracking-widest shadow-lg">
            All Varanasi
        </div>
    </div>

    <div class="p-10">
        <h2 class="text-4xl font-serif font-black text-slate-800 mb-2">Entire Varanasi</h2>
        <p class="text-slate-400 font-medium mb-8">We serve all areas of Varanasi</p>

        <div class="flex items-center justify-between border-t border-b border-slate-100 py-8 mb-8">
            <div class="text-center flex-1 border-r border-slate-100">
                <div class="text-3xl font-bold text-[#bd7339]">500+</div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Projects</div>
            </div>
            <div class="text-center flex-1">
                <div class="text-3xl font-bold text-slate-800 flex items-center justify-center gap-1">
                    4.8<span class="text-[#bd7339] text-xl">★</span>
                </div>
                <div class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Overall Rating</div>
            </div>
        </div>

        <div class="flex items-start gap-3 text-[#bd7339] font-bold mb-10">
            <i class="fas fa-map-marker-alt mt-1"></i>
            <span class="leading-relaxed">Rohaniya, Mohansarai, Assi, Cantonment, Lanka, Chetganj, Mnrauli, Lohta, BHU & More</span>
        </div>

        <div class="bg-slate-50/80 p-8 rounded-3xl mb-8">
            <p class="text-slate-600 italic leading-relaxed mb-4 text-sm">
                "No matter where in Varanasi, they deliver quality consistently."
            </p>
            <p class="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                — Satisfied Customers
            </p>
        </div>

        <a href="https://wa.me/9172783704?text=I%20want%20to%20check%20service%20availability%20in%20my%20area%20of%20Varanasi."
           target="_blank"
           class="w-full bg-[#bd7339] text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:opacity-90 transition-all shadow-lg shadow-[#bd7339]/20">
            <i class="fas fa-map-marked-alt"></i> Check Your Area Availability
        </a>
    </div>
</div>
<footer class="bg-[#2d4356] text-white py-16 px-8 font-sans">
    <div class="max-w-xl mx-auto">
       
        <div class="flex items-center gap-3 mb-6">
            <span class="text-4xl">🪵</span>
            <h2 class="text-4xl font-serif font-black tracking-tight">Interio Decor</h2>
        </div>

        <p class="text-slate-300 leading-relaxed mb-10 text-lg">
            Transforming houses into homes since 2018. 500+ happy families across Varanasi trust us for premium interior solutions.
        </p>

        <div class="space-y-6 mb-12">
            <div class="flex items-center gap-4 text-slate-200">
                <i class="fas fa-phone-alt text-[#bd7339] w-5"></i>
                <span class="font-medium">+91 9172783704</span>
            </div>
            <div class="flex items-center gap-4 text-slate-200">
                <i class="fas fa-envelope text-[#bd7339] w-5"></i>
                <span class="font-medium">info@dubeyarumkumar@gmail.com</span>
            </div>
            <div class="flex items-center gap-4 text-slate-200">
                <i class="fas fa-clock text-[#bd7339] w-5"></i>
                <span class="font-medium">Mon-Sat: 9 AM - 7 PM</span>
            </div>
            <div class="flex items-center gap-4 text-slate-200">
                <i class="fas fa-map-marker-alt text-[#bd7339] w-5"></i>
                <span class="font-medium">Varanasi, Uttar Pradesh</span>
            </div>
        </div>

        <div class="flex gap-4 mb-16">
            <a href="#" class="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center text-xl hover:bg-[#bd7339] transition-colors">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center text-xl hover:bg-[#bd7339] transition-colors">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center text-xl hover:bg-[#bd7339] transition-colors">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="#" class="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center text-xl hover:bg-[#bd7339] transition-colors">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#" class="w-12 h-12 rounded-full bg-slate-700/50 flex items-center justify-center text-xl hover:bg-[#bd7339] transition-colors">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
<div class="bg-slate-50 font-sans text-slate-800">

    
    </section>

    
</div>
        <h3 class="text-3xl font-serif font-black text-[#bd7339] mb-8">Popular Services</h3>
        <ul class="space-y-5 text-xl text-slate-200 font-medium">
            <li>Modular Kitchen</li>
            <li>Custom Wardrobes</li>
            <li>TV Units & Living</li>
            <li>Bedroom Furniture</li>
            <li>False Ceiling</li>
            <li>Complete Home Interior</li>
            <li>Office Interior Design</li>
        <li>Puja units & More</li>
<li>Study Rooms
</ul>
    </div>
</footer>
        <section class="py-14 border-t border-white/5 bg-slate-950">
            <div class="max-w-5xl mx-auto px-6">
                <div class="bg-slate-900/80 border border-white/10 rounded-[30px] p-8 text-center text-white shadow-2xl">
                    <h4 class="text-2xl md:text-3xl font-black uppercase mb-4 tracking-widest">We Accept All Payment Methods</h4>
                    <p class="text-slate-300 mb-6 text-lg">💳 💰 VISA • MasterCard • RuPay • UPI • Paytm • PhonePe • Google Pay • Net Banking</p>
                    <div class="flex flex-wrap justify-center gap-4 mt-4 text-slate-100 text-sm font-semibold">
                        <span class="px-4 py-2 rounded-full bg-white/10">VISA</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">MasterCard</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">RuPay</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">UPI</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">Paytm</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">PhonePe</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">Google Pay</span>
                        <span class="px-4 py-2 rounded-full bg-white/10">Net Banking</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-20 border-t border-white/5 bg-slate-950">
            <div class="flex flex-col items-center">
                <h4 class="text-xl font-black italic uppercase mb-10 tracking-widest">Connect With Us</h4>
                <div class="flex gap-16">
                    <a href="https://wa.me/9172783704" class="text-5xl text-green-500 hover:scale-125 transition"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" class="text-5xl text-pink-500 hover:scale-125 transition"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-5xl text-blue-600 hover:scale-125 transition"><i class="fab fa-facebook"></i></a>
                <a href="#" class="text-5xl text-white-600 hover:scale-125 transition"><i class="fab fa-LinkedIn "></i></a>
                
                </div>
            </div>
        </section>
    </div>

    
    <div id="chat-window" class="chat-window glass-card overflow-hidden border border-white/10 shadow-3xl">
        <div class="bg-indigo-600 p-6 text-white font-black flex justify-between uppercase text-xs italic tracking-tighter">
            <span>Interio AI Designer</span>
            <button onclick="toggleChat()">×</button>
        </div>
        <div id="chat-content" class="flex-1 p-6 overflow-y-auto text-xs space-y-4">
            <div class="bg-slate-800 p-4 rounded-3xl rounded-tl-none border border-white/5 text-white leading-relaxed">
                Namaste 🙏! I am the AI assistant for <b>Interio Decor (Owner: Arun Dubey)</b>. How can I help you design your dream space in Varanasi today?
            </div>
        </div>
        <div class="p-4 border-t border-white/5 flex gap-2">
            <input id="user-input" type="text" placeholder="TYPE YOUR MESSAGE..." class="flex-1 p-3 bg-slate-900 border border-white/10 rounded-2xl text-white text-[10px] outline-none font-bold">
            <button onclick="sendMessage()" class="bg-indigo-600 text-white px-5 rounded-2xl"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <footer class="py-12 text-center bg-slate-950 text-slate-700 text-[9px] font-black uppercase tracking-[0.8em]">
        Interio Decor Varanasi | © 2026 Crafted for Excellence
    </footer>

    <script>
        // LOADER SCRIPT
        let count = 0;
        const fill = document.getElementById('fill');
        const percent = document.getElementById('percent');
        const loader = document.getElementById('loader');
       
        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 20);
            if (count >= 100) {
                count = 100;
                clearInterval(interval);
                setTimeout(() => {
                    loader.style.opacity = '0';
                    setTimeout(()=>loader.style.display='none', 500);
                }, 400);
            }
            fill.style.width = count + '%';
            percent.innerText = count + '%';
        }, 120);

        function showPage(page) {
            const home = document.getElementById('main-content');
            const consult = document.getElementById('consultation-page');
            if(page === 'consult') { home.classList.add('hidden'); consult.classList.add('active'); window.scrollTo(0,0); }
            else { home.classList.remove('hidden'); consult.classList.remove('active'); }
        }
        function openContact() {
            const whatsappUrl = 'https://wa.me/9172783704?text=' + encodeURIComponent('Hello Arun, I would like to book a site visit.');
            const mailtoUrl = 'mailto:dubeyarumkumar@gmail.com?subject=' + encodeURIComponent('Site Visit Request') + '&body=' + encodeURIComponent('Hello Arun,%0D%0A%0D%0AI would like to book a site visit.%0D%0A%0D%0AThank you.');
            window.open(whatsappUrl, '_blank');
            setTimeout(() => window.open(mailtoUrl, '_blank'), 300);
        }
        function handleStartConsult() {
            const message = 'Hello Arun Dubey, I want to start a consultation. Please contact me on WhatsApp.';
            const whatsappUrl = 'https://wa.me/9172783704?text=' + encodeURIComponent(message);
            window.location.href = whatsappUrl;
        }
        function callArun(event) {
            event.preventDefault();
            window.location.href = 'tel:+919172783704';
        }
        function handleConsult(event) {
            event.preventDefault();
            const name = document.getElementById('form-name').value.trim();
            const phone = document.getElementById('form-phone').value.trim();
            const area = document.getElementById('form-area').value.trim();
            const message = 'Hello Arun Dubey, I want a free consultation. Name: ' + name + '. Phone: ' + phone + (area ? ' Area: ' + area + '.' : '');
            const whatsappUrl = 'https://wa.me/9172783704?text=' + encodeURIComponent(message);
            window.location.href = whatsappUrl;
        }
        function handleBooking(event) {
            event.preventDefault();
            const name = document.getElementById('site-name').value.trim();
            const phone = document.getElementById('site-phone').value.trim();
            const message = 'Hello Arun Dubey, I want to book a site visit. Name: ' + name + '. Phone: ' + phone + '.';
            const whatsappUrl = 'https://wa.me/9172783704?text=' + encodeURIComponent(message);
            window.location.href = whatsappUrl;
        }
        function toggleChat() { document.getElementById('chat-window').classList.toggle('active'); }
        function sendMessage() {
            const input = document.getElementById('user-input');
            const content = document.getElementById('chat-content');
            if (!input.value.trim()) return;
            content.innerHTML += \`<div class="bg-indigo-900/50 p-4 rounded-3xl text-right text-indigo-100 italic font-bold">\${input.value}</div>\`;
            input.value = "";
            setTimeout(() => {
                content.innerHTML += \`<div class="bg-slate-800 p-4 rounded-3xl text-white border border-white/5">Arun Dubey's design experts will be with you in a moment!</div>\`;
                content.scrollTop = content.scrollHeight;
            }, 700);
        }
    </script>

    <script>
        // Subscription handler: open WhatsApp with subscriber email
        function handleSubscribe(event) {
            event.preventDefault();
            const emailEl = document.getElementById('subscribe-email');
            if(!emailEl) return;
            const email = emailEl.value.trim();
            if(!email) return;
            const message = 'New subscriber via website. Email: ' + email + '.';
            const whatsappUrl = 'https://wa.me/9172783704?text=' + encodeURIComponent(message);
            window.location.href = whatsappUrl;
        }
    </script>
    <div id="kitchenModal" class="hidden fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <div class="bg-white w-full max-w-4xl rounded-3xl max-h-[85vh] overflow-y-auto p-6 relative shadow-2xl">
           
            <button onclick="closeKitchenModal()" class="absolute top-4 right-4 bg-gray-100 hover:bg-orange-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all cursor-pointer">✕</button>
           
            <div class="text-center mb-6">
                <h2 class="text-2xl font-bold text-gray-900">Types of Modular Kitchens</h2>
                <p class="text-gray-500 text-sm">Premium layouts designed by Interio decor for Varanasi homes</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
               
                <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=600" class="w-full h-40 object-cover" alt="L-Shaped Kitchen">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-1"><h3 class="font-bold text-base">L-Shaped Kitchen</h3><span class="text-sm font-bold text-orange-600">From ₹80,000</span></div>
                        <p class="text-xs text-gray-600">Excellent corner utility layout. Perfect for small to medium spaces.</p>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" class="w-full h-40 object-cover" alt="Parallel Kitchen">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-1"><h3 class="font-bold text-base">Parallel Kitchen</h3><span class="text-sm font-bold text-orange-600">From ₹90,000</span></div>
                        <p class="text-xs text-gray-600">Double counter workspaces layout. Ideal for narrow corridor spaces.</p>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1565538810844-1e1194121967?q=80&w=600" class="w-full h-40 object-cover" alt="U-Shaped Kitchen">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-1"><h3 class="font-bold text-base">U-Shaped Kitchen</h3><span class="text-sm font-bold text-orange-600">From ₹1,20,000</span></div>
                        <p class="text-xs text-gray-600">Three connected workspace counters. Best choice for large families.</p>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
                    <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600" class="w-full h-40 object-cover" alt="Island Kitchen">
                    <div class="p-4">
                        <div class="flex justify-between items-center mb-1"><h3 class="font-bold text-base">Island Kitchen</h3><span class="text-sm font-bold text-orange-600">From ₹1,50,000</span></div>
                        <p class="text-xs text-gray-600">Luxury centerpiece counter block configuration for cooking and hosting.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script>
    function openKitchenModal() {
        document.getElementById('kitchenModal').classList.remove('hidden');
    }
    function closeKitchenModal() {
        document.getElementById('kitchenModal').classList.add('hidden');
    }
    </script>
</body>
</html>
    `);
});

// Serve static files (for images and other assets)
app.use(express.static(__dirname));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Interior Decor Luxury Edition running at http://localhost:${port}`);
});
    
