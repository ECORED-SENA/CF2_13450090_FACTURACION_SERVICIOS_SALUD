<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos='flip-up')
      .titulo-principal__numero
        span 2
      h1 Plan de Beneficios en Salud (PBS)
    p(data-aos='fade-left') El Plan de Beneficios en Salud, PBS, sigla manejada actualmente, está determinada por la Resolución 2366 de 2023, la cual actualiza integralmente los servicios y tecnologías de salud, financiados con recursos de la Unidad de Pago por Capitación (UPC).
    p.mb-5(data-aos='fade-right') Incluye un conjunto de acciones de prevención de la enfermedad y de recuperación de la salud desde la medicina preventiva básica hasta diversos tratamientos de alta complejidad, incluyendo: 
    .row.justify-content-center.mb-3(data-aos='fade-right')
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/12.svg', alt='' style="width: 80px").mb-3
          h5 Consulta
          p Medicina general y especializada.

      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/13.svg', alt='' style="width: 80px").mb-3
          h5 Odontología 
          p Con excepción de ortodoncia, periodoncia y prótesis.
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/14.svg', alt='' style="width: 80px").mb-3
          h5 Promoción de la salud y prevención de la enfermedad 
          p Acciones enfocadas en la promoción de la salud y la prevención de enfermedades.
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/15.svg', alt='' style="width: 80px").mb-3
          h5 Atención inicial de urgencias 
          p Servicios proporcionados en situaciones de urgencia.
    .row.justify-content-center.mb-5(data-aos='fade-left')
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/16.svg', alt='' style="width: 80px").mb-3
          h5 Diagnóstico 
          p Incluye laboratorio clínico, radiología, ecografías, medicina nuclear, resonancia electromagnética y escanografía.
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/17.svg', alt='' style="width: 80px").mb-3
          h5 Hospitalización 
          p Servicios de estancia hospitalaria.
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/18.svg', alt='' style="width: 80px").mb-3
          h5 Tratamientos quirúrgicos
          p Servicios quirúrgicos en niveles de baja, mediana y alta complejidad.
      .col-md-8.col-lg-3.mb-lg-0.mb-3
        .p-5(style="background-color: #fae9b5 ").h-100.py-4
          img(src='@/assets/curso/temas/19.svg', alt='' style="width: 80px").mb-3
          h5 Apoyo terapéutico 
          p Incluye terapia física, respiratoria, ocupacional y del lenguaje.
    p.mb-5(data-aos='fade-right') Si dentro del acuerdo de voluntades se dispone que la facturación se debe hacer mediante el manual SOAT, es importante conocer lo siguiente:  
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.p-5(style="background-color: #40654f ")(data-aos='fade-right')
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/20.svg', style="width: 140px" alt='').m-auto
            .col-lg-10.text-white
              p La norma hoy que determina el régimen tarifario, es el Decreto Reglamentario Único 780 de 2016.
              p.mb-0 Para este régimen tarifario actual (manual SOAT), las tarifas de actividades anteriormente se determinaban según su factor establecido en SMLDV, desde el año 2022, por el Decreto 2644, se reclasifican estos factores en UVT (unidades de valor tributario).
    p.mb-5(data-aos='fade-right') Las entidades prestadoras de servicios de salud deben aplicar la liquidación de procedimientos cuando se trate de #[b víctimas de accidentes de tránsito, desastres naturales, atentados terroristas, atención inicial de urgencias y otros eventos catastróficos] definidos por el Consejo Nacional de Seguridad Social en Salud.
    p.mb-4(data-aos='fade-right') #[b A continuación, se hace una descripción teniendo como base el Manual de Tarifas SOAT y de acuerdo con cada uno de los siguientes capítulos: ]
    .f-2-2.mn.p-5
      .row.justify-content-center.mb-5(data-aos='fade-down')
        .col-md-8.col-lg-3.mb-lg-0.mb-3
          .tarjeta-adornos.p-5.h-100
            .d-flex.mb-4
              img(src='@/assets/curso/temas/22.svg', alt='' style="width: 94px").m-auto
            h5.text-center  Capítulo I
            p Campo de aplicación. Será de obligatorio cumplimiento para las Instituciones Prestadoras de Salud (IPS) públicas y entidades privadas.
        .col-md-8.col-lg-3.mb-lg-0.mb-3
          .tarjeta-adornos.p-5.h-100
            .d-flex.mb-4
              img(src='@/assets/curso/temas/23.svg', alt='' style="width: 94px").m-auto
            h5.text-center  Capítulo II
            p Definiciones.
        .col-md-8.col-lg-3.mb-lg-0.mb-3
          .tarjeta-adornos.p-5.h-100
            .d-flex.mb-4
              img(src='@/assets/curso/temas/24.svg', alt='' style="width: 94px").m-auto
            h5.text-center  Capítulo III
            p Intervenciones y procedimientos médico-quirúrgicos, nomenclatura y clasificación según grupo quirúrgico. Tarifas establecidas en Salarios Mínimos Legales Diarios Vigentes.
        .col-md-8.col-lg-3.mb-lg-0.mb-3
          .tarjeta-adornos.p-5.h-100
            .d-flex.mb-4
              img(src='@/assets/curso/temas/25.svg', alt='' style="width: 94px").m-auto
            h5.text-center  Capítulo IV
            p Servicios intrahospitalarios y ambulatorios, incluyendo estancias, servicios profesionales, derechos de sala, materiales, suministros y equipos.
      .row.justify-content-center
        .col-lg-5.mb-lg-0.mb-3(data-aos='fade-right')
          p.mb-0 #[b En el Manual ISS 2001], las actividades, intervenciones y procedimientos están codificados, lo cual facilita su ordenamiento lógico y detallado. Este orden es, a su vez, un instrumento que facilita la implantación ágil y oportuna de la Clasificación Única de Procedimientos en Salud (CUPS). 
            br
            br
            | El manual tarifario ISS está dividido en cinco capítulos, los cuales están organizados de forma céfalo-caudal, es decir, de la cabeza a los pies. 
        .col-lg-3.col-6.mb-lg-0.mb-3(data-aos='fade-down'): img(src='@/assets/curso/temas/26.svg', alt='')
    p.mb-5.mt-0.mt-lg-5(data-aos='fade-right') #[b Sus capítulos son: ]
    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-md-8.col-lg-8
        .tarjeta-adornos-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/27.svg', alt='')
            .col-lg-10
              h5 Capítulo I
              p Listado de intervenciones y procedimientos médico-quirúrgicos, nomenclatura, clasificación y calificación en unidades de valor relativo (UVR).
        .tarjeta-adornos-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/28.svg', alt='')
            .col-lg-10
              h5 Capítulo II
              p Exámenes, estudios y procedimientos clínicos de diagnóstico, tratamientos, nomenclatura y clasificación, junto con tarifas. 
        .tarjeta-adornos-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.svg', alt='')
            .col-lg-10
              h5 Capítulo III
              p Servicios intrahospitalarios y ambulatorios, internación, servicios profesionales, derechos de sala, materiales, suministros y equipos.
        .tarjeta-adornos-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/30.svg', alt='')
            .col-lg-10
              h5 Capítulo IV
              p Conjuntos de atención en salud por tarifa integral.
        .tarjeta-adornos-2.p-5.mb-3
          .row.justify-content-center.align-items-center
            .col-lg-2.col-5.mb-lg-0.mb-3: img(src='@/assets/curso/temas/31.svg', alt='')
            .col-lg-10
              h5 Capítulo V
              p Actividades, intervenciones quirúrgicas, procedimientos y atenciones.
    .titulo-tres.mb-5(data-aos="fade-right"): h3 Procedimiento para facturar con ISS 2001: 
    p(data-aos="fade-right") Siempre se debe tener en cuenta la descripción del manual SOAT, según los contenidos del Decreto Reglamentario Único 780 de 2016, donde en el Artículo 2.5.3.6.1 expresa esta información, determinando actualmente que, en el anexo técnico 1 de este decreto, están los contenidos de actividades, procedimientos intervenciones, que a hoy están valoradas en fracciones de UVT, no en fracciones de SMLDV.
    p.mb-0(data-aos="fade-left") Igualmente, tenga presente el Acuerdo 209 de 1999 (ISS 2000), así como la información del Acuerdo 256 de 2001. Los dos manuales del ISS son similares en cuando a su estructura.

</template>

<script>
export default {
  name: 'Tema2',
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
