<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 La factura como documento contable
    .f-4-1.mn.p-5.mb-4
      h5 El Código de Comercio Colombiano define la factura en su artículo 772 como: 
      .row.justify-content-center.mb-5
        .col-lg-10
          .p-4(style="background-color: #3c604b ")
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-2.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/38.svg', alt='')
              .col-lg-10
                p.mb-0.text-white "Un título valor legal que el vendedor o prestador del servicio podrá librar y entregar o remitir al comprador o beneficiario del servicio." 
      p.mb-5(data-aos='fade-right') Para que una factura sea legalmente válida y constituya un título valor, debe contener como mínimo los requisitos estipulados en el artículo 774 del código de comercio: 
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3
          .tarjeta(style="background-color: #f5dd94").p-5
            .d-flex.mb-4
              img(src='@/assets/curso/temas/39.svg', alt='').m-auto(style="width: 70px")
            p.mb-0 El prestador del servicio debe dejar constancia en el original de la factura del estado de pago del precio o remuneración y las condiciones del pago si fuera el caso. Los terceros a quienes se haya transferido la factura también están sujetos a esta obligación. 
        .col-lg-4.mb-lg-0.mb-3
          .tarjeta(style="background-color: #95dbb3").p-5
            .d-flex.mb-4
              img(src='@/assets/curso/temas/40.svg', alt='').m-auto(style="width: 70px")
            p.mb-0 La factura que no cumpla con la totalidad de los requisitos legales no tendrá el carácter de título valor. Sin embargo, la omisión de alguno de estos requisitos no afectará la validez del negocio jurídico que dio origen a la factura. 
    .titulo-tres.mb-4: h3 Requisitos tributarios de la factura
    p.mb-5(data-aos='fade-right') Para efectos tributarios, la factura debe cumplir con los requisitos establecidos en el artículo 617 del estatuto tributario, que incluyen: 
    .row.justify-content-center.mb-5.g-0 
      .col-lg-4.col-7.mb-lg-0.mb-3
        .p-4(style="background-color: #daf2e4").h-100 
          img(src='@/assets/curso/temas/41.svg', alt='')
      .col-lg-6
        .p-4.h-100(style="background-color: #fae9b5")
          ul.lista-ul--color
            li
              i.fas.fa-check-circle
              | Estar denominada expresamente como factura de venta. 
            li
              i.fas.fa-check-circle
              | Contener los datos del prestador del servicio y del asegurador o responsable del pago. 
            li
              i.fas.fa-check-circle
              | Tener un número consecutivo de facturación. 
            li
              i.fas.fa-check-circle
              | Incluir la fecha de expedición. 
            li
              i.fas.fa-check-circle
              | Describir específicamente los servicios prestados. 
            li
              i.fas.fa-check-circle
              | Indicar el valor total de la operación en números y letras.
    .titulo-tres.mb-4: h3 Soportes de la factura
    p.mb-5(data-aos='fade-right') Los soportes de la factura incluyen: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/42.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Detalle de cargos
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/43.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Autorizaciones
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/44.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Resumen de atención o epicrisis
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/45.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Resultados de exámenes
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/46.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Descripción quirúrgica
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/47.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Registro de anestesia
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/48b.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Comprobante de recibido del usuario
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/49.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Hoja de traslado
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/50.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Orden y/o fórmula médica
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/51.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Lista de precios
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/52.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Recibo de pago compartido
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/53.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Informe patronal de accidente de trabajo (IPAT)
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/54.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Factura por el cobro al SOAT y/o Fosyga
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/55.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Historia clínica
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/56.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Hoja de atención de urgencias
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/57.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Odontograma
      .col-lg-3.mb-lg-4.mb-3
        .d-flex.p-4.align-items-center(style="background-color: #daf2e4")
          img(src='@/assets/curso/temas/58.svg', alt='' style="width: 72px ").mx-3
          p.mb-0 Hoja de administración de medicamentos
    .titulo-tres.mb-5: h3 Aplicativos de facturación 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0 Existen múltiples #[em software] en el mercado colombiano para el sector salud. No hay un sistema operativo específico para la facturación en Colombia, pero el aplicativo adoptado debe cumplir con los criterios de elaboración, revisión y aprobación del documento para garantizar que se ha completado el proceso de ingreso de información para las facturas, revisión de pertinencia médica y aprobación para su generación y cobro. 
      .col-lg-3(data-aos="fade-left"): img(src='@/assets/curso/temas/59.svg', alt='')
    .titulo-tres.mb-5: h3 Registros contables 
    p.mb-5(data-aos='fade-right') Nos enfocaremos en los costos, ya que todas las actividades y procedimientos en las instituciones de salud deben ser costeados. La contabilidad de costos registra, compendia, analiza e interpreta los detalles de los costos de materiales, mano de obra y cargos indirectos. Los elementos del costo en salud se clasifican generalmente en: 
    .row.justify-content-center.mb-3.g-0
      .col-lg-2.mb-lg-0.mb-3(data-aos="fade-right")
        .p-3.d-flex.flex-column.align-items-center(style="background-color: #fae9b5 ")
          img(src='@/assets/curso/temas/60.svg', alt='' style="width: 67px").mb-2
          h4.mb-0  Costos directos 
      .col-lg-4(data-aos="fade-left")
        .p-4.h-100(style="background-color:  #3c604b").d-flex.align-items-center
          p.mb-0.text-white Recursos consumidos directamente en la producción del servicio.
    .row.justify-content-center.mb-5.g-0
      .col-lg-2.mb-lg-0.mb-3(data-aos="fade-right")
        .p-3.d-flex.flex-column.align-items-center(style="background-color: #fae9b5 ")
          img(src='@/assets/curso/temas/60.svg', alt='' style="width: 67px").mb-2
          h4.mb-0  Costos indirectos
      .col-lg-4(data-aos="fade-left")
        .p-4.h-100(style="background-color:  #3c604b").d-flex.align-items-center
          p.mb-0.text-white Recursos necesarios para el apoyo de las actividades de producción y comercialización.

</template>

<script>
export default {
  name: 'Tema4',
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
