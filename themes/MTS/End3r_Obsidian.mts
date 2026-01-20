[mts]
Name End3r_Obsidian
Author End3r
MTSVersion 1.1
Version 1.0

; Fonts - Courier New for UTF8 support
FontDefault Courier New,11
FontStatus Courier New,11
FontChan Courier New,11
FontQuery Courier New,11
FontMemo Courier New,11
FontNotify Courier New,11

Prefix <c1>End3r<c2>|

; Base Colors: c1=Grey(14), c2=Black(1), c3=White(0), c4=LightGrey(15)
BaseColors 14,01,00,15

; Standard mIRC RGB Palette
RGBColors 255,255,255 0,0,0 0,0,127 0,147,0 255,0,0 127,0,0 156,0,156 252,127,0 255,255,0 0,252,0 0,147,147 0,255,255 0,0,252 255,0,255 127,127,127 210,210,210

; mIRC Options Colors (Background=Black(1), Text=White(0))
Colors 1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

Timestamp ON
TimestampFormat [HH:nn]

[Scheme1]
Name Standard
BaseColors 14,01,00,15

Echo <pre> <c1>[<c2>Info<c1>] <text>
EchoTarget <pre> <c1>[<c2>Info<c1>] <text>
Error <pre> 4[Error] <text>

TextChan <timestamp> <c1>< <c3><cmode><nick> <c1>> <text>
TextChanSelf <timestamp> <c1>< <c3><cmode><me> <c1>> <text>
TextQuery <timestamp> <c1>< <c3><nick> <c1>> <text>
TextQuerySelf <timestamp> <c1>< <c3><me> <c1>> <text>
ActionChan <timestamp> <c1>* <nick> <text>
ActionChanSelf <timestamp> <c1>* <me> <text>

Join <timestamp> <c1>*** <c3>Join: <c2><nick> (<address>)
Part <timestamp> <c1>*** <c3>Part: <c2><nick> (<address>)
Quit <timestamp> <c1>*** <c3>Quit: <c2><nick> (<address>)
Kick <timestamp> <c1>*** <c3>Kick: <c2><knick> by <nick> (<c2><text><c3>)
KickSelf <timestamp> <c1>*** <c3>Kick: <c2>You <c3>by <nick> (<c2><text><c3>)
Mode <timestamp> <c1>*** <c3>Mode: <c2><modes> by <nick>
Topic <timestamp> <c1>*** <c3>Topic: <c2><text> (by <nick>)
Nick <timestamp> <c1>*** <c3>Nick: <c2><nick> is now <newnick>
NickSelf <timestamp> <c1>*** <c3>Nick: <c2>You are now <newnick>
Notice <timestamp> <c1>-<c3><nick><c1>- <text>
NoticeSelf <timestamp> <c1>-> <c3><target><c1>: <text>
