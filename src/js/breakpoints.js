const customMediaMin = {
  '--iPhoneSE':     '(min-width: 320px)',
  '--iPhoneXR':     '(min-width: 414px)',
  '--tablet':       '(min-width: 768px)',
  '--iPadPro':      '(min-width: 1024px)',
  '--desktop':      '(min-width: 1440px)',
  '--appleTV':      '(min-width: 1920px)',
};

const customMediaMax = {
  '--iPhoneSE-max': '(max-width: 319px)',
  '--iPhoneXR-max': '(max-width: 413px)',
  '--tablet-max':   '(max-width: 767px)',
  '--iPadPro-max':  '(max-width: 1023px)',
  '--desktop-max':  '(max-width: 1439px)',
  '--appleTV-max':  '(max-width: 1919px)',
};

const customMediaMinMax = {
  '--iPhoneSE-max': `${customMediaMax['--iPhoneSE-max']}`,
  '--iPhoneSE':     `${customMediaMin['--iPhoneSE']} and ${customMediaMax['--iPhoneXR-max']}`,
  '--iPhoneXR':     `${customMediaMin['--iPhoneXR']} and ${customMediaMax['--tablet-max']}`,
  '--tablet':       `${customMediaMin['--tablet']} and ${customMediaMax['--iPadPro-max']}`,
  '--iPadPro':      `${customMediaMin['--iPadPro']} and ${customMediaMax['--desktop-max']}`,
  '--desktop':      `${customMediaMin['--desktop']} and ${customMediaMax['--appleTV-max']}`,
  '--appleTV':      `${customMediaMin['--appleTV']}`,
};

export { 
  customMediaMin,
  customMediaMax,
  customMediaMinMax
};
