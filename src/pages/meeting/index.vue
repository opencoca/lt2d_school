<template>
	<div>
		<div v-if="$route.params" id="content">
			<div style="display:none">
				<input
					type="radio"
					name="app_state"
					value="half"
					checked="checked"
				/>
				<input type="radio" name="app_state" value="app_fullscreen" />
				<input
					type="radio"
					name="app_state"
					value="meeting_fullscreen"
				/>
			</div>
			<div id="header" class="fc">
				<div id="logoDiv" class="fg fg-1">
					<div
						class="burger top menu-toggle"
						onclick="toggleMenu(this)"
						data-menu="room-menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div class="fg-3">
						<img
							src="assets/Preville-Logo-white.svg"
							alt="Preville Logo"
							id="logoImg"
						/>
					</div>
				</div>
				<div class="fg fg-3">
					<h1>{{ thisRooms.name }}</h1>
				</div>
				<div class="fg fc">
					<div>
						<a><img id="app_opener" class="noselect half" onclick="openWindowSide()" v-svg-inline src="assets/switcher.svg"/></a>
					</div>
					<div class="dot home">
						<a
							:href="'https://meet.jit.si/' + thisRooms.meet"
							target="meeting_iframe"
							onclick="breakout(this)"
						>
							<img
								v-svg-inline
								class="icon"
								src="assets/home/SVG/Home - Dark.svg"
							/>
						</a>
					</div>
					<div
						class="dot"
						v-for="n in Math.min(
							3,
							thisRooms.classroom.breakout_rooms
						)"
						v-bind:key="n"
					>
						<a
							:href="
								'https://meet.jit.si/' +
									thisRooms.meet +
									'-breakout-room-' +
									n +
									config.meetingSettings
							"
							target="meeting_iframe"
							onclick="breakout(this)"
						>
							<img
								v-svg-inline
								class="icon"
								:src="
									'assets/home/SVG/Dot ' +
										n +
										' - 24pt - Dark.svg'
								"
							/>
						</a>
					</div>
					<div
						class="dot menu-toggle"
						data-menu="break-room-menu"
						onclick="toggleMenu(this)"
						v-if="thisRooms.classroom.breakout_rooms > 3"
					>
						<a>
							<img
								v-svg-inline
								class="icon"
								src="assets/home/SVG/Ellipses - centered - Dark.svg"
							/>
						</a>
					</div>
					<div class="dot support">
						<a
							class="support"
							target="_blank"
							onclick=""
							href="https://www.centrepreville.org/camp-f-a-q-troubleshooting"
						>
							<img
								v-svg-inline
								class="icon"
								src="assets/home/SVG/Q - Dark.svg"
							/>
						</a>
					</div>
				</div>
			</div>

			<div id="myModal" class="modal">
				<!-- Modal content -->
				<div class="modal-content">
					<p class="rotate">Please rotate your device.</p>
				</div>
			</div>
			<div class="window">
				<div
					v-if="thisRooms.classroom.breakout_rooms > 3"
					id="break-room-menu"
					class="menu"
				>
					<ul>
						<li
							v-for="room in thisRooms.classroom.breakout_rooms"
							v-bind:key="room"
						>
							<div class="room-link">
								<a
									:href="
										'https://meet.jit.si/' +
											thisRooms.meet +
											'-breakout-room-' +
											n +
											config.meetingSettings
									"
									target="meeting_iframe"
									onclick="breakout(this)"
								>
									Breakout Room {{ room }}
								</a>
							</div>
						</li>
					</ul>
				</div>
				<iframe
					allow="microphone; camera"
					style="width: 0%; height: calc(100% - 50px); border: none;"
					src="https://www.centrepreville.org/camp-f-a-q-troubleshooting"
					id="faq"
					name="faq_iframe"
				></iframe>
				<template
					v-if="
						thisRooms.classroom.app_set[0].name ==
							'Shared Whiteboard'
					"
				>
					<iframe
						allow="microphone; camera"
						:src="
							thisRooms.classroom.app_set[0].iframe +
								thisRooms.name.split('/')[0]
						"
						id="apps"
						name="app_iframe"
						class="Close"
					></iframe>
				</template>
				<template v-else>
					<iframe
						allow="microphone; camera"
						:src="thisRooms.classroom.app_set[0].iframe"
						id="apps"
						name="app_iframe"
						class="Close"
					></iframe>
				</template>
				<iframe
					allow="microphone; camera"
					:src="
						'https://meet.jit.si/' +
							thisRooms.meet +
							config.meetingSettings
					"
					id="jitsi"
					name="meeting_iframe"
					class="Open"
				>
					<p>Your browser does not support iframes.</p>
				</iframe>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "meet",
	title: "Préville - Preville",
	created: function() {
		//Populate empty meeting
	},
	data: function() {
		return {
			app: "",
			config: {
				meetingSettings:
					"#jitsi_meet_external_api_id=0&amp;config.requireDisplayName=true&amp;config.startAudioMuted=6&amp;config.disableAudioLevels=true&amp;interfaceConfig.DISABLE_VIDEO_BACKGROUND=true&interfaceConfig.SHOW_CHROME_EXTENSION_BANNER=false&config.disableDeepLinking=true&setVideoQuality=720"
			}
		};
	},
	computed: {
		params: function() {
			if (!this.$route.params.meet) {
				return {
					meet: "Foyer de Préville - Preville Lobby",
					alt: "Foyer de Préville - Preville Lobby",
					name: "Foyer de Préville - Preville Lobby",
					title: "Hall",
					frameposition: 0,
					breakout_rooms: 1
				};
			} else {
				return this.$route.params;
			}
		},
		app_set: function() {
			if (!this.$route.params.app_set) {
				return [
					{
						name: "FAQ",
						logo:
							"https://centrepreville.org/wp-content/uploads/2020/12/Pre%CC%81villeLogoNEW-300x153.png",
						iframe:
							"https://centrepreville.org/camp-f-a-q-troubleshooting/"
					}
				];
			} else {
				return this.$route.params.app_set;
			}
		},
		meetingRooms: function() {
			return parseInt(this.params.breakout_rooms);
		},
		thisRooms: function() {
			return this.$parent.rooms.find(
				room => room.meet == this.$route.params.meet
			);
		}
	}
};
</script>
<style scoped>
@import "./css/header.css";
@import "./css/modal.css";
@import "./css/window.css";

@import "./css/app_opener_animations.css";

a {
	color: #444499;
	text-decoration: none;
}

a:hover {
	color: #333;
}

.noselect {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Safari */
	-khtml-user-select: none; /* Konqueror HTML */
	-moz-user-select: none; /* Old versions of Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

/* The Modal (background) */
.modal {
	display: none; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 1; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	padding-bottom: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
	height: 80%;
	font-size: 3rem;
}
.rotate {
	transform: rotate(-90deg) translate(-100%, 0%);
}
/*@media screen and (orientation: portrait) {
  .modal {
    display: block;
  }
}*/
</style>
