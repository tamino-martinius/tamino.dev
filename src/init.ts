import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install({
  onUpdateReady: function () {
    OfflinePluginRuntime.applyUpdate();
  },
  onUpdated: function () {
    window.location.reload();
  }
});
