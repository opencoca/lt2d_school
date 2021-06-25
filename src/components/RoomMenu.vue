<template>
	<div class="menu-container" id="room-menu">
		<div class="menu-backdrop" onclick="closeMenu('room-menu')"></div>
		<div class="menu">
			<ul>
				<li class="room">
					<div>
						<input
							type="text"
							v-model="search"
							v-on:keyup="room_filter"
							placeholder="🔎        Classes        🔍"
							size="48"
						/>
					</div>
				</li>
				<li
					v-for="item in filtered_rooms"
					v-bind:key="item.id"
					v-bind:name="item.name"
					class="room"
				>
					<div
						v-if="item.name === item.name.toUpperCase()"
						class="program"
					>
						{{ item.name }}
					</div>
					<div
						v-else
						class="room-link"
						:class="{
							current: $route.params.meet == item.classroom.meet
						}"
						onclick="closeMenu('room-menu')"
					>
						<router-link
							:to="{
								name: item.route,
								params: item.classroom
							}"
							>{{ item.name }}</router-link
						>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "MenuItems",
	props: {
		rooms: {
			type: Array,
			default: () => []
		},
		filtered_rooms: {
			type: Array,
			default: () => []
		}
	},
	// data: () => ({
	//   filtered_rooms: this.rooms
	// }),
	methods: {
		room_filter() {
			if (this.search != "") {
				// console.log(this.rooms)
				this.filtered_rooms = this.rooms.filter(
					i =>
						i.name
							.toLowerCase()
							.includes(this.search.toLowerCase()) &&
						i.name.toUpperCase() != i.name
				);
			} else {
				this.filtered_rooms = this.rooms;
			}
		}
	}
};
</script>

<style>
.menu-container > * {
	transform: translate(-100%, 0);
	transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

.menu-container.open > * {
	transform: translate(0, 0);
}

.menu,
.menu * {
	box-sizing: border-box;
}

.room input {
	display: block;
	text-align: center;
	width: 80%;
	margin-left: auto;
	margin-right: auto;
}

#room-menu .menu {
	position: fixed;
	width: 50vw;
	height: 100vh;

	top: 0;

	overflow-y: scroll;
	overflow-x: hidden;
	background-color: rgba(255, 255, 255, 0.8);
	text-align: left;
	z-index: 6;
	transform-origin: 0% 0%;
}

.menu li {
	/* padding: 1rem; */
	font-size: 1.1em;
}
.menu li:not(:last-child) {
	margin-bottom: 1rem;
}
.menu li div {
	padding: 0.5rem;
}
.menu li .program {
	font-size: 1.3em;
	background-color: white;
	text-align: center;
	width: 100%;
	/* padding-left: 0; */
	padding: 1.2em;
}
.menu-backdrop {
	width: 100vw;
	height: 100vh;
	z-index: 5;
	top: 0;
	position: fixed;
	background-color: rgba(0,0,0,0.2);
}

.room-link {
	cursor: pointer;
	border-style: solid;
	border-width: 2px;
	border-color: black;
	background-color: white;
	padding: 0.5rem;
	border-radius: 10px;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
}
.room-link a {
	color: black;
	text-decoration: none;
	display: block;
	height: 100%;
}
.room-link:hover {
	background-color: rgba(49, 200, 106, 1);
	border-radius: 0;
}
.room-link.current {
	border-radius: 0;
	background-color: rgba(49, 200, 106, 1);
}
</style>
