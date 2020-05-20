
Slack Too! is an approximation of Slack, built with [React](https://reactjs.org/) and [Redux](https://redux.js.org/)

# Slack Too!

The app is hosted for free on Heroku at [https://slack-too.herokuapp.com/](https://slack-too.herokuapp.com/) so the initial load time might be slow. Heroku Free dyno go to sleep after a period of inactivity and take about 30 sec to spin back up.


## Overview
I've recreated Slack's basic layout and a few of its most basic functions in regards to messaging:
* joining different channels
* typing and submitting messaging
* inspecting other users by hovering over their avatars
* performing a search
* snoozing notifications

## Interesting bits
An very cool UX feature in Slack is the way it makes messaging so easy. From anywhere in the application, if you start typing, your keystrokes will instantly appear in the input component at the bottom of the messages. This isn't normal behavior for an input component that doesn't have focus.

### Conflicts between inputs
Recreating that UX was simple at first. I had the `ChannelInput` component add an event listener that fired upon any keyboard strokes. If the input didn't have focus, it would take it. But this became problematic when I introduced the `SearchModal` component, which also had an input field.

At first I thought I could simply solve this by calling `preventDefault` in the `SearchModal` but I learned that it only stops the browsers default behavior but not the bubbling up of the event. Since I installed `ChannelInput`'s event listener on document (so that it could steal focus from anywhere in the app) the event would eventually bubble up to it and steal focus and the keypresses fromt the `SearchModal`.

Instead I call `stopPropagation` to prevent the event from bubbling. It works for this situation since the `SearchModal`, when presented, is supposed to take all the focus on the screen anyway.


# Components

### `ChannelList`
The `ChannelList` component allows users to navigate between Slack channels and is found on the left side of the screen. An interesting UX component of the channel list is that it allows the user to minimize the list, leaving only the header and the currently selected channel. This was accomplished by tracking the selected channel in the component state and only rendering that channel when the UI was in its minimized form.

### `Channel`
The `Channel` component is a container for presenting the channel's messages. Akin to any modern messaging app, the messages are displayed in reverse chronological order with the latest message at the bottom, closest to the input.
  * The Channel visually distinguishes messages sent on different days by inserting a divider between the messages from different days
  * Successive messages from the same user are thought of as a continuous *stream-of-thought* and are visually differentiated to show that

### `ChannelMessage`
The `ChannelMessage` component presents the message text, its author's name and avatar, and timestamp.
* It takes a prop called `shouldShowUser`, which if set to true, minimizes the message by hiding the author's name, avatar, and timestamp. The Channel uses this prop to express the messages as a continuous *stream-of-thought*.
* Hovering over a minimized message will reveal the timestamp. [Hoverable](#hoverable)
* Clicking on the author's avatar will present the Author's contact card [UserCard](#usercard)

### `ChannelInput`
The `ChannelInput` component presents an Input element for the user to send messages into the channel.
* To enhance the UX, the ChannelInput listens for keystroke events and steals focus so the user can start typing messages from anywhere in the app

### `SearchModal`
The `SearchModal` component allows the user to do a search for users in the current channel.
* the search component takes up the entire screen and steals focus, even from [ChannelInput](#channelinput)
* it can be dismissed by clicking outside the search UI, pressing `enter` or `escape`
* updates and presents search results instantly
* Redux makes it easy to implement this component application wide since the application state is separate from the UI
* it can be invoked from anywhere

### `Dismissible`
A wrapper component that listens for clicks. Clicking outside of the element fires the dismiss function passed to it.
* much like the [Hoverable](#hoverable) component, this wrapper component removes the event handling behavior from the presentational components so that it can be reused.
* Specifically, when a user clicks on the notifications icon they are presented with either of 2 menus which depends on if the notifications are turned ON or OFF. Both of these menus can be dismissed the same way, by clicking outside their elements. `Dismissible` allows me to give both menus this behavior without creating extra components.

### `Hoverable`
A wrapper component that listens for clicks. Clicking inside it presents a [UserCard](#usercard). Clicking outside it dismisses the card.
* I chose to separate the click handling behavior from the UserCard because it makes both more modular. I can use UserCard elsewhere for its presentational qualities, and I can add more event handling to Hoverable without causing inadvertent behavior elsewhere.
* For the future, I'd like to rename this component and add an event handler to listen for presses on the `Escape` key as an additional way to dismiss the UserCard.

### `UserCard`
The `UserCard` displays the user's name, avatar, online status, and local time. It has buttons to "Message" or "Call" the user.


# Reducers

### `channels`
State of the channels. The state is an object keyed by channel name and the value is an object with information on the channel.

### `messages`
State of the messages. The state is an object keyed by channel names and the value is an array of messages.
* createMessage action expects a payload with the `channelName` and `message` and pushes the message into its respective state

### `ui`
State of the UI. For example, the channel are we viewing.
* the `selectChannel` action expects a payload as a string equal to the channel name.

### `users`
State of users. The state object is keyed by user's unique ID. The value is the user information.

# Selectors

#### `channelsSliceSelector`
retrieves state of channels
#### `messagesSliceSelector`
retrieves state of messages
#### `uiSliceSelector`
retrieves state of ui
#### `userSliceSelector`
retrieves state of users *should rename*

### `userSelector`
gets a user from the state, expects an object with `userId` key

### `currentUserSelector`
uses the `userSliceSelector` and selects users.self

### `usersSelector`
uses the `userSliceSelector` and returns an array of users

### `selectedChannelNameSelector`
gets the selected channel name from `uiSliceSelector`

### `selectedChannelSelector`
gets the selected channel object from `channelsSliceSelector` by using `selectedChannelNameSelector` as the key

### `messagesForSelectedChannelSeelctor`
* gets the messages for the currently selected channel from  `messagesSliceSelector` by using the value from `selectedChannelNameSelector` as the key
* using the userId property of the message as the key, it gets the user object from `userSliceSelector`

### `channelSelector`
gets channel from state, expects an object with `channel` key

### `messagesByChannelSelector`
gets the messages from state, expects an object with `channel` key

### `channelListSelector`
gets an array of channels from [`channelsSliceSelector`](#channelsSliceSelector)
