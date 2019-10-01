const customMediaMin = {
  '--iPhoneSE': '(min-width: 320px)',
  '--iPhoneXR': '(min-width: 414px)',
  '--tablet': '(min-width: 768px)',
  '--iPadPro': '(min-width: 1024px)',
  '--desktop': '(min-width: 1440px)',
  '--appleTV': '(min-width: 1920px)',
};

const customMediaMax = {
  '--iPhoneSE-max': '(max-width: 319px)',
  '--iPhoneXR-max': '(max-width: 413px)',
  '--tablet-max': '(max-width: 767px)',
  '--iPadPro-max': '(max-width: 1023px)',
  '--desktop-max': '(max-width: 1439px)',
  '--appleTV-max': '(max-width: 1919px)',
};

const customMediaMinMax = {
  '--iPhoneSE-max':
    {
      breakpoint: `${customMediaMax['--iPhoneSE-max']}`,
      lines: 4,
      linesWithGutter: 5,
      lineHeight: 24,
    },
  '--iPhoneSE':
    {
      breakpoint: `${customMediaMin['--iPhoneSE']} and ${customMediaMax['--iPhoneXR-max']}`,
      lines: 4,
      linesWithGutter: 5,
      lineHeight: 24,
    },
  '--iPhoneXR':
    {
      breakpoint: `${customMediaMin['--iPhoneXR']} and ${customMediaMax['--tablet-max']}`,
      lines: 5,
      linesWithGutter: 6,
      gutterHeight: 32,
      lineHeight: 24,
    },
  '--tablet':
    {
      breakpoint: `${customMediaMin['--tablet']} and ${customMediaMax['--iPadPro-max']}`,
      lines: 6,
      linesWithGutter: 7,
      lineHeight: 32,
    },
  '--iPadPro':
    {
      breakpoint: `${customMediaMin['--iPadPro']} and ${customMediaMax['--desktop-max']}`,
      lines: 6,
      linesWithGutter: 7,
      lineHeight: 32,
    },
  '--desktop':
    {
      breakpoint: `${customMediaMin['--desktop']} and ${customMediaMax['--appleTV-max']}`,
      lines: 6,
      linesWithGutter: 7,
      lineHeight: 32,
    },
  '--appleTV':
    {
      breakpoint: `${customMediaMin['--appleTV']}`,
      lines: 6,
      linesWithGutter: 7,
      lineHeight: 32,
    },
};

export {
  customMediaMin,
  customMediaMax,
  customMediaMinMax,
};
