<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La figura presenta la síntesis de componente formativo, se compone de cinco nodos principales que tratan sobre diferentes aspectos del sistema de salud colombiano. Se abordan las responsabilidades de las Entidades Promotoras de Salud y las Instituciones Prestadoras de Servicios de Salud, resaltando la importancia de la ley, la normativa y la auditoría de servicios. También se detalla el proceso de liquidación de los servicios de salud, el Plan Obligatorio de Salud y los requisitos de la factura como documento contable.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
