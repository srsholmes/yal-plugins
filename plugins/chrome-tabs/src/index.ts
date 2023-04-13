import { Action, YalPlugin, YalPluginsConfig } from '@yal-app/types';

// ***************************************************************************
// This is applescript taken directly from https://github.com/johnlindquist/kit/blob/main/src/lib/browser.ts
// It's a great example of how to use AppleScript to interact with the browser
// and get the tabs
// Check out https://www.scriptkit.com/. It's a great app!
// ***************************************************************************

const focusTabCmd = ({
  browser,
  url,
}: {
  browser: string;
  url: string;
}) => String.raw`
set address to "${url}"

tell application "${browser}"
    activate
        if not (exists window 1) then reopen
        repeat with w in windows
                set i to 1
                repeat with t in tabs of w
                if URL of t contains address then
                        set active tab index of w to i
                        set index of w to 1
                        return address
                end if
                set i to i + 1
                end repeat
        end repeat
        open location address
        return address
end tell
`;

const getTabsCmd = (
  browser = 'Google Chrome'
) => String.raw`on findAndReplaceInText(theText, theSearchString, theReplacementString)
	set AppleScript's text item delimiters to theSearchString
	set theTextItems to every text item of theText
	set AppleScript's text item delimiters to theReplacementString
	set theText to theTextItems as string
	set AppleScript's text item delimiters to ""
	return theText
end findAndReplaceInText

script V
	property Ps : null
	property Ws : null
	property JSON : ""
	property Object : ""
	
	to finalizeJSON()
		set JSON to "[" & text 1 thru -2 of JSON & "]"
	end finalizeJSON
	
	to addPair(key, value)
		if key = "html" then
			set Object to Object & ("\"" & key & "\":" & value & ",")
		else
			set Object to Object & ("\"" & key & "\":\"" & value & "\",")
		end if
	end addPair
	
	to finalizeObject()
		set Object to "{" & text 1 thru -2 of Object & "},"
		set JSON to JSON & Object
		set Object to ""
	end finalizeObject
end script

set tabData to ""

tell application "Google Chrome"
	set window_list to every window # get the windows
	
	repeat with the_window in window_list # for every window
		set tab_list to every tab in the_window # get the tabs
		
		repeat with the_tab in tab_list # for every tab
			try
				# execute JavaScript to retrieve HTML content of tab
				tell the_tab to set currentTabSource to execute javascript "JSON.stringify(document.body.innerText)"
				# set the_url to the URL of the_tab # grab the URL
				V's addPair("url", the URL of the_tab)
				# set the_title to the title of_the_tab # grab the title
				V's addPair("title", the title of the_tab)
				V's addPair("html", currentTabSource)
				V's finalizeObject()
			end try
		end repeat
	end repeat
	V's finalizeJSON()
end tell

get V's JSON`;

const action: Action = async (result) => {
  await yal.shell.appleScript({
    command: focusTabCmd({
      browser: 'Google Chrome',
      url: result.item.description,
    }),
  });
};

const chromeTabs: YalPlugin = async (args) => {
  const res = await new yal.shell.Command('osascript', [
    '-e',
    getTabsCmd(),
  ]).execute();
  console.log('********');
  console.log(res.stdout);
  console.log('********');
  args.setState({
    heading: `tabs`,
    action,
    state: JSON.parse(res.stdout).map((x) => ({
      name: x.title,
      description: x.url,
      metadata: x.html,
      icon: 'chrome',
    })),
  });
};

export const config: YalPluginsConfig = {
  keywords: ['tabs'],
  filter: true,
};

export default chromeTabs;
