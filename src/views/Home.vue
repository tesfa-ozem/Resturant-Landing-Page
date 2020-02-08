<template>
	<div class="home">
		<div class="overlay"></div>
		<Header />
        <Carousel/>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Header from "@/components/header.vue";
import Carousel from "@/components/carousel.vue";

@Component({
	components: {
		Header,
		Carousel
	}
})
export default class Home extends Vue {
	fname: String = "";
	lname = "";
	email = "";
	password = "";
	isActive = true;
	hasError = false;

	checkForm() {
		if (this.lname && this.fname) {
			return true;
		} else if (this.lname == "" || this.fname == "") {
			this.isActive = false;
			this.hasError = true;
		}
	}
}
</script>
<style lang="scss" >
.home {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	width: 100%; /* Full width (cover the whole page) */
	height: 100%; /* Full height (cover the whole page) */
	background-image: url("~@/assets/images/bg-gn.png");
	background-repeat: no-repeat;
	background-size: 100%;
	margin: 0;
	padding: 0;
}

@media only screen and (max-width: 600px) {
}
</style>
