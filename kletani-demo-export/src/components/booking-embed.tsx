"use client";

export default function BookingEmbed() {
  return (
    <section className="relative w-full py-32 bg-white flex flex-col items-center">
      <div className="max-w-5xl w-full px-6 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-black font-bold uppercase tracking-tighter mb-4">
            Reserva tu Consulta
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Elige el horario que mejor te acomode. Nos comunicaremos contigo de inmediato.
          </p>
        </div>
        
        <div className="w-full h-[700px] md:h-[750px] bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-2xl">
          {/* Note: This is a placeholder Calendly URL based on the user's email prefix. */}
          {/* Once they set up their account, they just need to update this URL if they chose a different handle. */}
          <iframe 
            src="https://calendly.com/dfloresdaniel77" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Kletani Consultation Booking"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
