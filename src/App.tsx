import React from 'react';

const socialLinks = [
  {
    text: "GitHub",
    href: "https://github.com/kokumaji"
  },
  {
    text: "Telegram",
    href: "https://t.me/kokumaji"
  },
  {
    text: "Twitter/X",
    href: "https://x.com/"
  },
  {
    text: "Private Key",
    href: "https://www.youtube.com/watch?v=37cE20pFwwQ"
  },
];

function App() {
  return (
    <div className="bg-stone-950 h-screen flex flex-col items-center">

      <div className="w-10/12 md:w-1/2 lg:w-1/3 flex flex-col items-center justify-between">
        <header>
          <h2 className='tracking-wide text-center'>
            <span className='bg-teal-500 text-stone-950 px-4'>KKMJI</span>
            <span className='pl-4'>DEV</span>
          </h2>
          <h4 className='font-normal text-center tracking-wider mt-0'>
            SOFTWARE DEVELOPER
          </h4>

          <article className='text-center font-mono'>
            Hey there! ✨ I'm a full-stack software developer from Germany!
          </article>
        </header>

        <div className='w-full grid md:grid-cols-2 gap-4 grid-cols-1'>

          {
            socialLinks.map(
              (social) =>
                <button onClick={() => window.open(social.href, '_blank')} className='border text-xl font-mono tracking-wide font-bold border-white rounded-lg border-2 px-2 py-5' key={social.text}>
                  {social.text}
                </button>
            )
          }
        </div>

        <footer className='w-full font-mono py-5 text-center'>
          kkmji.dev &copy; 2023
        </footer>

      </div>

    </div>
  );
}

export default App;
