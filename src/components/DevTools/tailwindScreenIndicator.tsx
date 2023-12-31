const TailwindScreenIndicator = () => (
  <div
    data-testid="tailwind-indicator"
    className="fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-black p-3 text-xs font-bold text-white"
  >
    <div className="block sm:hidden">xs</div>
    <div className="hidden sm:block md:hidden">sm</div>
    <div className="hidden md:block lg:hidden">md</div>
    <div className="hidden lg:block xl:hidden">lg</div>
    <div className="hidden xl:block 2xl:hidden">xl</div>
    <div className="hidden 2xl:block">2xl</div>
  </div>
)

export { TailwindScreenIndicator }
