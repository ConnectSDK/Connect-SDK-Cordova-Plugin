var Capabilities = {
    VolumeControl: {
        toString: function () { return ""; },
        Any: "VolumeControl.Any",
        Get: "VolumeControl.Get",
        Set: "VolumeControl.Set",
        UpDown: "VolumeControl.UpDown",
        Subscribe: "VolumeControl.Subscribe",
        Mute: {
            toString: function () { return ""; },
            Get: "VolumeControl.Mute.Get",
            Set: "VolumeControl.Mute.Set",
            Subscribe: "VolumeControl.Mute.Subscribe"
        }
    },
    MediaPlayer: {
        toString: function () { return ""; },
        Any: "MediaPlayer.Any",
        Display: {
            toString: function () { return ""; },
            Image: "MediaPlayer.Display.Image"
        },
        Play: {
            toString: function () { return ""; },
            Video: "MediaPlayer.Play.Video",
            Audio: "MediaPlayer.Play.Audio",
            Playlist: "MediaPlayer.Play.Playlist"
        },
        Close: "MediaPlayer.Close",
        MediaInfo: {
            toString: function () { return ""; },
            Get: "MediaPlayer.MediaInfo.Get",
            Subscribe: "MediaPlayer.MediaInfo.Subscribe"
        },
        Subtitle: {
            toString: function () { return ""; },
            WebVTT: "MediaPlayer.Subtitle.WebVTT",
            SRT: "MediaPlayer.Subtitle.SRT"
        },
        Loop: "MediaPlayer.Loop"
    },
    TextInputControl: {
        toString: function () { return ""; },
        Any: "TextInputControl.Any",
        Send: "TextInputControl.Send.Text",
        Enter: "TextInputControl.Send.Enter",
        Delete: "TextInputControl.Send.Delete",
        Subscribe: "TextInputControl.Subscribe"
    },
    MouseControl: {
        toString: function () { return ""; },
        Any: "MouseControl.Any",
        Connect: "MouseControl.Connect",
        Disconnect: "MouseControl.Connect",
        Click: "MouseControl.Click",
        Move: "MouseControl.Move",
        Scroll: "MouseControl.Scroll"
    },
    KeyControl: {
        toString: function () { return ""; },
        Any: "KeyControl.Any",
        Up: "KeyControl.Up",
        Down: "KeyControl.Down",
        Left: "KeyControl.Left",
        Right: "KeyControl.Right",
        OK: "KeyControl.OK",
        Back: "KeyControl.Back",
        Home: "KeyControl.Home",
        KeyCode: "KeyControl.Send.KeyCode"
    },
    Launcher: {
        toString: function () { return ""; },
        Any: "Launcher.Any",
        App: {
            toString: function () { return "Launcher.App"; },
            Params: "Launcher.App.Params",
            Close: "Launcher.App.Close",
            List: "Launcher.App.List"
        },
        Browser: {
            toString: function () { return "Launcher.Browser"; },
            Params: "Launcher.Browser.Params"
        },
        Hulu: {
            toString: function () { return "Launcher.Hulu"; },
            Params: "Launcher.Hulu.Params"
        },
        Netflix: {
            toString: function () { return "Launcher.Netflix"; },
            Params: "Launcher.Netflix.Params"
        },
        YouTube: {
            toString: function () { return "Launcher.YouTube"; },
            Params: "Launcher.YouTube.Params"
        },
        AppStore: {
            toString: function () { return "Launcher.AppStore"; },
            Params: "Launcher.AppStore.Params"
        },
        AppState: {
            toString: function () { return "Launcher.AppState"; },
            Subscribe: "Launcher.AppState.Subscribe"
        },
        RunningApp: {
            toString: function () { return "Launcher.RunningApp"; },
            Subscribe: "Launcher.RunningApp.Params"
        },
        Levak: "Launcher.Levak"
    },
    TVControl: {
        toString: function () { return ""; },
        Any: "TVControl.Any",
        Channel: {
            toString: function () { return ""; },
            Get: "TVControl.Channel.Get",
            Set: "TVControl.Channel.Set",
            Up: "TVControl.Channel.Up",
            Down: "TVControl.Channel.Down",
            List: "TVControl.Channel.List",
            Subscribe: "TVControl.Channel.Subscribe"
        },
        Program: {
            toString: function () { return ""; },
            Get: "TVControl.Program.Get",
            List: {
                toString: function () { return "TVControl.Program.List"; },
                Subscribe: "TVControl.Program.List.Subscribe"
            },
            Subscribe: "TVControl.Program.Subscribe"
        },
        "3D": {
            toString: function () { return ""; },
            Get: "TVControl.3D.Get",
            Set: "TVControl.3D.Set",
            Subscribe: "TVControl.3D.Subscribe"
        }
    },
    ExternalInputControl: {
        toString: function () { return ""; },
        Any: "ExternalInputControl.Any",
        Picker: {
            toString: function () { return ""; },
            Launch: "ExternalInputControl.Picker.Launch",
            Close: "ExternalInputControl.Picker.Close"
        },
        List: "ExternalInputControl.List",
        Set: "ExternalInputControl.Set"
    },
    PowerControl: {
        toString: function () { return ""; },
        Any: "PowerControl.Any",
        On: "PowerControl.On",
        Off: "PowerControl.Off"
    },
    ToastControl: {
        toString: function () { return ""; },
        Any: "ToastControl.Any",
        Show: {
            toString: function () { return "ToastControl.Show"; },
            Toast: "ToastControl.Show.Toast",
            Clickable: {
                toString: function () { return "ToastControl.Show.Clickable"; },
                App: {
                    toString: function () { return "ToastControl.Show.Clickable.App"; },
                    Params: "ToastControl.Show.Clickable.App.Params"
                },
                URL: "ToastControl.Show.Clickable.URL"
            }
        }
    },
    WebAppLauncher: {
        toString: function () { return ""; },
        Any: "WebAppLauncher.Any",
        Launch: {
            toString: function () { return "WebAppLauncher.Launch"; },
            Params: "WebAppLauncher.Launch.Params"
        },
        Message: {
            toString: function () { return ""; },
            Send: {
                toString: function () { return "WebAppLauncher.Message.Send"; },
                JSON: "WebAppLauncher.Message.Send.JSON"
            },
            Receive: {
                toString: function () { return "WebAppLauncher.Message.Receive"; },
                JSON: "WebAppLauncher.Message.Receive.JSON"
            }
        },
        Connect: "WebAppLauncher.Connect",
        Disconnect: "WebAppLauncher.Disconnect",
        Join: "WebAppLauncher.Join",
        Close: "WebAppLauncher.Close",
        Pin: "WebAppLauncher.Pin"
    },
    MediaControl: {
        toString: function () { return ""; },
        Any: "MediaControl.Any",
        Play: "MediaControl.Play",
        Pause: "MediaControl.Pause",
        Stop: "MediaControl.Stop",
        Rewind: "MediaControl.Rewind",
        FastForward: "MediaControl.FastForward",
        Seek: "MediaControl.Seek",
        Previous: "MediaControl.Previous",
        Next: "MediaControl.Next",
        Duration: "MediaControl.Duration",
        PlayState: {
            toString: function () { return "MediaControl.PlayState"; },
            Subscribe: "MediaControl.PlayState.Subscribe"
        },
        Position: "MediaControl.Position"
    },
    PlaylistControl: {
        toString: function () { return ""; },
        JumpToTrack: "PlayListControl.JumpTrack",
        Next: "PlayListControl.Next",
        Previous: "PlayListControl.Previous",
        SetPlayMode: ""
    }
};

if (ConnectSDK) {
    ConnectSDK.Capabilities = Capabilities;
} else {
    module.exports = Capabilities;
}
