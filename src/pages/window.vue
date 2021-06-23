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
			<Header :room="thisRooms" />
			<div id="myModal" class="modal">
				<!-- Modal content -->
				<div class="modal-content">
					<p class="rotate">Please rotate your device.</p>
				</div>
			</div>
			<div class="window">
				<!-- TODO: See if I can place this div somewhere else -->
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
				<slot/>
			</div>
		</div>
	</div>
</template>
<script>
import Header from "./header.vue";
export default {
	name: "Window",
	title: "Préville - Preville",
	components: {
		Header
	},
	props: {
		thisRooms: {
			type: Object
		},
		title: String,
	}
};
</script>
<style scoped>
/* @import "./meeting/css/header.css"; */
/* @import "./meeting/css/modal.css"; */
@import "./meeting/css/window.css";

/* @import "./meeting/css/app_opener_animations.css"; */

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
