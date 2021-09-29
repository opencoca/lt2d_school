<template>
	<Window v-bind:thisRooms="thisRooms" :switcher="true">
		<iframe
			style="width: 0%; height: calc(100% - 50px); border: none;"
			src="https://www.centrepreville.org/camp-f-a-q-troubleshooting"
			id="faq"
			name="faq_iframe"
		></iframe>
		<template
			v-if="thisRooms.classroom.app_set[0].name == 'Shared Whiteboard'"
		>
			<iframe
				allow="microphone; camera"
				:src="
					[thisRooms.classroom.app_set[0].iframe, thisRooms.meet].join('-')
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
				thisRooms.classroom.platform.domain +
					thisRooms.meet +
					thisRooms.classroom.platform.paramiters
			"
			id="jitsi"
			name="meeting_iframe"
			class="Open"
		>
			<p>Your browser does not support iframes.</p>
		</iframe>
	</Window>
</template>
<script>
// import Header from "../header.vue";
import Window from "../window.vue";
export default {
	name: "meet",
	title: "Préville - Preville",
	components: {
		// Header
		Window
	},
	created: function() {
		//Populate empty meeting
	},
	data: function() {
		return {
			app: "",
			config: {}
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
