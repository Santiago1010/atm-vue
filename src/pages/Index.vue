<template>
	<div class="row justify-center">
		<div class="col-12 col-md-5 q-pa-sm flex">
			<q-card class="my-card q-pa-md flex">
				<q-card-section class="section">
					<h6 class="no-space upper text-center"><span>inicia sesión</span></h6>

					<q-input outlined v-model="userName" label="Escribe tu nombre de usuario" class="q-my-md" />

					<q-btn color="primary" class="btn-large">inicia sesión</q-btn>
				</q-card-section>
			</q-card>
		</div>

		<div class="col-12 col-md-5 q-pa-sm flex justify-center">
			<q-card class="my-card q-pa-md">
				<q-card-section>
					<h6 class="no-space upper text-center"><span>acerca de nosotros</span></h6>

					<p class="q-mt-md">Este proyecto ha sido creado con la intención de mostrar las buenas prácticas y hablidades con Vue 3 y PHP. En este proyecto se encontrarán algoritmos, servicios y librerías para soportar temas tan importantes como lo son seguridad, accesibilidad, UX, consumo de API, entre otros. A continuación, encontrará links a todoos los recursos que contiene este proyecto:</p>

					<ul>
						<li><b><a href="https://vuejs.org/guide/introduction.html" target="_BLANK">Vue</a></b></li>
						<li><b><a href="" target="_BLANK">Axios</a></b></li>
						<li><b><a href="" target="_BLANK">Pinia</a></b></li>
						<li><b><a href="" target="_BLANK">Quasar</a></b></li>
						<li><b><a href="" target="_BLANK">Vue Router</a></b></li>
						<li><b><a href="" target="_BLANK">GitHub</a></b></li>
					</ul>
				</q-card-section>
			</q-card>
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const userName = ref(null)
</script>

<style scoped>
	.my-card {
		width: 100%;
		display: flex;
		align-content: center;
	}

	.my-card .section {
		width: 100%;
	}
</style>