import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-zinc-100">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 flex flex-col items-center justify-center space-y-6">
        <Image
          src="/logo-blue.svg"
          alt="Silvio Souza Advocacia"
          width={200}
          height={44}
          className="h-10 w-auto md:h-12"
          priority
        />

        <div className="flex flex-col items-center gap-2 text-center text-sm md:text-base text-zinc-500 font-medium">
          <p>
            &copy; {currentYear} Silvio Souza Advocacia. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
