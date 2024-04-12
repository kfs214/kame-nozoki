type Message =
  | {
      type: 'image';
      originalContentUrl: string;
      previewImageUrl: string;
    }
  | {
      type: 'text';
      text: string;
    };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function line({
  channelAccessToken,
  apiOrigin,
}: {
  channelAccessToken: string;
  apiOrigin: string;
}) {
  function broadcast(messages: Message[]) {
    const PATH = 'v2/bot/message/broadcast';
    const ENDPOINT = `${apiOrigin}/${PATH}`;
    const retryOptions = {
      intervalMs: 1000,
      maxTryCount: 3,
    };

    const options = {
      method: 'post' as const,
      contentType: 'application/json',
      headers: {
        Authorization: `Bearer ${channelAccessToken}`,
        'X-Line-Retry-Key': Utilities.getUuid(),
      },
      payload: JSON.stringify({
        messages,
      }),
    };

    for (
      let triedTimes = 0;
      triedTimes < retryOptions.maxTryCount;
      triedTimes++
    ) {
      const res = UrlFetchApp.fetch(ENDPOINT, options);
      if (res.getResponseCode() === 200) break;
      Logger.log('broadcasting failed. retrying...');
    }
  }

  return { broadcast };
}
