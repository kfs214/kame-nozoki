const DaysOfWeek = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notificationSettings = [
  {
    type: 'burnable',
    days: [DaysOfWeek.SUNDAY, DaysOfWeek.WEDNESDAY],
    originalContentUrl:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihbaSJ1evmWeUqkIOLWD8UtxPlsh8xOTK_137WKG3VR5komOgTqNHgGhbkynAGklXDfrt6znJ8ltFiY84uzq62c0gPyVHDFa7w=w2888-h1946-rw-v1',
    previewImageUrl:
      'https://lh3.googleusercontent.com/drive-viewer/AKGpihbaSJ1evmWeUqkIOLWD8UtxPlsh8xOTK_137WKG3VR5komOgTqNHgGhbkynAGklXDfrt6znJ8ltFiY84uzq62c0gPyVHDFa7w=w2888-h1946-rw-v1',
  },
  {
    type: 'recyclable',
    days: [DaysOfWeek.MONDAY],
    originalContentUrl:
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbQ4cS-ENFUAjheEOO_klnydB_OavLtOF_SMgbcgVSI4OiHWmFqEYfMFub10AxmGRJ5HBC54TnC7Iv_SVtJN4gjijCmTNtvhas=w2888-h1946-v0',
    previewImageUrl:
      'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbQ4cS-ENFUAjheEOO_klnydB_OavLtOF_SMgbcgVSI4OiHWmFqEYfMFub10AxmGRJ5HBC54TnC7Iv_SVtJN4gjijCmTNtvhas=w2888-h1946-v0',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const commonTextMessages = [
  {
    type: 'text' as const,
    text: '明日はごみの日です。\n※ごみ収集予定は祝日等の関係で変更になる場合があります。実際の交通規制に従って走行してください',
  },
];
