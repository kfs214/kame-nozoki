// eslint-disable-next-line @typescript-eslint/no-unused-vars
function main() {
  const todaysSettings = notificationSettings
    .filter((setting) => setting.days.includes(new Date().getDay()))
    .map((setting) => ({
      type: 'image' as const,
      originalContentUrl: setting.originalContentUrl,
      previewImageUrl: setting.previewImageUrl,
    }));
  if (todaysSettings.length === 0) {
    Logger.log('No notification settings found for today.');
    return;
  }

  const lineChannelAccessToken =
    PropertiesService.getScriptProperties().getProperty(
      'lineChannelAccessToken',
    );
  if (!lineChannelAccessToken) {
    throw new Error(
      'failed to get lineChannelAccessToken from ScriptProperties! ending process...',
    );
  }

  const lineApiOrigin =
    PropertiesService.getScriptProperties().getProperty('lineApiOrigin');
  if (!lineApiOrigin) {
    throw new Error(
      'failed to get lineApiOrigin from ScriptProperties! ending process...',
    );
  }

  const quote = getQuote();

  const lineClient = line({
    channelAccessToken: lineChannelAccessToken,
    apiOrigin: lineApiOrigin,
  });

  lineClient.broadcast(
    [...todaysSettings, ...commonTextMessages, quote].filter((e) => e),
  );
}
