export default function Download() {
  return (
    <section id="download" className="py-14 md:py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Get the App</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Learn anywhere. Fast, secure, and distraction-free.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a className="btn btn-primary" href="#" aria-label="Get it on Google Play">Google Play</a>
          <a className="btn" href="#" aria-label="Download on the App Store">App Store</a>
        </div>

        <div className="mt-10">
          <img src="/robot.svg" alt="App preview" className="mx-auto w-36 opacity-80" />
        </div>
      </div>
    </section>
  );
}
