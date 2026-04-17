"use client";

export default function DemoFive() {
  return (
    <section className="relative w-full bg-[#f5f4f3] flex flex-col items-center py-32 px-8 min-h-screen justify-center">
      <div className="max-w-xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-black text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-4">
            Comienza Tu Viaje
          </h2>
          <p className="text-gray-500 font-light text-lg tracking-wide">
            Programa una consulta privada y descubre el futuro del cuidado dental premium.
          </p>
        </div>

        <form className="flex flex-col gap-10">
          <div className="relative group">
            <input 
              type="text" 
              id="fullName" 
              className="w-full bg-transparent border-b border-gray-300 py-3 text-lg text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Nombre Completo"
              required 
            />
            <label 
              htmlFor="fullName" 
              className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black cursor-text"
            >
              Nombre Completo
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              id="email" 
              className="w-full bg-transparent border-b border-gray-300 py-3 text-lg text-black focus:outline-none focus:border-black transition-colors peer placeholder-transparent"
              placeholder="Correo Electrónico"
              required 
            />
            <label 
              htmlFor="email" 
              className="absolute left-0 top-3 text-gray-400 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-black cursor-text"
            >
              Correo Electrónico
            </label>
          </div>

          <button 
            type="submit" 
            className="w-full mt-8 bg-black text-white py-4 px-8 text-sm uppercase tracking-widest font-medium hover:bg-black/80 hover:shadow-2xl transition-all duration-300 rounded"
          >
            Solicitar Cita
          </button>
        </form>
      </div>
    </section>
  );
}
