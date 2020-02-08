<template>
	<div class="container">
		<div class="description">
			<span>Are you hungry?</span>
			<span>Don't wait</span>
			<span>Lets start to order food now</span>
			<button>Check Our Menu</button>
		</div>
		<div class="image">
			<img src="@/assets/images/plate.png" />
		</div>
		
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ComponentName extends Vue {}
</script>

<style lang="scss" scoped>
@import "../Styles/mainStyles.scss";

.container {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	font-family: "Nobile", sans-serif;
	text-align: start;
	height: 100%;
}
.description {
	display: flex;
	flex-direction: column;
	justify-content: center;

	height: 100%;
	span:first-child {
		font-size: 2.5em;
		color: $primary-colors;
		font-family: $font-stack;
	}
	span:nth-child(2) {
		font-size: 5.5em;
		color: $primary-colors;
		font-family: $font-stack;
	}
	span:nth-child(3) {
		color: white;
		font-family: $font-stack;
		font-size: 1.5em;
	}
	button {
		width: 150px;
		height: 40px;
		border: 2px $primary-colors solid;
		background: transparent;
		color: $primary-colors;
		border-radius: 20px;
		margin-top: 20px;
		cursor: pointer;
	}
	button:hover {
		border: 2px white solid;
		background: transparent;
		color: white;
	}
}

</style>
