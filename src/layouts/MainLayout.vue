<template>
	<div class="macroContainer">
		<div class="cardContainer">
			<header>
				<h2 class="no-space">Sucursal Virtual Bancaria</h2>
				<small class="no-space">Fecha y hora actual: Jueves 4 de Agosto de 2022 | 10:11:10 a.m.</small>
			</header>

			<div class="divider"></div>

			<main>
				<router-view />
			</main>

			<div class="divider"></div>

			<footer>
				<p><small class="extra-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, officiis tempore ipsa cum unde facere fuga quasi odit modi vitae voluptatem ex asperiores molestiae, id quibusdam labore accusantium, in quod?</small></p>
			</footer>
		</div>
	</div>
</template>

<style scoped>
	.macroContainer {
		background-image: url('https://cdn.pixabay.com/photo/2013/07/18/10/56/gold-163519_960_720.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		padding: 1em;
		display: flex;
		justify-items: center;
		justify-content: center;
		min-height: 94.4vh;
		background-attachment: fixed;
	}

	.macroContainer .cardContainer {
		background-color: rgba(255, 255, 255, .9);
		padding: 1em;
		border-radius: 5px;
		box-shadow: 6px 6px 15px -3px rgba(0,0,0,0.65);
		width: 100%;
	}
</style>