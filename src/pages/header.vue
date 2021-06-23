<template>
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
				<img :src="logo" alt="Preville Logo" id="logoImg" />
			</div>
		</div>
		<div class="fg fg-3">
			<h1>{{ roomTitle }}</h1>
		</div>
		<div class="fg fc">
			<div>
				<a
					><img
						id="app_opener"
						class="noselect half"
						onclick="openWindowSide()"
						v-svg-inline
						src="assets/switcher.svg"
				/></a>
			</div>
			<div class="dot home">
				<a
					:href="
						room.classroom.platform.domain +
							room.meet +
							room.classroom.platform.paramiters
					"
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
				v-for="n in Math.min(3, breakRooms)"
				v-bind:key="n"
			>
				<a
					:href="
						room.classroom.platform.domain +
							room.meet +
							'-breakout-room-' +
							n +
							room.classroom.platform.paramiters
					"
					target="meeting_iframe"
					onclick="breakout(this)"
				>
					<img
						v-svg-inline
						class="icon"
						:src="'assets/home/SVG/Dot ' + n + ' - 24pt - Dark.svg'"
					/>
				</a>
			</div>
			<div
				class="dot menu-toggle"
				data-menu="break-room-menu"
				onclick="toggleMenu(this)"
				v-if="breakRooms > 3"
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
</template>
<script>
export default {
	name: "Header",
	props: {
		logo: {
			type: String,
			default: "assets/Preville-Logo-white.svg"
		},
		"breakoutRooms": {
			type: Number,
			default: 0
		},
		'room': Object,
		'title': String,
	},
	computed: {
		breakRooms: function () {
			return (this.breakoutRooms) ? this.breakoutRooms : this.room.classroom.breakout_rooms;
		},
		roomTitle: function () {
			return (this.title) ? this.title : this.room.name;
		}
	}
};
</script>
<style scoped>
@import "./meeting/css/header.css";
@import "./meeting/css/app_opener_animations.css";
/* @import "./meeting/css/modal.css"; */
/* @import "./meeting/css/window.css"; */

</style>